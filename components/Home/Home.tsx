"use client"

import { useEffect } from "react"
import About from "./About/About"
import Contact from "./Contact/Contact"
import Hero from "./Hero/Hero"
import Project from "./Project/Project"
import Reviews from "./Reviews/Reviews"
import Services from "./Services/Services"
import Skills from "./Skills/Skills"
import AOS from "aos"
import "aos/dist/aos.css"

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom'
      })
    }
    initAOS()
  }, [])
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Project />
      <Skills />
      <Reviews />
      <Contact />
    </div>
  )
}

export default Home
