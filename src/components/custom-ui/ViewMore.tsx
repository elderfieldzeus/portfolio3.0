import { ArrowUpRightFromSquare } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ViewMoreProps {
  text: string;
  href: string;
}

const ViewMore: React.FC<ViewMoreProps> = ({ text, href }) => {
  return (
    <Link href={href} className="flex w-full justify-center items-center gap-2">
      <p className="font-medium text-base">{text}</p>
      <ArrowUpRightFromSquare className="size-4" />
    </Link>
  );
};

export default ViewMore;
