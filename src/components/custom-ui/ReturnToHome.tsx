"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Spinner } from "../ui/spinner";

interface ReturnToHomeProps {
  returnTo?: string;
  returnToLabel?: string;
}

const ReturnToHome: React.FC<ReturnToHomeProps> = ({
  returnTo,
  returnToLabel,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Link
      href={returnTo || "/"}
      className="flex items-center gap-2 cursor-pointer"
      onClick={() => setIsLoading(true)}
    >
      {isLoading ? (
        <Spinner className="size-4" />
      ) : (
        <ArrowLeft className="size-4" />
      )}
      <p className="text-sm font-light">Return to {returnToLabel || "Home"}</p>
    </Link>
  );
};

export default ReturnToHome;
