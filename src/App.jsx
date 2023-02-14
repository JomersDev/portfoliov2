import React from "react"
import Nav from "./Components/Nav"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import NavBar from "./Components/NavBar"

function App() {

  return (
    <div className="bg-gray-900 text-white">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
