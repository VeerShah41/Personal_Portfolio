import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const profileImg = '/profile.jpg'

const Home = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  })

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="home" className="home" ref={ref}>
      <motion.div
        className="home-content"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div
          className="img"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img src={profileImg} alt="Veer Shah" />
          <div className="profile-glow" />
        </motion.div>
        <motion.div
          className="content"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Hello, I'm
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Veer Shah
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            Full Stack Developer
          </motion.p>
          <motion.a
            href="#contact"
            className="btn"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.4 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Fresher
          </motion.a>
        </motion.div>
      </motion.div>
      {!isScrolled && (
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={inView && !isScrolled ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <motion.div
            className="mouse"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="wheel" />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Home

