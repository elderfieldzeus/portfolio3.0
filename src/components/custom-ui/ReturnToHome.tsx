import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const ReturnToHome = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 hover:scale-105 transition-transform hover:text-neutral-200"
    >
      <ArrowLeft className="size-4" />
      <p className="text-sm font-light">Return to Home</p>
    </Link>
  );
};

export default ReturnToHome;
