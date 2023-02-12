import React from "react"
import Nav from "./Components/Nav"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"

function App() {

  return (
    <div className="bg-gray-900 px-10 text-white">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
