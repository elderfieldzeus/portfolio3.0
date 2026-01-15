"use client";

import type React from "react";
import { useState } from "react";
import NonHomeHeader from "@/components/custom-ui/NonHomeHeader";
import BlurFade from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { experiences, achievements, certifications } from "@/data/resume";
import ExperienceItem from "@/components/resume/ExperienceItem";
import LandingButton from "@/components/custom-ui/LandingButton";
import { IoMdDownload } from "react-icons/io";
import Link from "next/link";
import AchievementGridCard from "@/components/resume/AchievementGridCard";
import CertificationGridCard from "@/components/resume/CertificationGridCard";
import AchievementModal from "@/components/resume/AchievementModal";
import CertificationModal from "@/components/resume/CertificationModal";
import { IAchievement, ICertification } from "@/data/resume";

export default function ResumePage() {
  const [selectedAchievement, setSelectedAchievement] =
    useState<IAchievement | null>(null);
  const [isAchievementModalOpen, setIsAchievementModalOpen] = useState(false);
  const [selectedCertification, setSelectedCertification] =
    useState<ICertification | null>(null);
  const [isCertificationModalOpen, setIsCertificationModalOpen] =
    useState(false);

  const handleAchievementClick = (achievement: IAchievement) => {
    setSelectedAchievement(achievement);
    setIsAchievementModalOpen(true);
  };

  const handleAchievementModalClose = (open: boolean) => {
    setIsAchievementModalOpen(open);
    if (!open) {
      setTimeout(() => {
        setSelectedAchievement(null);
      }, 200);
    }
  };

  const handleCertificationClick = (certification: ICertification) => {
    setSelectedCertification(certification);
    setIsCertificationModalOpen(true);
  };

  const handleCertificationModalClose = (open: boolean) => {
    setIsCertificationModalOpen(open);
    if (!open) {
      setTimeout(() => {
        setSelectedCertification(null);
      }, 200);
    }
  };

  return (
    <main className="w-full overflow-x-hidden overflow-y-auto min-h-screen bg-black text-primary relative">
      <section className="w-(--w-mfull) mx-auto flex flex-col items-start gap-12 my-10 px-4 md:px-8">
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-start gap-4">
          <NonHomeHeader
            title="Resume"
            description="Explore my professional experience, education, certifications, and technical expertise in one place."
          />
          <Link
            href="/pdf/Elderfield-Zeus-Curriculum-Vitae.pdf"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer"
          >
            <LandingButton className="mt-6 md:mt-0">
              <IoMdDownload />
              <p>Download CV</p>
            </LandingButton>
          </Link>
        </div>

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

        {/* Achievements Section */}
        <BlurFade delay={0.2} inView className="w-full">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-medium font-kanit text-white">
              Achievements
            </h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <AchievementGridCard
                  key={index}
                  achievement={achievement}
                  onClick={() => handleAchievementClick(achievement)}
                />
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Certifications Section */}
        <BlurFade delay={0.3} inView className="w-full">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-medium font-kanit text-white">
              Certifications
            </h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((certification, index) => (
                <CertificationGridCard
                  key={index}
                  certification={certification}
                  onClick={() => handleCertificationClick(certification)}
                />
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Achievement Modal */}
        <AchievementModal
          achievement={selectedAchievement}
          open={isAchievementModalOpen}
          onOpenChange={handleAchievementModalClose}
        />

        {/* Certification Modal */}
        <CertificationModal
          certification={selectedCertification}
          open={isCertificationModalOpen}
          onOpenChange={handleCertificationModalClose}
        />
      </section>
    </main>
  );
}
