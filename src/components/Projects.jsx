import { motion } from 'framer-motion';

const projects = [
  {
    image: '/images/WhatsApp Image 2025-12-24 at 6.03.52 PM.jpeg',
    title: 'Professional Dashboard Project',
    desc: 'A real-world dashboard developed in a professional environment, focusing on responsive UI, usability, and clean front-end implementation.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
    link: 'https://github.com/Farhankhann56/portfolio',
  },
  {
    image: '/images/ecommerce.avif',
    title: 'E-commerce Platform (Frontend)',
    desc: 'Responsive product showcase, cart & checkout interface with modern UI/UX practices.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    link: 'https://github.com/Farhankhann56/ecommerce',
  },
  {
    image: '/images/weather.avif',
    title: 'Real-time Weather Dashboard',
    desc: 'Dynamic weather application with API integration and clean, intuitive design.',
    tech: ['JavaScript', 'API', 'Responsive', 'UI/UX'],
    link: 'https://react-weather-dashboard-xi.vercel.app/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Heading */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              PROJECTS
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-2 rounded-full" />
          <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Some of my favorite works and experiments built with love & modern tech.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-gray-100 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-800/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 hover:-translate-y-4"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: index * 0.15 }}
            >
              {/* Image */}
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-indigo-500 hover:to-purple-500 hover:-translate-y-1 transition-all shadow-md hover:shadow-indigo-500/30"
                  >
                    View Project →
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-base leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-indigo-900/30 dark:bg-indigo-800/40 text-gray-800 dark:text-indigo-300 px-4 py-1.5 rounded-full text-sm font-medium border border-indigo-700/30 transition-colors"
                        >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
