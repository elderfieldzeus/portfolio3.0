import React from "react";
import BlurFade from "../ui/blur-fade";
import { MagicCard } from "../ui/magic-card";
import { FaCertificate } from "react-icons/fa";
import { MedalIcon } from "lucide-react";
import { MdOutlineWork } from "react-icons/md";
import ResumeEvent from "../custom-ui/ResumeEvent";
import { achievements, certifications, experiences } from "@/data/resume";
import ViewMore from "../custom-ui/ViewMore";

const Resume = () => {
  return (
    <div className="flex flex-col items-center gap-8 mt-24 max-w-[80vw] md:max-w-[50rem] mx-auto font-kanit">
      <BlurFade delay={0.25} inView>
        <p id="resume" className="text-4xl">
          Resume
        </p>
      </BlurFade>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-4 max-w-[50rem] w-[80vw] md:w-full mx-[10vw]">
        <BlurFade delay={0.25} inView>
          <MagicCard className="border rounded-lg border-opacity-20 w-full h-full bg-black overflow-hidden flex pb-6">
            <div className=" flex font-light gap-2 items-center p-4 mb-2">
              <MdOutlineWork className="size-4" />
              <p className="text-gray-300 text-sm">Experience</p>
            </div>
            <div>
              {experiences.map((experience, index) => {
                return (
                  <ResumeEvent
                    key={index}
                    event={experience}
                    isFirst={index == 0}
                    isLast={index == experiences.length - 1}
                  />
                );
              })}
            </div>
          </MagicCard>
        </BlurFade>
        <BlurFade delay={0.25} inView>
          <MagicCard className="border rounded-lg border-opacity-20 w-full h-full bg-black overflow-hidden flex pb-2">
            <div className=" flex font-light gap-2 items-center p-4 mb-2">
              <MedalIcon className="size-4" />
              <p className="text-gray-300 text-sm">Achievements</p>
            </div>
            <div>
              {achievements.map((achievement, index) => {
                return (
                  <ResumeEvent
                    key={index}
                    event={achievement}
                    isFirst={index == 0}
                    isLast={index == achievements.length - 1}
                  />
                );
              })}
            </div>
          </MagicCard>
        </BlurFade>
        <BlurFade delay={0.25} inView>
          <MagicCard className="border rounded-lg border-opacity-20 w-full h-full bg-black overflow-hidden flex pb-2">
            <div className=" flex font-light gap-2 items-center p-4 mb-2">
              <FaCertificate className="size-4" />
              <p className="text-gray-300 text-sm">Certifications</p>
            </div>
            <div>
              {certifications.map((certification, index) => {
                return (
                  <ResumeEvent
                    key={index}
                    event={certification}
                    isFirst={index == 0}
                    isLast={index == certifications.length - 1}
                  />
                );
              })}
            </div>
          </MagicCard>
        </BlurFade>
      </div>
      <BlurFade delay={0.25} inView>
        <ViewMore text="View Resume" href="/resume" />
      </BlurFade>
    </div>
  );
};

export default Resume;
