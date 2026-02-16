import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Python', icon: 'bx bxl-python' },
        { name: 'TypeScript', icon: 'bx bxl-typescript' },
        { name: 'JavaScript', icon: 'bx bxl-javascript' },
        { name: 'SQL', icon: 'bx bxs-data' },
        { name: 'HTML', icon: 'bx bxl-html5' },
        { name: 'CSS', icon: 'bx bxl-css3' }
      ]
    },
    {
      title: 'Data Science',
      skills: [
        { name: 'NumPy', icon: 'bx bx-math' },
        { name: 'Pandas', icon: 'bx bxl-python' },
        { name: 'Matplotlib', icon: 'bx bx-bar-chart-alt-2' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React', icon: 'bx bxl-react' },
        { name: 'Next.js', icon: 'bx bx-code-block' },
        { name: 'React Native', icon: 'bx bx-mobile-alt' },
        { name: 'Node.js', icon: 'bx bxl-nodejs' },
        { name: 'Express.js', icon: 'bx bx-server' }
      ]
    },
    {
      title: 'Databases & ORM',
      skills: [
        { name: 'MySQL', icon: 'bx bxs-data' },
        { name: 'MongoDB', icon: 'bx bxl-mongodb' },
        { name: 'Prisma ORM', icon: 'bx bx-data' }
      ]
    },
    {
      title: 'Tools & Coursework',
      skills: [
        { name: 'Excel', icon: 'bx bx-spreadsheet' },
        { name: 'Git/GitHub', icon: 'bx bxl-github' },
        { name: 'Data Structures', icon: 'bx bx-code-curly' }
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Time Management', icon: 'bx bx-time' },
        { name: 'Creativity', icon: 'bx bx-bulb' },
        { name: 'Teamwork', icon: 'bx bx-group' },
        { name: 'Responsibility', icon: 'bx bx-check-circle' },
        { name: 'Presentation Skills', icon: 'bx bx-presentation' }
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

