import React from 'react'
import Landing from '../components/Landing'
import AboutMe from '@/components/AboutMe'
import MyProjects from '@/components/MyProjects'

const Home: React.FC = () => {
  return (
    <main className='w-full min-h-screen bg-black text-primary'>
        <Landing />
        <AboutMe />
        <MyProjects />
    </main>
  )
}

export default Home