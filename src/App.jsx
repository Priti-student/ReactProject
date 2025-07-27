import React from 'react'
import Hero from './Hero.jsx'
import Navbar from './Navbar.jsx'
import Carousel from './Carousel.jsx'
import Project from './Project.jsx'
import {ContactForm,ContactIcons} from './Contact.jsx'
import ThemeToggle from './ThemeToggle.jsx'

const App = () => {
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div id="#Hero">
      <Hero/>
    </div>
    <div id="Skills">
      <Carousel/>
    </div>
    <div id="Project">
      <Project/>
    </div>
    <div id="Contact">
      <ContactForm/>
      <ContactIcons/>
    </div>
    <div className=" transition-colors duration-300">
      <ThemeToggle />
    </div>
    </>
  )
}

export default App