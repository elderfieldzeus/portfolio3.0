import React from 'react'
import BlurFade from './ui/blur-fade'
import { projects } from '@/lib/data'
import ProjectCard from './ProjectCard'
import Particles from './ui/particles'

const MyProjects: React.FC = () => {
  return (
    <div className='pb-10 flex flex-col items-center font-kanit relative'>
        <Particles
            className="absolute inset-0 h-screen"
            quantity={300}
            size={0.6}
            ease={80}
        />
        <BlurFade delay={0.25} inView>
            <p className='text-4xl'>My Projects</p>
        </BlurFade>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 max-w-[50rem] w-[80vw] md:w-full mx-[10vw] my-6'>
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