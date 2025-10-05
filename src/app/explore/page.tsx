"use client";

import type React from "react";
import { ExploreCard } from "@/components/explore/ExploreCard";
import { sections } from "@/data/explore";
import NonHomeHeader from "@/components/custom-ui/NonHomeHeader";

export default function ExplorePage() {
  return (
    <main className="w-full overflow-x-hidden overflow-y-auto min-h-screen bg-black text-primary relative">
      <section className="w-[min(80vw,_50rem)] mx-auto flex flex-col items-start gap-8 my-10">
        <NonHomeHeader
          title="Explore"
          description="A curated hub that connects you to different sections and hidden gems across my website."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {sections.map((section) => (
            <ExploreCard
              key={section.title}
              title={section.title}
              description={section.description}
              icon={section.icon}
              href={section.href}
              className={section.className}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
