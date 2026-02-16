import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const projects = [
    {
      title: 'Asset Tracker',
      date: 'September 2024',
      description: 'Full-stack inventory management system built with React, Node.js, Express, and MySQL. Integrated RESTful APIs and JWT authentication for secure login. Utilized Prisma ORM for database interaction and data integrity.',
      githubLink: 'https://github.com/VeerShah41/AP-Inventory-Asset-Tracker',
      demoLink: 'https://ap-inventory-asset-tracker-la4y.vercel.app/'
    },
    {
      title: 'Expanse Tracker',
      date: 'August 2024',
      description: 'Category-wise expense tracking application built with React Native. Features data visualization for better financial tracking. Used Context API for efficient global state management.',
      githubLink: 'https://github.com/VeerShah41/Expense-Tracker-App',
      demoLink: null
    },
    {
      title: 'Notes Keeper',
      date: 'March 2024',
      description: 'Note-taking web application for managing personal notes using HTML, CSS, and JavaScript.',
      githubLink: 'https://github.com/VeerShah41/notes-keeper',
      demoLink: 'https://notes-keeper-ashy.vercel.app/'
    },
    {
      title: 'Movie Review Blog',
      date: 'January 2024',
      description: 'A blogging platform for movie reviews built using HTML, CSS, and JavaScript.',
      githubLink: 'https://github.com/parthz-13/MovieReviewBlog',
      demoLink: 'https://parthz-13.github.io/MovieReviewBlog/'
    }
  ]

  return (
    <section id="projects" className="projects" ref={ref}>
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
          Projects
        </motion.h2>
      </motion.div>
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.15, ease: 'easeOut' }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className="project-date">{project.date}</span>
            </div>
            <p>{project.description}</p>
            <div className="project-links">
              {project.demoLink ? (
                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="code-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Demo
                </motion.a>
              ) : (
                <span className="code-link disabled" style={{ opacity: 0.5, cursor: 'not-allowed' }}>
                  Demo (Not Deployed)
                </span>
              )}
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="code-source"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects

