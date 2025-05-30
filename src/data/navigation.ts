import { User, FolderOpen, Home, Paperclip, ArrowUp } from "lucide-react";

interface SectionConfig {
  id: string;
  text: string;
  href: string;
  Icon: React.ElementType;
}

export const sectionConfigs: SectionConfig[] = [
  {
    id: "landing",
    text: "Welcome!",
    href: "#about",
    Icon: Home,
  },
  {
    id: "about",
    text: "More about me",
    href: "/about",
    Icon: User,
  },
  {
    id: "resume",
    text: "View my resume",
    href: "/resume",
    Icon: Paperclip,
  },
  {
    id: "projects",
    text: "View all projects",
    href: "/projects",
    Icon: FolderOpen,
  },
  {
    id: "contact",
    text: "Back to top",
    href: "#landing",
    Icon: ArrowUp,
  },
];
