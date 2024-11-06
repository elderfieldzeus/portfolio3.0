import React from 'react'
import BlurFade from './ui/blur-fade'
import FlexRow from './FlexRow'
import { MagicCard } from './ui/magic-card'
import Marquee from './ui/marquee'
import { CurrentlyLearning, techStacks } from '@/lib/data'
import TechStackCard from './TechStackCard'
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";

const AboutMe: React.FC = () => {
    const tech1 = techStacks.filter((_, i) => i % 2 == 0);
    const tech2 = techStacks.filter((_, i) => i % 2 == 1);
    

  return (
    <div className='pb-10 flex flex-col gap-8 items-center font-kanit  relative'>
        <BlurFade delay={0.25} inView>
            <p className='text-4xl'>About</p>
        </BlurFade>

        <div className='flex flex-col w-full gap-2 items-center'>

                <FlexRow className='flex-wrap justify-center gap-2'>
                    <BlurFade delay={0.25 * 2} inView>
                        <MagicCard className='border rounded-lg border-opacity-20 w-[min(80vw,20rem)] md:w-[14rem] aspect-[7/10] bg-black overflow-hidden'>
                            <img src="/images/me_aha.jpeg" className='-mt-8' />
                        </MagicCard>
                    </BlurFade>
                    <BlurFade delay={0.25 * 2} inView>
                        <MagicCard className='border rounded-lg border-opacity-20 w-[min(80vw,20rem)] md:w-[30rem] min-h-[20rem] bg-black'>
                            <div className='text-white flex font-light gap-2 m-4 items-center'>
                                <IoPersonCircleOutline className='size-5' />
                                <p className='text-gray-300 text-sm'>A little bit about me...</p>
                            </div> 
                        </MagicCard>
                    </BlurFade>
                </FlexRow>
                <FlexRow className='flex-wrap justify-center gap-2'>
                    <BlurFade delay={0.25 * 2} inView>
                        <MagicCard className='border rounded-lg border-opacity-20 w-[min(80vw,20rem)] md:w-[30rem] aspect-[3/1] h-full bg-black overflow-hidden flex items-center'>
                            <Marquee pauseOnHover repeat={10} className="my-2 [--duration:25s]">
                                {tech1.map((t, i) => {
                                    return (
                                        <TechStackCard 
                                            key = {i}
                                            TechStack={t}
                                        />
                                    )
                                })}
                            </Marquee>
                            <Marquee pauseOnHover reverse repeat={10} className="my-2 [--duration:25s]">
                                {tech2.map((t, i) => {
                                    return (
                                        <TechStackCard 
                                            key = {i}
                                            TechStack={t}
                                        />
                                    )
                                })}
                            </Marquee>
                        </MagicCard>
                    </BlurFade>

                    <BlurFade delay={0.25 * 2} inView>
                        <MagicCard className='border rounded-lg border-opacity-20 md:aspect-[7/5] w-[min(80vw,20rem)] md:w-[14rem] h-auto bg-black'>
                            <div className='text-white flex font-light gap-2 m-4 items-center w-full'>
                                <FaBookmark className='text-white size-4'/>
                                <p className='text-gray-300 text-sm'>Currently Learning</p>
                            </div>
                            <div className='w-full flex justify-center  text-white mb-4'>
                                <CurrentlyLearning size={90}/>
                            </div>
                        </MagicCard>
                    </BlurFade>
                </FlexRow>
        </div>
    </div>
  )
}

export default AboutMe