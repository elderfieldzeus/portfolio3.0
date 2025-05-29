import React from "react";
import BlurFade from "../ui/blur-fade";

const Experience = () => {
  return (
    <div className="w-full flex flex-col items-center gap-8 mt-24 max-w-4xl mx-auto font-kanit">
      <BlurFade delay={0.25} inView>
        <p id="experience" className="text-4xl">
          Experience
        </p>
      </BlurFade>
    </div>
  );
};

export default Experience;
