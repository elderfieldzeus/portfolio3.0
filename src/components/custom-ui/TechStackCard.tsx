import { ITechStack } from '@/lib/data';
import React from 'react'

interface TechStackCardProps {
    TechStack: ITechStack;
}

const TechStackCard: React.FC<TechStackCardProps> = ({TechStack}) => {
  return (
    <a target='_blank' href={TechStack.link} className='flex justify-center items-center gap-4 font-kanit text-white px-4 font-light select-none'>
        <img 
            src={`/images/tech-stack/${TechStack.img}`} 
            className='white-svg size-5 md:size-10'
        />
        <p className='text-xs md:text-sm'>{TechStack.label}</p>
    </a>
  )
}

export default TechStackCard