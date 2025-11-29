export type ClientMessage = {
  role: "user" | "assistant";
  content: string;
};

export type StoredConversation = {
  messages: ClientMessage[];
  expiresAt: number;
};
