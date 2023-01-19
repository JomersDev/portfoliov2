import React from "react"
import Nav from "./Components/Nav"
import Hero from "./Components/Hero"
import Services from "./Components/Services"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"

function App() {

  return (
    <div className="bg-white px-10">
      <Nav />
      <Hero />
      <Services />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
