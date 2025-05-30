import React from "react";
import BlurFade from "../ui/blur-fade";
import FlexRow from "@/components/custom-ui/FlexRow";
import { MagicCard } from "@/components/ui/magic-card";
import Marquee from "@/components/ui/marquee";
import { CurrentlyLearning, techStacks } from "@/data/about";
import TechStackCard from "@/components/custom-ui/TechStackCard";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import AngleInfo from "@/components/custom-ui/AngleInfo";
import Image from "next/image";

const AboutMe: React.FC = () => {
  const tech1 = techStacks.filter((_, i) => i % 2 == 0);
  const tech2 = techStacks.filter((_, i) => i % 2 == 1);

  return (
    <div className="pb-10 flex flex-col gap-8 items-center font-kanit relative">
      <BlurFade delay={0.25} inView>
        <p id="about" className="text-4xl">
          About
        </p>
      </BlurFade>

      <div className="flex flex-col w-full gap-2 items-center">
        <FlexRow className="flex-wrap justify-center gap-2">
          <BlurFade delay={0.25} inView>
            <MagicCard className="border rounded-lg border-opacity-20 w-[min(80vw,20rem)] md:w-[17rem] aspect-[7/10] bg-black overflow-hidden">
              <Image
                src="/images/me_aha.jpeg"
                alt="Me"
                className="-mt-8"
                width={1000}
                height={1000}
              />
            </MagicCard>
          </BlurFade>
          <BlurFade delay={0.25} inView>
            <MagicCard className="border rounded-lg border-opacity-20 w-[min(80vw,20rem)] md:w-[32.5rem] min-h-[20rem] bg-black p-4 text-white text-sm">
              <div className=" flex font-light gap-2 items-center mb-4">
                <IoPersonCircleOutline className="size-5" />
                <p className="text-gray-300 text-sm">
                  A little bit about myself...
                </p>
              </div>
              <div className="grid grid-cols-[repeat(auto-fill,_minmax(15rem,_1fr))] mb-4">
                <AngleInfo>
                  <p>Name: </p>
                  <p className="text-gray-300">Zeus D. Elderfield</p>
                </AngleInfo>
                <AngleInfo>
                  <p>Age: </p>
                  <p className="text-gray-300">22</p>
                </AngleInfo>
                <AngleInfo>
                  <p>Loc: </p>
                  <p className="text-gray-300">Cebu, Philippines</p>
                </AngleInfo>
                <AngleInfo>
                  <p>Edu: </p>
                  <p className="text-gray-300">University of San Carlos</p>
                </AngleInfo>
              </div>
              <div className="px-2 font-extralight flex flex-col max-w-full mb-4">
                <p>Hello, there! You can call me Zeus.</p>
                <p className="text-gray-300 mt-1">
                  I&apos;m currently exploring the world of Web & Mobile
                  Development, Competitive Programming, Data Science, and
                  AI/Machine Learning. I thrive on solving challenging problems
                  and constantly expanding my skill set through side projects.
                  Known for my adaptability, quick learning, and persistence, I
                  enjoy tackling new challenges and finding creative solutions.
                </p>

                <p className="mt-4">
                  If you need someone who can get the job done on time, I&apos;m
                  your guy.
                </p>
                <p className="text-gray-300 mt-1">
                  Whether I&apos;m coding an app, competing in programming
                  contests, or diving into data, I&apos;m driven by a desire to
                  build, learn, and grow in everything I do. I&apos;m always
                  excited to take on new challenges and make a meaningful impact
                  through innovative solutions.
                </p>
              </div>
            </MagicCard>
          </BlurFade>
        </FlexRow>
        <FlexRow className="flex-wrap justify-center gap-2">
          <BlurFade delay={0.25} inView>
            <MagicCard className="border rounded-lg border-opacity-20 w-[min(80vw,20rem)] md:w-[32.5rem] aspect-[3/1] h-full bg-black overflow-hidden flex items-center">
              <Marquee repeat={10} className="my-2 [--duration:25s]">
                {tech1.map((t, i) => {
                  return <TechStackCard key={i} TechStack={t} />;
                })}
              </Marquee>
              <Marquee reverse repeat={10} className="my-2 [--duration:25s]">
                {tech2.map((t, i) => {
                  return <TechStackCard key={i} TechStack={t} />;
                })}
              </Marquee>
            </MagicCard>
          </BlurFade>

          <BlurFade delay={0.25} inView>
            <MagicCard className="border rounded-lg border-opacity-20 md:aspect-[7/5] w-[min(80vw,20rem)] md:w-[17rem] h-auto bg-black">
              <div className="text-white flex font-light gap-2 m-4 items-center w-full">
                <FaBookmark className="text-white size-4" />
                <p className="text-gray-300 text-sm">Currently Learning</p>
              </div>
              <div className="w-full h-28 flex items-center justify-center  text-white mb-4">
                <CurrentlyLearning size={100} />
              </div>
            </MagicCard>
          </BlurFade>
        </FlexRow>
      </div>
    </div>
  );
};

export default AboutMe;
