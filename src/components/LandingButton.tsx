import React from 'react'

interface LandingButtonProps {
    children?: React.ReactNode;
}

const LandingButton: React.FC<LandingButtonProps> = ({ children}) => {
  return (
    <button className='bg-secondary-bg text-primary-bg py-2 px-4 rounded-md active:bg-secondary-clicked transition-colors text-xs md:text-base'>
        {children}
    </button>
  )
}

export default LandingButton