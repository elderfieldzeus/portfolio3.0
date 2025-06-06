import FloatingReturnButton from "@/components/custom-ui/FloatingReturnButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Zeus Elderfield",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <FloatingReturnButton />
    </>
  );
}
