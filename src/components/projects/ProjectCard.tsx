import { IProject } from "@/data/projects";
import React from "react";
import { MagicCard } from "../ui/magic-card";
import LandingButton from "../custom-ui/LandingButton";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: IProject;
  maxTechnologies?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  maxTechnologies,
}) => {
  return (
    <MagicCard className="w-full bg-black border rounded-lg border-opacity-20 overflow-hidden">
      <div className="aspect-2/1 w-full h-auto overflow-hidden">
        <Image
          src={`/images/projects/${project.imgs[0]!.path}`}
          alt={project.title}
          width={1000}
          height={1000}
          className={cn(
            "w-full h-auto object-cover object-center",
            project.imgs[0]?.style,
          )}
        />
      </div>
      <div className="w-full text-white font-kanit p-6">
        <p className="text-lg md:text-xl">{project.title}</p>
        <p className="w-full text-gray-400 font-extralight text-xs md:text-sm">
          {project.mainDescription}
        </p>
        <div className="mt-6">
          <p className="font-light text-sm">Technologies Used:</p>
          <div className="flex flex-wrap gap-1 my-2">
            {(maxTechnologies
              ? project.technologies.slice(0, maxTechnologies)
              : project.technologies
            ).map((tech, i) => {
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
          {project.github ? (
            <Link
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer"
            >
              <LandingButton className="py-1">
                <FaGithub />
                <p>Github</p>
              </LandingButton>
            </Link>
          ) : (
            <LandingButton className="py-1 opacity-50 cursor-not-allowed">
              <FaGithub />
              <p>Github</p>
            </LandingButton>
          )}
          {project.liveDemo ? (
            <Link
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer"
            >
              <LandingButton className="py-1 text-white bg-black active:bg-secondary-clicked">
                <CgWebsite />
                <p>Live Demo</p>
              </LandingButton>
            </Link>
          ) : (
            <LandingButton className="py-1 text-white bg-black opacity-50 cursor-not-allowed">
              <CgWebsite />
              <p>Live Demo</p>
            </LandingButton>
          )}
        </div>
      </div>
    </MagicCard>
  );
};

export default ProjectCard;
