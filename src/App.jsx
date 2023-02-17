import React from "react"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import NavBar from "./Components/NavBar"
import ProjectInfo from "./Pages/ProjectInfo"
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
        <Route path="/projects/:projectId" element={<ProjectInfo />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App


//className="hover:scale-125 transition-all duration-500"