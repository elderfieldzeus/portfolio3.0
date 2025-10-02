import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Spinner } from "../ui/spinner";

const ReturnToHome = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Link
      href="/"
      className="flex items-center gap-2"
      onClick={() => setIsLoading(true)}
    >
      {isLoading ? (
        <Spinner className="size-4" />
      ) : (
        <ArrowLeft className="size-4" />
      )}
      <p className="text-sm font-light">Return to Home</p>
    </Link>
  );
};

export default ReturnToHome;
