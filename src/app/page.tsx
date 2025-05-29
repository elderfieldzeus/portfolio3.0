"use client"

import React, { useEffect, useState } from 'react'
import Landing from '../components/home/Landing'
import AboutMe from '@/components/home/AboutMe'
import Particles from '@/components/ui/particles'
import ProjectContainer from '@/components/home/Projects'
import Contact from '@/components/home/Contact'

const Home: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const handleLoad = () => setIsLoaded(true);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <main className='w-full overflow-hidden min-h-screen bg-black text-primary relative'>
        {
          isLoaded &&
          <Particles
            className="absolute inset-0 h-full"
            quantity={400}
            size={0.6}
            ease={80}
          />
        }
        <Landing />
        <AboutMe />
        <ProjectContainer />
        <Contact />
    </main>
  )
}

export default Home