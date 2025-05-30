import React from "react";
import BlurFade from "../ui/blur-fade";
import { MagicCard } from "../ui/magic-card";
import { FaCertificate } from "react-icons/fa";
import { MedalIcon } from "lucide-react";
import { MdOutlineWork } from "react-icons/md";
import ResumeEvent from "../custom-ui/ResumeEvent";

const Resume = () => {
  return (
    <div className="flex flex-col items-center gap-8 mt-24 max-w-[min(80vw,50rem)] mx-auto font-kanit">
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
              <ResumeEvent
                title="Web Developer"
                subtitle="Today's Carolinian"
                year="2025"
                isCurrent
              />
              <ResumeEvent
                title="Frontend Developer"
                subtitle="Hermes"
                year="2024"
              />
              <ResumeEvent
                title="Software Developer"
                subtitle="Freelance"
                year="2024"
                isLast
              />
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
              <ResumeEvent
                title="1st Place"
                subtitle="National CS/IT Skills Competition"
                year="2025"
                isCurrent
              />
              <ResumeEvent
                title="6th Place"
                subtitle="Codechum National Programming Competition - Finals"
                year="2024"
                isLast
              />
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
              <ResumeEvent
                title="Fundamental IT Engineers Certification"
                subtitle="PhilNITS"
                year="2025"
                isCurrent
              />
              <ResumeEvent
                title="Software Engineer Certification"
                subtitle="HackerRank"
                year="2025"
                isLast
              />
            </div>
          </MagicCard>
        </BlurFade>
      </div>
    </div>
  );
};

export default Resume;
