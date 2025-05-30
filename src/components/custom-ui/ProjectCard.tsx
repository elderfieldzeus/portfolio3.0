import { IProject } from "@/data/projects";
import React from "react";
import { MagicCard } from "../ui/magic-card";
import LandingButton from "./LandingButton";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import Image from "next/image";

interface ProjectCardProps {
  project: IProject;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const handleGithub = () => {
    window.open(project.github, "_blank");
  };

  const handleLiveDemo = () => {
    window.open(project.live_demo, "_blank");
  };

  return (
    <MagicCard className="w-full bg-black border rounded-lg border-opacity-20 overflow-hidden">
      <div className="aspect-[2/1] w-full h-auto overflow-hidden">
        <Image
          src={`/images/projects/${project.img}`}
          alt={project.title}
          width={1000}
          height={1000}
          className={`w-full h-auto object-cover object-center ${project.position}`}
        />
      </div>
      <div className="w-full text-white font-kanit p-6">
        <p className="text-lg md:text-xl">{project.title}</p>
        <p className="w-full text-gray-400 font-extralight text-xs md:text-sm">
          {project.main_description}
        </p>
        <div className="mt-6">
          <p className="font-light text-sm">Technologies Used:</p>
          <div className="flex flex-wrap gap-1 my-2">
            {project.technologies.map((tech, i) => {
              return (
                <p
                  key={i}
                  className="text-xs font-extralight rounded-xl border px-2 border-zinc-800 border-opacity-20"
                >
                  {tech}
                </p>
              );
            })}
          </div>
        </div>

        <div className="flex gap-2 mt-6 w-full">
          <LandingButton onClick={handleGithub} className="py-1">
            <FaGithub />
            <p>Github</p>
          </LandingButton>
          <LandingButton
            onClick={handleLiveDemo}
            className="py-1 text-white bg-black active:bg-secondary-clicked"
          >
            <CgWebsite />
            <p>Live Demo</p>
          </LandingButton>
        </div>
      </div>
    </MagicCard>
  );
};

export default ProjectCard;
