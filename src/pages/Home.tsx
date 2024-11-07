import React from 'react'
import Landing from '../components/Landing'
import AboutMe from '@/components/AboutMe'
import MyProjects from '@/components/MyProjects'
import Particles from '@/components/ui/particles'
import Contact from '@/components/Contact'

const Home: React.FC = () => {
  return (
    <main className='w-full overflow-hidden min-h-screen bg-black text-primary relative'>
        <Particles
            className="absolute inset-0 h-full"
            quantity={400}
            size={0.6}
            ease={80}
        />
        <Landing />
        <AboutMe />
        <MyProjects />
        <Contact />
    </main>
  )
}

export default Home