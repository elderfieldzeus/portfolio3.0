import React, { Dispatch, SetStateAction } from 'react'
import { ChevronLeft, ChevronRight} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Badge } from './ui/badge';
import { IProject } from '@/lib/data';
import LandingButton from './LandingButton';
import { FaGithub } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';

interface ProjectDialogProps {
    selectedProject: IProject | null;
    isModalOpen: boolean;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    goToPrevProject: () => void;
    goToNextProject: () => void;
}

const ProjectDialog: React.FC<ProjectDialogProps> = ({
    selectedProject,
    isModalOpen, 
    setIsModalOpen,
    goToPrevProject,
    goToNextProject,
}) => {
    const handleGithub = () => {
        window.open(selectedProject?.github, "_blank");
    }

    const handleLiveDemo = () => {
        window.open(selectedProject?.live_demo, "_blank");
    }

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        {selectedProject && (
          <DialogContent className="max-w-[80vw] md:w-[50rem] overflow-hidden p-0 border border-white border-opacity-20 font-kanit rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 h-full">
              {/* Image - Top on mobile, right on desktop */}
              <div className="border-b md:border-l border-white border-opacity-20 relative md:order-2 h-[200px] md:h-full md:min-h-[500px] bg-black">
                <img
                  src={`/images/projects/${selectedProject.img}`}
                  alt={selectedProject.title}
                  className="h-full w-full object-contain"
                />
                <div className=" absolute bottom-0 w-full p-6 flex items-center justify-between text-black gap-2">
                  <LandingButton
                    onClick={goToPrevProject}
                    className='py-2 w-full'
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Previous
                  </LandingButton>
                  <LandingButton
                    onClick={goToNextProject}
                    className='py-2 w-full'
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </LandingButton>
                </div>
              </div>

              {/* Project details - Bottom on mobile, left on desktop */}
              <div className="flex flex-col h-full md:order-1 max-h-[calc(90vh-200px)] md:max-h-[90vh]">
                <div className="p-4 md:p-6 border-b border-white border-opacity-20">
                  <DialogHeader>
                    <div className="flex items-center justify-between">
                      <DialogTitle className="text-xl text-left">{selectedProject.title}</DialogTitle>
                      <Badge className='text-nowrap'>{selectedProject.category}</Badge>
                    </div>
                  </DialogHeader>
                </div>

                {/* Scrollable content area */}
                <div className="p-4 md:p-6 pt-4 overflow-y-auto flex-grow">
                  <div className="space-y-4">
                    <p className='font-extralight text-sm text-gray-400'>{selectedProject.description}</p>

                    <div className="flex flex-wrap gap-1 pt-2">
                        {selectedProject.technologies.map((tech, i) => {
                        return (
                            <p key={i} className='text-xs font-extralight rounded-xl border px-2 border-gray-100 border-opacity-20'>{tech}</p>
                        );
                        })}
                    </div>
                  </div>
                </div>

                {/* Navigation and action buttons */}
                <div className="p-4 md:p-6 border-t border-white border-opacity-20 mt-auto">
                  <div className="flex flex-col gap-4">
                    {/* Action buttons */}
                    <div className='flex gap-2'>
                        <LandingButton onClick={handleGithub} className='py-2 w-full'>
                            <FaGithub />
                            <p>Github</p>
                        </LandingButton>
                        <LandingButton onClick={handleLiveDemo} className='py-2 w-full text-white bg-black active:bg-secondary-clicked'>
                            <CgWebsite />
                            <p>Live Demo</p>
                        </LandingButton>
                    </div>

                    <div className="flex md:hidden items-center justify-between text-black gap-2">
                      <LandingButton
                        onClick={goToPrevProject}
                        className='py-2 w-full'
                      >
                        <ChevronLeft className="h-4 w-4 mr-1" />
                        Previous
                      </LandingButton>
                      <LandingButton
                        onClick={goToNextProject}
                        className='py-2 w-full'
                      >
                        Next
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </LandingButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
  )
}

export default ProjectDialog