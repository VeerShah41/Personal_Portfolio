import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <footer id="contact" className="contact" ref={ref}>
      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          &copy; 2025 Veer Shah. All rights reserved.
        </motion.p>
        <div className="contact-details">
          <motion.a
            href="mailto:veershah0013@gmail.com"
            className="contact-link"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="bx bx-envelope" />
            veershah0013@gmail.com
          </motion.a>
          <motion.a
            href="tel:+919316375749"
            className="contact-link"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="bx bx-phone" />
            +91 9316375749
          </motion.a>
        </div>
      </motion.div>
    </footer>
  )
}

export default Contact

