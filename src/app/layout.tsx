import type { Metadata } from "next";
import "./globals.css";
import { Kanit } from "next/font/google";
import FloatingButton from "@/components/chatbot/chatbot-button";
import ChatbotButton from "@/components/chatbot/chatbot-button";

const kanit = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "Zeus Elderfield",
  description:
    "Explore the portfolio of Zeus Elderfield — a Software Engineer based in Cebu.",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Zeus Elderfield",
    description:
      "Explore the portfolio of Zeus Elderfield — a Software Engineer based in Cebu.",
    url: "https://elderfieldzeus.com",
    siteName: "Portfolio | Zeus Elderfield",
    images: [
      {
        url: "https://elderfieldzeus.com/images/opengraph.png", // ✅ ideally a landscape image (e.g. 1200x630)
        width: 1200,
        height: 630,
        alt: "Portfolio | Zeus Elderfield Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeus Elderfield",
    description:
      "Explore the portfolio of Zeus Elderfield — a Software Engineer based in Cebu.",
    images: ["https://elderfieldzeus.com/images/opengraph.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={kanit.className + " bg-background text-foreground dark"}>
        {children}
      </body>
    </html>
  );
}
