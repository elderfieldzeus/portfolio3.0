"use client";

import ProjectCard from "@/components/custom-ui/ProjectCard";
import { projects } from "@/lib/data";
import BlurFade from "@/components/ui/blur-fade";

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.isFeatured);

  return (
    <div className="w-full flex flex-col items-center gap-8 mt-24 max-w-4xl mx-auto font-kanit">
      <BlurFade delay={0.25} inView>
        <p id="projects" className="text-4xl">
          Projects
        </p>
      </BlurFade>
      <BlurFade
        delay={0.25}
        inView
        className={`grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-4 max-w-[50rem] w-[80vw] md:w-full mx-[10vw]`}
      >
        {featuredProjects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </BlurFade>
    </div>
  );
}
