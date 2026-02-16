import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const education = [
    {
      degree: 'Bachelor of Technology (AI ML)',
      period: '2024 - 2028',
      institution: 'Newton School OF Technology (ADYPU), Pune',
      grade: 'Grade: 8.03/10.0'
    },
    {
      degree: 'Intermediate (Class XII)',
      period: '2023 - 2024',
      institution: 'Shree Swaminarayan Gurukul, Vapi',
      grade: 'Grade: 76.0%'
    },
    {
      degree: 'Matriculation (Class X)',
      period: '2021 - 2022',
      institution: 'Shree Swaminarayan Gurukul, Vapi',
      grade: 'Grade: 79.0%'
    }
  ]

  return (
    <section id="education" className="education" ref={ref}>
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
          Education
        </motion.h2>
      </motion.div>
      <div className="education-container">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="education-item"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.15, ease: 'easeOut' }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <div className="education-header">
              <h3>{edu.degree}</h3>
              <span className="education-period">{edu.period}</span>
            </div>
            <p className="education-institution">{edu.institution}</p>
            <p className="education-grade">{edu.grade}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Education

