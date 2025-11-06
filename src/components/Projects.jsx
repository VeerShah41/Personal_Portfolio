import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const projects = [
    {
      title: 'Sales Management System',
      description: 'A web-based application to manage sales and inventory efficiently.',
      hostedLink: 'https://github.com/VeerShah41/sales-management-system',
      githubLink: 'https://github.com/VeerShah41/sales-management-system'
    },
    {
      title: 'Board Game',
      description: 'An interactive board game built using JavaScript and HTML5 Canvas.',
      hostedLink: 'https://board-game-iota.vercel.app',
      githubLink: 'https://github.com/VeerShah41/board-game'
    },
    {
      title: 'Movie Review Blog',
      description: 'A blog platform for users to share and read movie reviews.',
      hostedLink: 'https://parthz-13.github.io/MovieReviewBlog/',
      githubLink: 'https://github.com/VeerShah41/movie-review-blog'
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
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <motion.a
                href={project.hostedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="code-link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Hosted Link
              </motion.a>
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="code-source"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub Repository
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects

