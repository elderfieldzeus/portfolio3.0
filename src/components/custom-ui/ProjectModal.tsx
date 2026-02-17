import { IProject } from "@/data/projects";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import Link from "next/link";
import LandingButton from "./LandingButton";
import ImageCarousel from "../projects/ImageCarousel";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

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
                <ImageCarousel
                  images={project.imgs}
                  title={project.title}
                  position={project.position}
                />
              </div>

              <div className="space-y-4 font-kanit">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Description
                  </h3>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                      {project.longDescription ||
                        project.fullDescription ||
                        project.mainDescription}
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
            <TooltipProvider>
              <div className="px-6 py-4 border-t border-zinc-800 flex gap-3">
                {project.github ? (
                  <Link href={project.github} target="_blank" rel="noreferrer">
                    <LandingButton className="py-2 px-4">
                      <FaGithub />
                      <p>View on GitHub</p>
                    </LandingButton>
                  </Link>
                ) : (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span>
                        <LandingButton
                          className="py-2 px-4 opacity-50 cursor-not-allowed"
                          disabled
                        >
                          <FaGithub />
                          <p>View on GitHub</p>
                        </LandingButton>
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>Private project</TooltipContent>
                  </Tooltip>
                )}
                {project.liveDemo ? (
                  <Link
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LandingButton className="py-2 px-4 text-white bg-black active:bg-secondary-clicked">
                      <CgWebsite />
                      <p>Live Demo</p>
                    </LandingButton>
                  </Link>
                ) : (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span>
                        <LandingButton
                          className="py-2 px-4 text-white bg-black opacity-50 cursor-not-allowed"
                          disabled
                        >
                          <CgWebsite />
                          <p>Live Demo</p>
                        </LandingButton>
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>Not deployed</TooltipContent>
                  </Tooltip>
                )}
              </div>
            </TooltipProvider>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
