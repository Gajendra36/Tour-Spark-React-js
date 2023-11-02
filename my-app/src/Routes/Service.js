import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg from "../assets/about.jpg.jpg"
import Footer from '../components/Footer'
import Trip from '../components/Trip'
import service from '../assets/service1.jpg'
const Service = () => {
  return (
    <>
    
    <Navbar />
    <Hero 
        cName="hero-mid"
        heroImg={service}
        title="Service"
       
     
        btnClass="hide"
    />
    <Trip />
    <Footer />
    </>
  )
}

export default Service
