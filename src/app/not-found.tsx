"use client";

import ShinyButton from "@/components/ui/shiny-button";
import { handlePageTransition } from "@/lib/utils";
import { ConstructionIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="text-white w-full h-screen flex flex-col items-center justify-center gap-6">
      <div className="flex gap-2">
        <ConstructionIcon />
        <h2>Page in progress...</h2>
      </div>
      <ShinyButton
        onClick={() => handlePageTransition("/", router)}
        className="bg-primary text-black px-4 py-2 rounded-lg"
      >
        Return Home
      </ShinyButton>
    </div>
  );
}
