import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    time: 'October 2025 – December 2025',
    title: 'Onsite Web Developer Internship',
    desc: 'Full-stack development • Team collaboration • Modern technologies hands-on',
    logo: '/images/WhatsApp Image 2025-11-21 at 5.28.04 PM.jpeg',
  },
  {
    time: '1 Month • Remote',
    title: 'DeveloperHub Corporation',
    desc: 'Frontend interfaces • Responsive design • Cross-browser optimization',
    logo: '/images/develpor hub.jpeg',
  },
  {
    time: '1 Month • Remote',
    title: 'CodeAlpha',
    desc: 'UI components • Usability focus • Senior guidance',
    logo: '/images/code alpha.jpeg',
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white overflow-hidden"
    >
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
              EXPERIENCE
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-2 rounded-full" />
          <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and internships where I built real-world skills.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-600 via-purple-600 to-indigo-600 -translate-x-1/2 rounded-full opacity-70" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className={`flex items-center mb-16 last:mb-0 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              {/* Content Card */}
              <div className={`w-5/12 ${idx % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                <div className="bg-gray-100 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-800/50 rounded-3xl p-8 shadow-xl hover:shadow-indigo-500/20 hover:border-indigo-500/50 transition-all duration-500 group">
                  <span className="text-sm font-medium text-indigo-400 block mb-3">
                    {exp.time}
                  </span>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-indigo-400 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </div>

              {/* Timeline Dot with Logo */}
              <div className="relative z-10 w-2/12 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-900/50 to-purple-900/50 flex items-center justify-center shadow-2xl border-4 border-indigo-500/70 p-2 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <img
                    src={exp.logo}
                    alt={exp.title}
                    className="w-full h-full rounded-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>

        {/* Mobile Vertical Cards */}
        <div className="md:hidden space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-100 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-800/50 rounded-3xl p-6 shadow-xl hover:shadow-indigo-500/20 hover:border-indigo-500/50 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-indigo-900/40 flex items-center justify-center border-2 border-indigo-500/50 flex-shrink-0">
                  <img
                    src={exp.logo}
                    alt={exp.title}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <span className="text-xs font-medium text-indigo-400 block mb-1">
                    {exp.time}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;