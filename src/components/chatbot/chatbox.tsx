import Image from "next/image";
import { Button } from "../ui/button";
import { Send, X } from "lucide-react";
import Message from "./Message";
import { Input } from "../ui/input";
import { FormEvent, useEffect, useRef, useState } from "react";
import { sleep } from "@/lib/utils";

interface ChatboxProps {
  handleClose: () => void;
}

const Chatbox = ({ handleClose }: ChatboxProps) => {
  const MAX_INPUT_LENGTH = 1000;
  const CHUNK_DELAY_MS = 300;

  const [sessionId, setSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string }[]
  >([]);
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const chatboxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSessionId(crypto.randomUUID());
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.length <= MAX_INPUT_LENGTH) {
      setInput(e.currentTarget.value);
    }
  };

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages((prev) => [
      ...prev,
      { role: "user", content: input },
      { role: "assistant", content: "" },
    ]);
    setInput("");
    chatboxRef.current?.scrollTo(0, chatboxRef.current.scrollHeight);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: newMessages, sessionId }),
      });

      if (!res.ok) {
        throw new Error("Network response error");
      }

      const decoder = new TextDecoder();
      const reader = res.body?.getReader();
      let done = false;

      while (true) {
        const { value, done: doneReading } = await reader!.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);

        setIsLoading(false);

        setMessages((prev) => {
          const last = prev[prev.length - 1];

          if (last && last.role === "assistant") {
            return [
              ...prev.slice(0, -1),
              { ...last, content: last.content + chunkValue },
            ];
          }

          return [...prev, { role: "assistant", content: chunkValue }];
        });

        chatboxRef.current?.scrollTo(0, chatboxRef.current.scrollHeight);

        if (done) {
          break;
        }

        await sleep(CHUNK_DELAY_MS);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-zinc-800">
        <div className="flex gap-2">
          <div className="size-10 flex items-center justify-center overflow-hidden rounded-full">
            <Image
              className="object-cover w-full h-auto"
              src="/images/me_aha.jpeg"
              alt="Me"
              height={10000}
              width={10000}
            />
          </div>
          <div className="flex flex-col justify-between">
            <p className="font-semibold">Zeus Elderfield</p>
            <div className="flex items-center gap-1.5 text-xs font-light">
              <div className="size-1.5 rounded-full bg-green-400" />
              <p>Online</p>
            </div>
          </div>
        </div>

        <Button
          variant={"ghost"}
          onClick={handleClose}
          className="cursor-pointer"
        >
          <X />
        </Button>
      </div>

      {/* Message Content */}
      <div
        className="h-88 w-full overflow-y-auto p-4 scroll-smooth"
        ref={chatboxRef}
      >
        <Message
          role="assistant"
          content="Hi there! What would you like to ask me today?"
        />
        {messages.map((msg, index) => (
          <Message
            key={index}
            role={msg.role}
            content={msg.content}
            isLoading={index === messages.length - 1 && isLoading}
          />
        ))}
      </div>

      {/* Input Bar */}
      <div className="flex flex-col p-4 border-t border-zinc-800 gap-1">
        <form className="flex gap-2 w-full" onSubmit={sendMessage}>
          <Input
            value={input}
            onChange={handleInputChange}
            className="h-10 font-light "
            placeholder="Ask me something..."
          />
          <Button
            variant={"default"}
            disabled={input.length === 0}
            className="flex items-center justify-center size-10 cursor-pointer bg-primary"
          >
            <Send />
          </Button>
        </form>
        <div className="flex justify-between w-full text-[0.6rem] text-secondary-foreground font-light">
          <p className="ml-1">Powered by Gemini 2.5 Flash Lite</p>
          <p>
            {input.length}/{MAX_INPUT_LENGTH}
          </p>
        </div>
      </div>
    </>
  );
};

export default Chatbox;
