import React from "react"
import Nav from "./Components/Nav"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"

function App() {

  return (
    <div className="bg-gray-900 text-white">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
