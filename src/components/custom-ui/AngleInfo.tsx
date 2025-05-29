import { cn } from "@/lib/utils";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

interface AngleInfoProps {
  children?: React.ReactNode;
  className?: string;
}

const AngleInfo: React.FC<AngleInfoProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "flex gap-1 items-center font-extralight text-sm",
        className,
      )}
    >
      <FaAngleRight className="size-3 mx-1" />
      {children}
    </div>
  );
};

export default AngleInfo;
