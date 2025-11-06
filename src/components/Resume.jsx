import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
const resumePdf = '/Resume-Veer Shah.pdf'

const Resume = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="resume" className="resume" ref={ref}>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Resume
      </motion.h1>
      <div className="resume-container">
        <motion.a
          href={resumePdf}
          download
          className="resume-link"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="bx bxl-file-pdf" />
          Download Resume
        </motion.a>
        <motion.a
          href={resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="bx bx-show" />
          View Resume
        </motion.a>
      </div>
    </section>
  )
}

export default Resume

