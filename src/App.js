import React from 'react'
import Home from "./Component/Home/Home"
import About from "./Component/About/About"
import Projects from "./Component/Projects/Projects"
import Contact from "./Component/Contact/Contact"
import Navbar1 from './Component/Navbar/Navbar1'
import Skills from './Component/Skills/Skills'
import Footer from './Component/Footer/Footer'


const App = () => {
  return (
    <>
    <Navbar1 />
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
    
  )
}

export default App