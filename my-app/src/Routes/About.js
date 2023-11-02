import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg from "../assets/about.jpg.jpg"
import Footer from '../components/Footer'
import Aboutus from '../components/Aboutus'

const About = () => {
  return (
    <>
     <Navbar />
    <Hero 
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
       
     
        btnClass="hide"
    />
    <Aboutus />
    <Footer />
    </>
  )
}

export default About
