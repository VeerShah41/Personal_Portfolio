import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Certifications = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const certifications = [
    {
      title: 'Indian Knowledge System',
      issuer: 'Newton School of Technology',
      date: 'January 2025',
      description: 'Explored India\'s rich intellectual traditions in philosophy, science, art, and governance. Gained understanding of historical and cultural contributions and their contemporary relevance.',
      link: 'https://www.coursera.org/account/accomplishments/verify/T2G5UVPUWJRB?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
    },
    {
      title: 'Generative AI For Everyone',
      issuer: 'DeepLearning.ai',
      date: 'May 2025',
      description: 'Learned foundational concepts of Generative AI and its applications using tools like ChatGPT, DALL·E, and other LLMs. Developed skills to use AI responsibly and effectively in professional, creative, and academic contexts.',
      link: 'https://www.coursera.org/account/accomplishments/verify/1HWRGOF2V3FR?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
    },
    {
      title: 'AI For Everyone',
      issuer: 'DeepLearning.ai',
      date: 'March 2025',
      description: 'Gained foundational knowledge of AI, including applications, limitations, and industry impact. Developed ability to apply AI concepts and assess AI tools responsibly across diverse contexts.',
      link: 'https://www.coursera.org/account/accomplishments/verify/7XTIPT4V8HI0?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
    }
  ]

  return (
    <section id="certifications" className="certifications" ref={ref}>
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
          Certifications
        </motion.h2>
      </motion.div>
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="certification-item"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.15, ease: 'easeOut' }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <div className="certification-header">
              <h3>{cert.title}</h3>
              <span className="certification-date">{cert.date}</span>
            </div>
            <p className="certification-issuer">{cert.issuer}</p>
            <p className="certification-description">{cert.description}</p>
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="certification-link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Certificate <i className="bx bx-link-external" />
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Certifications

