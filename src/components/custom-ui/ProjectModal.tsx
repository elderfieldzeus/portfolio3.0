import { IProject } from "@/data/projects";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import Link from "next/link";
import LandingButton from "./LandingButton";

interface ProjectModalProps {
  project: IProject | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  open,
  onOpenChange,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] flex flex-col bg-black border-zinc-800 p-0 overflow-hidden">
        {project && (
          <>
            {/* Fixed Header */}
            <div className="px-6 pt-6 pb-4 border-b border-zinc-800">
              <DialogHeader>
                <DialogTitle className="text-2xl font-kanit text-white">
                  {project.title}
                </DialogTitle>
                <DialogDescription className="text-gray-400 font-kanit">
                  {project.category}
                </DialogDescription>
              </DialogHeader>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6 scroll-smooth scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
              <div className="w-full">
                <div className="aspect-2/1 w-full h-auto overflow-hidden rounded-lg">
                  <Image
                    src={`/images/projects/${project.img}`}
                    alt={project.title}
                    width={1000}
                    height={1000}
                    className={`w-full h-auto object-cover object-center ${project.position || ""}`}
                  />
                </div>
              </div>

              <div className="space-y-4 font-kanit">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Description
                  </h3>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                      {project.long_description ||
                        project.full_description ||
                        project.main_description}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => {
                      return (
                        <span
                          key={i}
                          className="text-xs font-light rounded-xl border px-3 py-1 border-zinc-800 text-gray-300"
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Fixed Footer */}
            <div className="px-6 py-4 border-t border-zinc-800 flex gap-3">
              <Link href={project.github} target="_blank" rel="noreferrer">
                <LandingButton className="py-2 px-4">
                  <FaGithub />
                  <p>View on GitHub</p>
                </LandingButton>
              </Link>
              <Link href={project.live_demo} target="_blank" rel="noreferrer">
                <LandingButton className="py-2 px-4 text-white bg-black active:bg-secondary-clicked">
                  <CgWebsite />
                  <p>Live Demo</p>
                </LandingButton>
              </Link>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
