import { Telescope } from "lucide-react";

interface SectionConfig {
  id: string;
  text: string;
  href: string;
  Icon: React.ElementType;
}

export const sectionConfigs: SectionConfig[] = [
  {
    id: "landing",
    text: "Explore!",
    href: "/explore",
    Icon: Telescope,
  },
  // {
  //   id: "about",
  //   text: "Know more",
  //   href: "/about",
  //   Icon: User,
  // },
  // {
  //   id: "resume",
  //   text: "View resume",
  //   href: "/resume",
  //   Icon: Paperclip,
  // },
  // {
  //   id: "projects",
  //   text: "View projects",
  //   href: "/projects",
  //   Icon: FolderOpen,
  // },
  // {
  //   id: "contact",
  //   text: "Back to top",
  //   href: "#landing",
  //   Icon: ArrowUp,
  // },
];
