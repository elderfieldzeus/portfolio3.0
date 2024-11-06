import React from 'react'
import ShinyButton from './ui/shiny-button';
import { cn } from '@/lib/utils';

interface LandingButtonProps {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const LandingButton: React.FC<LandingButtonProps> = ({ children, className, onClick}) => {
  return (
    <ShinyButton
      onClick={onClick}
      className={cn('bg-secondary-bg text-black px-3 rounded-md active:bg-secondary-clicked transition-colors text-xs md:text-sm', className)}
    >
        <div className='flex justify-center items-center gap-2'>
          {children}
        </div>
    </ShinyButton>
  )
}

export default LandingButton