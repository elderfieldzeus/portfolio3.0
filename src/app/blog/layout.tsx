import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Zeus Elderfield",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
