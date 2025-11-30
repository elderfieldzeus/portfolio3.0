import { GoogleGenAI } from "@google/genai";

export const API_KEY = process.env.PORTFOLIO_CHAT_BOT_KEY;

export const gemini = new GoogleGenAI({
  apiKey: API_KEY,
});

export const GEMINI_MODEL = "gemini-2.5-flash-lite";
