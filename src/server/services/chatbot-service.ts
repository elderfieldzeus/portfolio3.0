import {
  aboutData,
  backend,
  devopsAndTools,
  dsml,
  frontend,
} from "@/data/about";
import { StoredConversation } from "../types/chatbot";
import { projects } from "@/data/projects";
import { achievements, certifications, experiences } from "@/data/resume";
import { BASE_PROMPT } from "../utils/prompt";

class ChatbotService {
  static CONVO_TTL_MS = 60 * 60 * 1000; // 60m * 60s * 1000ms
  static conversations = new Map<string, StoredConversation>();

  static getConversation(sessionId: string): StoredConversation | null {
    const convo = this.conversations.get(sessionId);
    if (!convo) return null;
    return convo;
  }

  static addConversation(
    sessionId: string,
    messages: StoredConversation["messages"],
  ) {
    const expiresAt = Date.now() + this.CONVO_TTL_MS;
    this.conversations.set(sessionId, { messages, expiresAt });
  }

  static cleanupExpiredConversations() {
    const now = Date.now();
    for (const [key, convo] of this.conversations) {
      if (convo.expiresAt < now) {
        this.conversations.delete(key);
      }
    }
  }

  static generateChatbotPrompt() {
    const aboutSectionPropmpt =
      `
        About Zeus Elderfield:\n
        ` +
      JSON.stringify(aboutData) +
      `\n` +
      `Tech Stack:\n` +
      [...frontend, ...backend, ...dsml, ...devopsAndTools].join(", ") +
      `\n`;

    const projectSectionPrompt =
      `
        Zeus Elderfield's Projects:\n
        ` +
      JSON.stringify(projects) +
      `\n`;

    const resumeSectionPrompt =
      `
        Zeus Elderfield's Resume:\n
        ` +
      JSON.stringify({
        experiences,
        achievements,
        certifications,
      }) +
      `\n`;

    return (
      BASE_PROMPT +
      aboutSectionPropmpt +
      projectSectionPrompt +
      resumeSectionPrompt
    );
  }
}

export default ChatbotService;
