"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { sectionConfigs } from "@/data/navigation";
import { useRouter } from "next/navigation";
import { handleHrefRoute } from "@/lib/utils";
import LandingButton from "./LandingButton";

export function FloatingButton() {
  const router = useRouter();

  const [currentSection, setCurrentSection] = useState("landing");
  const [isVisible, setIsVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(true);
  const [displayedConfig, setDisplayedConfig] = useState(sectionConfigs[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id !== currentSection) {
            // Start text fade out
            setIsTextVisible(false);

            // After fade out completes, update content and fade in
            setTimeout(() => {
              setCurrentSection(entry.target.id);
              const newConfig =
                sectionConfigs.find(
                  (config) => config.id === entry.target.id,
                ) || sectionConfigs[0];
              setDisplayedConfig(newConfig);
              setIsTextVisible(true);
            }, 200); // Half of the transition duration
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-20% 0px -20% 0px",
      },
    );

    // Observe all sections
    sectionConfigs.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Show component after a short delay
    const timer = setTimeout(() => setIsVisible(true), 1200);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [currentSection]);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <LandingButton
        onClick={() => handleHrefRoute(displayedConfig.href, router)}
        className="group relative overflow-hidden bg-primary text-black hover:text-zinc-800 shadow-lg rounded-full px-4 hover:cursor-pointer"
      >
        <div className="flex items-center gap-3">
          {/* Icon with smooth transition */}
          <div
            className={`transition-all duration-400 ease-in-out group-hover:scale-110 ${
              isTextVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-2"
            }`}
          >
            <displayedConfig.Icon className="size-4" />
          </div>

          {/* Text with fade animation */}

          <span
            className={`font-medium text-sm whitespace-nowrap transition-all duration-400 ease-in-out ${
              isTextVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-2"
            }`}
          >
            {displayedConfig.text}
          </span>
        </div>

        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 transition-opacity duration-300 rounded-full" />

        {/* Subtle pulse effect during transitions */}
        <div
          className={`absolute inset-0 bg-white/10 rounded-full transition-opacity duration-200 ${
            !isTextVisible ? "opacity-100" : "opacity-0"
          }`}
        />
      </LandingButton>
    </div>
  );
}
