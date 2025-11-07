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
        { name: 'JavaScript', icon: 'bx bxl-javascript' },
        { name: 'CSS', icon: 'bx bxl-css3' },
        { name: 'HTML', icon: 'bx bxl-html5' },
        { name: 'Python', icon: 'bx bxl-python' }
      ]
    },
    {
      title: 'Software Packages',
      skills: [
        { name: 'MySQL', icon: 'bx bxs-data' },
        { name: 'Express JS', icon: 'bx bx-server' },
        { name: 'Node.js', icon: 'bx bxl-nodejs' },
        { name: 'React', icon: 'bx bxl-react' },
        { name: 'Prisma ORM', icon: 'bx bx-data' },
        { name: 'React Native', icon: 'bx bx-mobile-alt' },
        { name: 'Matplotlib', icon: 'bx bx-bar-chart-alt-2' },
        { name: 'Pandas', icon: 'bx bxl-python' }
      ]
    },
    {
      title: 'Data Tools & Soft Skills',
      skills: [
        { name: 'NumPy', icon: 'bx bx-math' },
        { name: 'Presentation Skills', icon: 'bx bx-presentation' },
        { name: 'Responsibility', icon: 'bx bx-check-circle' },
        { name: 'Teamwork', icon: 'bx bx-group' },
        { name: 'Creativity', icon: 'bx bx-bulb' },
        { name: 'Time Management', icon: 'bx bx-time' }
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
                  whileHover={{ x: 8, color: '#6366f1' }}
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

