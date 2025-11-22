"use client";

import TechStackCard from "@/components/about/TechStackCard";
import NonHomeHeader from "@/components/custom-ui/NonHomeHeader";
import { backend, devopsAndTools, dsml, frontend } from "@/data/about";
import React from "react";

const AboutPage = () => {
  return (
    <main className="w-full overflow-x-hidden overflow-y-auto min-h-screen bg-black text-primary relative">
      <section className="w-[min(80vw,50rem)] mx-auto flex flex-col items-start gap-8 my-10">
        <NonHomeHeader
          title="About"
          description="Learn more about me, my background, skills, and what drives my passion for technology and creativity."
        />

        <div className="flex flex-col gap-4">
          <p className="text-lg">Frontend</p>
          <div className="flex flex-wrap gap-2">
            {frontend.map((tech, index) => {
              return <TechStackCard key={index} text={tech} />;
            })}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-lg">Backend</p>
          <div className="flex flex-wrap gap-2">
            {backend.map((tech, index) => {
              return <TechStackCard key={index} text={tech} />;
            })}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-lg">Data Science & Machine Learning</p>
          <div className="flex flex-wrap gap-2">
            {dsml.map((tech, index) => {
              return <TechStackCard key={index} text={tech} />;
            })}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-lg">Dev-ops & Tools</p>
          <div className="flex flex-wrap gap-2">
            {devopsAndTools.map((tech, index) => {
              return <TechStackCard key={index} text={tech} />;
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
