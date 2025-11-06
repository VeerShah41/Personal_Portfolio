import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Social = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/VeerShah41', icon: 'bx bxl-github' },
    { name: 'Email', url: 'mailto:veershah0013@gmail.com', icon: 'bx bx-envelope' },
    { name: 'Instagram', url: 'https://www.instagram.com/veer_shah_41', icon: 'bx bxl-instagram' },
    { name: 'Codeforces', url: 'https://codeforces.com/profile/veerlegend41', icon: 'bx bx-code-alt' },
    { name: 'CodeChef', url: 'https://www.codechef.com/users/akt_trixy', icon: 'bx bx-code-alt' }
  ]

  return (
    <section id="Social" className="Social" ref={ref}>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Social
      </motion.h1>
      <div className="social-container">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease: 'easeOut' }}
            whileHover={{ scale: 1.05, y: -3, boxShadow: '0 0 30px rgba(0, 255, 238, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            <i className={link.icon} />
            {link.name}
          </motion.a>
        ))}
      </div>
    </section>
  )
}

export default Social

