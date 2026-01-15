import React from "react";
import BlurFade from "../ui/blur-fade";
import { MagicCard } from "../ui/magic-card";
import ResumeEvent from "../custom-ui/ResumeEvent";
import {
  getHomePageExperiences,
  getHomePageAchievements,
  getHomePageCertifications,
} from "@/data/resume";
import ViewMore from "../custom-ui/ViewMore";

const Resume = () => {
  return (
    <div className="flex flex-col items-center gap-8 mt-24 max-w-(--w-max) md:max-w-200 mx-auto font-kanit">
      <BlurFade delay={0.25} inView>
        <p id="resume" className="text-4xl">
          Resume
        </p>
      </BlurFade>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-4 max-w-200 w-(--w-max) md:w-full mx-[10vw]">
        <BlurFade delay={0.25} inView>
          <MagicCard className="border rounded-lg border-opacity-20 w-full h-full bg-black overflow-hidden flex pb-6">
            <div className="flex font-light items-center p-4 mb-2">
              <p className="text-gray-300 text-sm">Experience</p>
            </div>
            <div>
              {getHomePageExperiences().map((experience, index) => {
                const allExperiences = getHomePageExperiences();
                return (
                  <ResumeEvent
                    key={index}
                    event={experience}
                    isFirst={index == 0}
                    isLast={index == allExperiences.length - 1}
                  />
                );
              })}
            </div>
          </MagicCard>
        </BlurFade>
        <BlurFade delay={0.25} inView>
          <MagicCard className="border rounded-lg border-opacity-20 w-full h-full bg-black overflow-hidden flex pb-2">
            <div className="flex font-light items-center p-4 mb-2">
              <p className="text-gray-300 text-sm">Achievements</p>
            </div>
            <div>
              {getHomePageAchievements().map((achievement, index) => {
                const allAchievements = getHomePageAchievements();
                return (
                  <ResumeEvent
                    key={index}
                    event={achievement}
                    isFirst={index == 0}
                    isLast={index == allAchievements.length - 1}
                  />
                );
              })}
            </div>
          </MagicCard>
        </BlurFade>
        <BlurFade delay={0.25} inView>
          <MagicCard className="border rounded-lg border-opacity-20 w-full h-full bg-black overflow-hidden flex pb-2">
            <div className="flex font-light items-center p-4 mb-2">
              <p className="text-gray-300 text-sm">Certifications</p>
            </div>
            <div>
              {getHomePageCertifications().map((certification, index) => {
                const allCertifications = getHomePageCertifications();
                return (
                  <ResumeEvent
                    key={index}
                    event={certification}
                    isFirst={index == 0}
                    isLast={index == allCertifications.length - 1}
                  />
                );
              })}
            </div>
          </MagicCard>
        </BlurFade>
      </div>
      <BlurFade delay={0.25} inView>
        <ViewMore text="View Full Resume" href="/resume" />
      </BlurFade>
    </div>
  );
};

export default Resume;
