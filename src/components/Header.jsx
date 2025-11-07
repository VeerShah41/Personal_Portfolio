import { useState } from 'react'
import { motion } from 'framer-motion'

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'Skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'Social', label: 'Social' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <motion.header
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home') }} className="logo">
        VS
      </a>
      <i
        className="bx bx-menu"
        id="menu-icon"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection(item.id)
            }}
            className={activeSection === item.id ? 'active' : ''}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </motion.header>
  )
}

export default Header

