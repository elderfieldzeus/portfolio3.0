import React from "react";
import LandingButton from "@/components/custom-ui/LandingButton";
import BlurFade from "@/components/ui/blur-fade";
import { IoMdDownload } from "react-icons/io";
import { MdConnectWithoutContact } from "react-icons/md";
import ShimmerButton from "@/components/ui/shimmer-button";
import Link from "next/link";

const Landing: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView();
  };

  return (
    <div id="landing" className="relative py-20 min-h-screen w-full font-kanit">
      <div className="py-28 flex flex-col items-center gap-2">
        <BlurFade delay={0.25} inView>
          <Link
            href="https://www.linkedin.com/in/elderfieldzeus/"
            target="_blank"
            rel="noreferrer"
          >
            <ShimmerButton className="rounded-full flex items-center py-2 px-4 text-xs md:text-sm gap-2 active:none">
              <div className="size-2 rounded-full bg-green-600"></div>
              <p className="text-primary">Available for work</p>
            </ShimmerButton>
          </Link>
        </BlurFade>
        <div className="flex flex-col items-center text-center text-[2.45rem] md:text-6xl leading-4 gap-6 md:gap-10 py-2 md:py-6">
          <BlurFade delay={0.25 * 2} inView>
            <p>Zeus&nbsp;Elderfield</p>
          </BlurFade>
          <BlurFade delay={0.25 * 3} inView>
            <p>Software&nbsp;Engineer</p>
          </BlurFade>
        </div>
        <BlurFade delay={0.25 * 4} inView>
          <p className="text-xs md:text-sm max-w-xs md:max-w-sm text-center font-extralight text-white">
            A Tech Enthusiast with an eye for detail, a thirst for knowledge,
            and a passion for solving complex problems.
          </p>
        </BlurFade>
        <BlurFade delay={0.25 * 5} inView>
          <div className="flex gap-4 py-2">
            <Link
              href="/pdf/Elderfield-Zeus-Curriculum-Vitae.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <LandingButton>
                <IoMdDownload />
                <p>Download CV</p>
              </LandingButton>
            </Link>
            <LandingButton onClick={scrollToContact}>
              <MdConnectWithoutContact />
              <p>Contact Me</p>
            </LandingButton>
          </div>
        </BlurFade>
      </div>
    </div>
  );
};

export default Landing;
