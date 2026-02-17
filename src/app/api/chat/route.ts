import { API_KEY, gemini, GEMINI_MODEL } from "@/server/config/gemini";
import ChatbotService from "@/server/services/chatbot-service";
import { ClientMessage } from "@/server/types/chatbot";

export const POST = async (req: Request) => {
  try {
    const {
      messages,
      sessionId,
    }: {
      messages: ClientMessage[];
      sessionId?: string;
    } = await req.json();

    ChatbotService.cleanupExpiredConversations();

    const convoId = sessionId || crypto.randomUUID();

    if (!API_KEY) {
      return new Response("API key not configured", { status: 500 });
    }

    const contents = messages.map((message) => ({
      role: message.role === "assistant" ? "model" : "user",
      parts: [{ text: message.content }],
    }));

    const messagesToStore = messages.filter(
      (message) => !(!message.content.trim() || message.role === "assistant"),
    );

    ChatbotService.addConversation(convoId, messagesToStore);

    const upstream = await gemini.models.generateContentStream({
      model: GEMINI_MODEL,
      contents: [
        {
          role: "user",
          parts: [{ text: ChatbotService.CHATBOT_PROMPT }],
        },
        ...(ChatbotService.getConversation(convoId)?.messages.map(
          (message) => ({
            role: message.role === "assistant" ? "model" : "user",
            parts: [{ text: message.content }],
          }),
        ) || []),
      ],
    });

    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of upstream) {
          const chunkData = chunk.text || "";
          if (!chunkData) continue;

          controller.enqueue(encoder.encode(chunkData));
        }

        controller.close();
      },
    });

    return new Response(stream, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
        "X-Accel-Buffering": "no",
      },
    });
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    if (
      message.includes("429") ||
      message.includes("RESOURCE_EXHAUSTED") ||
      message.includes("quota")
    ) {
      return new Response(
        "I've hit my daily usage limit. Please try again tomorrow!",
        { status: 429 },
      );
    }
    console.error("Error in chat route:", e);
    return new Response("Internal server error", { status: 500 });
  }
};
