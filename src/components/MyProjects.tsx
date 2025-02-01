import React, { useEffect, useState } from 'react'
import BlurFade from './ui/blur-fade'
import { swe_projects, ds_projects } from '@/lib/data'
import ProjectCard from './ProjectCard'
import ToggleProjects from './ToggleProjects'

const MyProjects: React.FC = () => {
  const [isSoftwareEngineer, setIsSoftwareEngineer] = useState(true)
  const [projects, setProjects] = useState(swe_projects);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isVisible) {
      const timer = setTimeout(() => {
        setProjects(isSoftwareEngineer ? swe_projects : ds_projects);

        setTimeout(() => {
          setIsVisible(true)
        }, 100)
      }, 200) // This should match the transition duration
      return () => clearTimeout(timer)
    }
  }, [isVisible, isSoftwareEngineer])

  const handleSWE = () => {
    setIsVisible(false);
    setIsSoftwareEngineer(true);
  }

  const handleDS = () => {
    setIsVisible(false);
    setIsSoftwareEngineer(false);
  }

  return (
    <div className='flex flex-col gap-8 items-center font-kanit relative mt-24'>
        <div className='flex flex-col items-center gap-4'>
          <BlurFade delay={0.25} inView>
              <p className='text-4xl'>My Projects</p>
          </BlurFade>
          <BlurFade delay={0.4} inView>
            <ToggleProjects 
              isSWE = {isSoftwareEngineer}
              showSWE = {handleSWE}
              showDS = {handleDS} 
            />
          </BlurFade>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-4 max-w-[50rem] w-[80vw] md:w-full mx-[10vw] transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {projects.map((project, index) => {
            return(
              <ProjectCard
                key={index}
                project={project}
              />
            );
          })}
        </div>
    </div>
  )
}

export default MyProjects