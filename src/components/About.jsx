import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  return (
    <section id="about" className="about" ref={ref}>
      <motion.div
        className="title"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        >
          Full Stack learner currently studying Computer Science with a specialization in AI and Machine Learning. Proficient with Python, MySQL, React Native, and JavaScript. Looking for opportunities to apply my technical skills and gain real-world experience through collaborative projects and industry exposure.
        </motion.p>
      </motion.div>
    </section>
  )
}

export default About

