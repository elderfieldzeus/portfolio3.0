import React from "react";
import LandingButton from "@/components/custom-ui/LandingButton";
import BlurFade from "@/components/ui/blur-fade";
import { IoMdDownload } from "react-icons/io";
import { MdConnectWithoutContact } from "react-icons/md";
import ShimmerButton from "@/components/ui/shimmer-button";

const Landing: React.FC = () => {
  const handleDownload = () => {
    window.open("/pdf/Elderfield-Zeus-Curriculum-Vitae.pdf", "_blank");
  };

  const handleAvailable = () => {
    window.open("https://www.linkedin.com/in/elderfieldzeus/", "_blank");
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView();
  };

  return (
    <div className="relative py-20 min-h-screen w-full font-kanit">
      <div className="py-28 flex flex-col items-center gap-2">
        <BlurFade delay={0.25} inView>
          <ShimmerButton
            onClick={handleAvailable}
            className="rounded-full flex items-center py-2 px-4 text-xs md:text-sm gap-2 active:none"
          >
            <div className="size-2 rounded-full bg-green-600"></div>
            <p className="text-primary">Available for work</p>
          </ShimmerButton>
        </BlurFade>
        <div className="flex flex-col items-center text-center text-4xl md:text-6xl">
          <BlurFade delay={0.25 * 2} inView>
            <p>Zeus Elderfield</p>
          </BlurFade>
          <BlurFade delay={0.25 * 3} inView>
            <p>Software Engineer</p>
          </BlurFade>
        </div>
        <BlurFade delay={0.25 * 4} inView>
          <p className="text-xs md:text-sm text-secondary max-w-xs md:max-w-sm text-center font-extralight">
            A Tech Enthusiast with an eye for detail, a thirst for knowledge,
            and a passion for solving complex problems.
          </p>
        </BlurFade>
        <BlurFade delay={0.25 * 5} inView>
          <div className="flex gap-4 py-2">
            <LandingButton onClick={handleDownload}>
              <IoMdDownload />
              <p>Download CV</p>
            </LandingButton>
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
