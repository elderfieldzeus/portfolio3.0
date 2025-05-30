"use client";

import { Home } from "lucide-react";
import React from "react";
import LandingButton from "./LandingButton";
import { handleHrefRoute } from "@/lib/utils";
import { useRouter } from "next/navigation";

const FloatingReturnButton = () => {
  const router = useRouter();

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-in-out translate-y-0 opacity-100`}
    >
      <LandingButton
        onClick={() => handleHrefRoute("/", router)}
        className="group relative overflow-hidden bg-primary text-black hover:text-zinc-800 shadow-lg rounded-full px-4 hover:cursor-pointer"
      >
        <div className="flex items-center gap-3">
          {/* Icon with smooth transition */}
          <div
            className={`transition-all duration-400 ease-in-out group-hover:scale-110 opacity-100 translate-x-0`}
          >
            <Home className="size-4" />
          </div>

          {/* Text with fade animation */}

          <span
            className={`font-medium text-sm whitespace-nowrap transition-all duration-400 ease-in-out opacity-100 translate-x-0`}
          >
            Return to Home
          </span>
        </div>

        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 transition-opacity duration-300 rounded-full" />

        {/* Subtle pulse effect during transitions */}
        <div
          className={`absolute inset-0 bg-white/10 rounded-full transition-opacity duration-200`}
        />
      </LandingButton>
    </div>
  );
};

export default FloatingReturnButton;
