import React from "react"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import NavBar from "./Components/NavBar"
import TheBrewBox from "./Pages/TheBrewBox"
import Quizzical from "./Pages/Quizzical"
import Designo from "./Pages/Designo"
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="bg-gray-900 text-white">
      <NavBar />
      <Routes>
        <Route path="/" 
        element={<>
                  <Hero />
                  <About />
                  <Projects />
                  <Contact />
                </>
        } />
        <Route path="/projects/thebrewbox" element={<TheBrewBox />}/>
        <Route path="/projects/quizzical" element={<Quizzical />}/>
        <Route path="/projects/designo" element={<Designo />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App


//className="hover:scale-125 transition-all duration-500"