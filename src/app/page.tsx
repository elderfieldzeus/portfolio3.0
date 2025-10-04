"use client";

import React, { useEffect, useState } from "react";
import Landing from "../components/home/Landing";
import AboutMe from "@/components/home/AboutMe";
import Particles from "@/components/ui/particles";
import Projects from "@/components/home/Projects";
import Contact from "@/components/home/Contact";
import Resume from "@/components/home/Resume";
import { FloatingButton } from "@/components/custom-ui/FloatingButton";

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
    <main className="w-full overflow-x-hidden overflow-y-auto min-h-screen bg-black text-primary relative">
      {isLoaded && (
        <Particles
          className="absolute inset-0 h-full"
          quantity={400}
          size={0.6}
          ease={80}
        />
      )}
      <Landing />
      <AboutMe />
      <Resume />
      <Projects />
      <Contact />
      <FloatingButton />
    </main>
  );
};

export default Home;
