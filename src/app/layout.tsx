import type { Metadata } from "next";
import "./globals.css";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "Zeus Elderfield | Portfolio",
  description: "Portfolio of Zeus Elderfield, Software Engineer",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className + " bg-background text-foreground"}>
        {children}
      </body>
    </html>
  );
}
