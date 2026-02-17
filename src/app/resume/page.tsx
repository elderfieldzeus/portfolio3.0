"use client";

import type React from "react";
import { useState } from "react";
import NonHomeHeader from "@/components/custom-ui/NonHomeHeader";
import BlurFade from "@/components/ui/blur-fade";
import {
  experiences,
  educations,
  achievements,
  certifications,
} from "@/data/resume";
import ExperienceItem from "@/components/resume/ExperienceItem";
import EducationItem from "@/components/resume/EducationItem";
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
      <section className="w-(--w-mfull) mx-auto flex flex-col items-start gap-16 my-12 px-4 md:px-8">
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
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-medium font-kanit text-white shrink-0">
                Experience
              </h2>
              <div className="flex-1 h-px bg-zinc-800" />
            </div>
            <div>
              {experiences.map((experience, index) => (
                <ExperienceItem
                  key={experience.company.id}
                  experience={experience}
                  isLast={index === experiences.length - 1}
                />
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Education Section */}
        <BlurFade delay={0.2} inView className="w-full">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-medium font-kanit text-white shrink-0">
                Education
              </h2>
              <div className="flex-1 h-px bg-zinc-800" />
            </div>
            <div>
              {educations.map((education, index) => (
                <EducationItem
                  key={education.id}
                  education={education}
                  isLast={index === educations.length - 1}
                />
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Achievements Section */}
        <BlurFade delay={0.3} inView className="w-full">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-medium font-kanit text-white shrink-0">
                Achievements
              </h2>
              <div className="flex-1 h-px bg-zinc-800" />
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4">
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
        <BlurFade delay={0.4} inView className="w-full">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-medium font-kanit text-white shrink-0">
                Certifications
              </h2>
              <div className="flex-1 h-px bg-zinc-800" />
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4">
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
