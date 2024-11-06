import React from 'react'
import BlurFade from './ui/blur-fade'
import FlexRow from './FlexRow'
import { MagicCard } from './ui/magic-card'

const AboutMe: React.FC = () => {
  return (
    <div className='py-24 flex flex-col gap-8 items-center font-kanit min-h-screen'>
        <BlurFade delay={0.25} inView>
            <p className='text-4xl'>About me</p>
        </BlurFade>

        <div className='flex flex-col w-full gap-2 items-center'>

                <FlexRow className='flex-wrap justify-center gap-2 w-[90vw]'>
                    <BlurFade delay={0.25 * 2} inView>
                        <MagicCard className='border rounded-lg border-opacity-20 w-[22rem] aspect-[] bg-black'>

                        </MagicCard>
                    </BlurFade>
                    <BlurFade delay={0.25 * 3} inView>
                        <MagicCard className='border rounded-lg border-opacity-20 w-[22rem] aspect-[] bg-black flex justify-center'>

                        </MagicCard>
                    </BlurFade>
                </FlexRow>
                <FlexRow className='flex-wrap justify-center gap-2 w-[90vw]'>
                    <BlurFade delay={0.25 * 2} inView>
                        <MagicCard className='border rounded-lg border-opacity-20 w-[min(30rem,90vw)] aspect-[5/2] h-auto bg-black'>
                        </MagicCard>
                    </BlurFade>

                    <BlurFade delay={0.25 * 3} inView>
                        <MagicCard className='border rounded-lg border-opacity-20 aspect-[7/6] w-[90vw] md:w-[14rem] h-auto bg-black'>
                        </MagicCard>
                    </BlurFade>
                </FlexRow>
        </div>
    </div>
  )
}

export default AboutMe