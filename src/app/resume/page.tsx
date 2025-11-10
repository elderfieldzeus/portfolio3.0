"use client";

import type React from "react";
import NonHomeHeader from "@/components/custom-ui/NonHomeHeader";
import UnderConstruction from "@/components/custom-ui/UnderConstruction";

export default function ResumePage() {
  return (
    <main className="w-full overflow-x-hidden overflow-y-auto min-h-screen bg-black text-primary relative">
      <section className="w-[min(80vw,_50rem)] mx-auto flex flex-col items-start gap-8 my-10">
        <NonHomeHeader
          title="Resume"
          description="Explore my professional experience, education, certifications, and technical expertise in one place."
        />

        <UnderConstruction />
      </section>
    </main>
  );
}
