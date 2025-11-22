"use client";

import type React from "react";
import NonHomeHeader from "@/components/custom-ui/NonHomeHeader";
import UnderConstruction from "@/components/custom-ui/UnderConstruction";

export default function ProjectsPage() {
  return (
    <main className="w-full overflow-x-hidden overflow-y-auto min-h-screen bg-black text-primary relative">
      <section className="w-(--w-mfull) mx-auto flex flex-col items-start gap-8 my-10">
        <NonHomeHeader
          title="Projects"
          description="Explore my personal projects, collaborations, and open-source contributions."
        />
        <UnderConstruction />
      </section>
    </main>
  );
}
