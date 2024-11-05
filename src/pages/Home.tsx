import React from 'react'
import Landing from '../components/Landing'
import AboutMe from '@/components/AboutMe'

const Home: React.FC = () => {
  return (
    <main className='w-full min-h-screen bg-black text-primary'>
        <Landing />
        <AboutMe />
    </main>
  )
}

export default Home