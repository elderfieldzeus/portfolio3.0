import React from 'react'
import LandingButton from './LandingButton'

const Landing: React.FC = () => {
  return (
    <div className='py-32 w-full flex flex-col items-center gap-2'>
        <p className='rounded-full py-2 px-4 shadow-sm shadow-white text-xs md:text-base'>Available for work</p>

        <div className='flex flex-col items-center text-center text-4xl md:text-6xl'>
            <p>Zeus Elderfield</p>
            <p>Software Engineer</p>
        </div>

        <p className='text-sm text-secondary max-w-xs md:max-w-sm text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam inventore consectetur quas est praesentium odit.</p>

        <div className='flex gap-4'>
            <LandingButton>
                <p>Download My Resume</p>
            </LandingButton>
            <LandingButton>
                <p>Contact Me</p>
            </LandingButton>
        </div>
    </div>
  )
}

export default Landing