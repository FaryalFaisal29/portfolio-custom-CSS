"use client";

import Image from "next/image";
import Hero from "@/components/Hero"; // Assuming Hero component is defined in a separate file named Hero.tsx
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import About from "@/components/About";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



export default function Home() {

    // Initialize AOS on component mount
    useEffect(() => {
                  AOS.init({
                    easing:"ease-out-back",
                    duration: 1000,
                    delay: 100,
                    mirror: true,
                    anchorPlacement: "bottom-bottom",
                    offset: 160,
                  });
                  AOS.refresh();
    }, []);

  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <About />
      
    </main>
  );
}
