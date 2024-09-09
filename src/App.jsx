import Header from "./sticky/Header"
import './App.css'
import Hero from "./components/Hero"
import Techstack from "./components/Techstack"
import Projects from "./components/Projects"

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Techstack />
      <Projects />
    </div>
  )
}

export default App