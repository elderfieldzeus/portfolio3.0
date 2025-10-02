import { ArrowUpRightFromSquare } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Spinner } from "../ui/spinner";

interface ViewMoreProps {
  text: string;
  href: string;
}

const ViewMore: React.FC<ViewMoreProps> = ({ text, href }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Link
      href={href}
      className={`flex w-full justify-center items-center gap-2`}
      onClick={() => setIsLoading(true)}
    >
      <p className="font-medium text-base">{text}</p>
      {isLoading ? (
        <Spinner className="size-4" />
      ) : (
        <ArrowUpRightFromSquare className="size-4" />
      )}
    </Link>
  );
};

export default ViewMore;
