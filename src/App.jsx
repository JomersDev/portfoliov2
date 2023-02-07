import React from "react"
import Nav from "./Components/Nav"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Projects from "./Components/Projects"

function App() {

  return (
    <div className="bg-gray-900 px-10 text-white">
      <Nav />
      <Hero />
      <About />
      <Projects />
    </div>
  )
}

export default App
