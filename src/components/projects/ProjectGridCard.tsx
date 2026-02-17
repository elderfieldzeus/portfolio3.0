import { IProject } from "@/data/projects";
import React from "react";
import { MagicCard } from "../ui/magic-card";
import Image from "next/image";

interface ProjectGridCardProps {
  project: IProject;
  onClick: () => void;
}

const ProjectGridCard: React.FC<ProjectGridCardProps> = ({
  project,
  onClick,
}) => {
  return (
    <MagicCard className="w-full bg-black border rounded-lg border-opacity-20 overflow-hidden hover:border-opacity-40 transition-all cursor-pointer">
      <div onClick={onClick} className="w-full h-full">
        <div className="aspect-2/1 w-full h-auto overflow-hidden">
          <Image
            src={`/images/projects/${project.imgs[0]!}`}
            alt={project.title}
            width={1000}
            height={1000}
            className={`w-full h-auto object-cover object-center ${project.position || ""}`}
          />
        </div>
        <div className="w-full text-white font-kanit p-6">
          <p className="text-lg md:text-xl font-semibold">{project.title}</p>
          <p className="w-full text-gray-400 font-extralight text-xs md:text-sm line-clamp-2">
            {project.main_description.trim()}
          </p>
          <div className="mt-6">
            <p className="font-light text-sm">Technologies Used:</p>
            <div className="flex flex-wrap gap-1 my-2">
              {project.technologies.slice(0, 4).map((tech, i) => (
                <p
                  key={i}
                  className="text-xs font-extralight rounded-xl border px-2 border-zinc-800 border-opacity-20"
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MagicCard>
  );
};

export default ProjectGridCard;
