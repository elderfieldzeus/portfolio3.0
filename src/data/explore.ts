import { ImageIcon } from "lucide-react";
import { IconType } from "react-icons/lib";

export interface Section {
  title: string;
  description: string;
  icon: IconType;
  href: string;
  className?: string;
}

export const sections = [
  {
    title: "Gallery",
    description:
      "A personal collection of candid moments and memories with me and my loved ones through the years.",
    icon: ImageIcon,
    href: "/gallery",
    className: "md:col-span-2",
  },
];
