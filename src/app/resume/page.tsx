"use client";

import type React from "react";
import NonHomeHeader from "@/components/custom-ui/NonHomeHeader";
import BlurFade from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { experiences } from "@/data/resume";
import ExperienceItem from "@/components/resume/ExperienceItem";

export default function ResumePage() {
  return (
    <main className="w-full overflow-x-hidden overflow-y-auto min-h-screen bg-black text-primary relative">
      <section className="w-(--w-mfull) mx-auto flex flex-col items-start gap-12 my-10 px-4 md:px-8">
        <NonHomeHeader
          title="Resume"
          description="Explore my professional experience, education, certifications, and technical expertise in one place."
        />

        {/* Experience Section */}
        <BlurFade delay={0.1} inView className="w-full">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-medium font-kanit text-white">
              Experience
            </h2>
            <MagicCard className="border rounded-lg border-opacity-20 w-full bg-black overflow-hidden">
              <div className="p-6">
                {experiences.map((experience, index) => (
                  <ExperienceItem
                    key={experience.company.id}
                    experience={experience}
                    isLast={index === experiences.length - 1}
                  />
                ))}
              </div>
            </MagicCard>
          </div>
        </BlurFade>

        {/* Achievements Section - Placeholder for next prompt */}
        <div className="w-full text-center py-8">
          <p className="text-gray-500 text-sm">
            Achievements section coming soon...
          </p>
        </div>

        {/* Certifications Section - Placeholder for next prompt */}
        <div className="w-full text-center py-8">
          <p className="text-gray-500 text-sm">
            Certifications section coming soon...
          </p>
        </div>
      </section>
    </main>
  );
}
