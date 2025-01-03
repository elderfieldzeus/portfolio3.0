import React from 'react'
import BlurFade from './ui/blur-fade'
import { projects } from '@/lib/data'
import ProjectCard from './ProjectCard'

const MyProjects: React.FC = () => {
  return (
    <div className='flex flex-col gap-8 items-center font-kanit relative mt-24'>
        <BlurFade delay={0.25} inView>
            <p className='text-4xl'>My Projects</p>
        </BlurFade>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-4 max-w-[50rem] w-[80vw] md:w-full mx-[10vw]'>
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