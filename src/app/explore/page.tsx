"use client";

import type React from "react";
import ReturnToHome from "@/components/custom-ui/ReturnToHome";

export default function HomePage() {
  return (
    <main className="w-full overflow-hidden min-h-screen bg-black text-primary relative">
      <section className="w-[min(80vw,_50rem)] mx-auto flex flex-col items-start gap-8 my-10">
        <div className="flex flex-col gap-1">
          <ReturnToHome />
          <div className="flex items-center gap-6">
            <p className="text-4xl">Explore!</p>
          </div>
        </div>
      </section>
    </main>
  );
}
