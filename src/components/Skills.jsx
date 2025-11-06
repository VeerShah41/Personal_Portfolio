import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const skillCategories = [
    {
      title: 'Computer Languages',
      skills: [
        { name: 'Python', icon: 'bx bxl-python' },
        { name: 'JavaScript', icon: 'bx bxl-javascript' },
        { name: 'HTML', icon: 'bx bxl-html5' },
        { name: 'CSS', icon: 'bx bxl-css3' }
      ]
    },
    {
      title: 'Software Packages',
      skills: [
        { name: 'MySQL', icon: 'bx bxs-data' },
        { name: 'Pandas', icon: 'bx bxl-python' },
        { name: 'Matplotlib', icon: 'bx bx-bar-chart-alt-2' },
        { name: 'Git', icon: 'bx bxl-git' }
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Problem-Solving', icon: 'bx bx-brain' },
        { name: 'Team Collaboration', icon: 'bx bx-group' },
        { name: 'Time Management', icon: 'bx bx-time' },
        { name: 'Adaptability', icon: 'bx bx-refresh' }
      ]
    }
  ]

  return (
    <section id="Skills" className="Skills" ref={ref}>
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
          Skills
        </motion.h2>
      </motion.div>
      <div className="skills-container">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            className="skill-section"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.15, ease: 'easeOut' }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <h3>{category.title}</h3>
            <ul>
              {category.skills.map((skill, skillIndex) => (
                <motion.li
                  key={skillIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + categoryIndex * 0.15 + skillIndex * 0.08, ease: 'easeOut' }}
                  whileHover={{ x: 8, color: '#00ffee' }}
                >
                  <i className={skill.icon} />
                  {skill.name}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills

