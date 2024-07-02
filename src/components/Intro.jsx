import React from 'react'
import Hero2 from './Hero2'
import Navbar from './Navbar'
import backgroundPic from "../assets/portfolioBackground.png"


const Intro = () => {
  return (
    <div style={{ 
        backgroundImage: `url(${backgroundPic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <Navbar />
        <Hero2 />
    </div>
  )
}

export default Intro