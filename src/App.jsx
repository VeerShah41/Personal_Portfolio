import { useState, useEffect } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Social from './components/Social'
import Resume from './components/Resume'
import Contact from './components/Contact'
import ParticleBackground from './components/ParticleBackground'
import CustomCursor from './components/CustomCursor'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'Skills', 'Social', 'resume', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <ParticleBackground />
      <CustomCursor />
      <Header activeSection={activeSection} />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Social />
      <Resume />
      <Contact />
    </div>
  )
}

export default App

