import { useState, useEffect } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Social from './components/Social'
import Resume from './components/Resume'
import Contact from './components/Contact'
import ParticleBackground from './components/ParticleBackground'
import CustomCursor from './components/CustomCursor'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'projects', 'Skills', 'certifications', 'Social', 'resume', 'contact']
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

  // Emerging animation on scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll('section')
    sections.forEach(section => observer.observe(section))

    return () => {
      sections.forEach(section => observer.unobserve(section))
    }
  }, [])

  return (
    <div className="app">
      <ParticleBackground />
      <CustomCursor />
      <Header activeSection={activeSection} />
      <Home />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Certifications />
      <Social />
      <Resume />
      <Contact />
    </div>
  )
}

export default App

