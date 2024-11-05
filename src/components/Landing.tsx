import React from 'react'
import LandingButton from './LandingButton'
import BlurFade from './ui/blur-fade'
import { IoMdDownload } from "react-icons/io";
import { MdConnectWithoutContact } from 'react-icons/md';
import ShimmerButton from './ui/shimmer-button';
import Particles from './ui/particles';

const Landing: React.FC = () => {
  return (
    <div className='relative py-20 min-h-screen w-full font-kanit'>
        {/* <RetroGrid className='absolute bg-black h-screen' angle={65} /> */}
        <Particles
            className="absolute inset-0 h-[90vh]"
            quantity={300}
            size={0.6}
            ease={80}
            refresh
        />
        <div className='py-28 flex flex-col items-center gap-2'>
            <BlurFade delay={0.25} inView>
                <ShimmerButton className='rounded-full flex items-center py-2 px-4 text-xs md:text-sm gap-2 active:none'>
                    <div className='size-2 rounded-full bg-green-600'></div>
                    <p>Available for work</p>
                </ShimmerButton>
            </BlurFade>
            <div className='flex flex-col items-center text-center text-4xl md:text-6xl'>
                <BlurFade delay={0.25 * 2} inView>
                    <p>Zeus Elderfield</p>
                </BlurFade>
                <BlurFade delay={0.25 * 3} inView>
                    <p>Software Engineer</p>
                </BlurFade>
            </div>
            <BlurFade delay={0.25 * 4} inView>
                <p className='text-xs md:text-sm text-secondary max-w-xs md:max-w-sm text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam inventore consectetur quas est praesentium odit.</p>
            </BlurFade>
            <BlurFade delay={0.25 * 5} inView>
                <div className='flex gap-4 py-2'>
                    <LandingButton>
                        <IoMdDownload />
                        <p>Download My Resume</p>
                    </LandingButton>
                    <LandingButton>
                        <MdConnectWithoutContact />
                        <p>Contact Me</p>
                    </LandingButton>
                </div>
            </BlurFade>
        </div>
    </div>
  )
}

export default Landing