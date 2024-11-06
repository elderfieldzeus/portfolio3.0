import React from 'react'
import ShinyButton from './ui/shiny-button';

interface LandingButtonProps {
    children?: React.ReactNode;
}

const LandingButton: React.FC<LandingButtonProps> = ({ children}) => {
  return (
    <ShinyButton
      className='bg-secondary-bg  text-primary-bg px-3 rounded-md active:bg-secondary-clicked transition-colors text-xs md:text-sm'
    >
        <div className='flex justify-center items-center gap-2'>
          {children}
        </div>
    </ShinyButton>
  )
}

export default LandingButton