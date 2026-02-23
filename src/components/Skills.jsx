import { motion } from 'framer-motion';
import { FaPaintBrush, FaCode, FaMobileAlt } from 'react-icons/fa';

const leftItems = [
  {
    icon: FaPaintBrush,
    title: 'Design + Development',
    desc: 'Clean, modern designs optimized for performance & conversion.',
  },
  {
    icon: FaCode,
    title: 'Technology',
    desc: 'Latest tools for fast, progressive & scalable websites.',
  },
  {
    icon: FaMobileAlt,
    title: 'Always Responsive',
    desc: 'Perfect experience on mobile, tablet & desktop.',
  },
];

const skills = [
  { label: 'HTML5', width: 92 },
  { label: 'CSS3 / SCSS', width: 88 },
  { label: 'JavaScript', width: 78 },
  { label: 'React.js', width: 90 },
  { label: 'Responsive Design', width: 85 },
  { label: 'Git & GitHub', width: 72 },
  { label: 'Node.js Basics', width: 68 },
  { label: 'UI/UX Thinking', width: 75 },
  { label: 'Problem Solving', width: 80 },
];

const Skills = () => {
  return (
    <section
      id="skills"
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
              SKILLS
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-2 rounded-full" />
          <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            I like to craft beautiful and scalable web products with modern tools.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6 lg:gap-10 items-start">
          {/* Left Side - Aur Compact Cards */}
          <div className="grid gap-4">
            {leftItems.map((item, idx) => (
              <motion.div
                key={idx}
                className="group bg-gray-100 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-800/50 rounded-xl p-5 hover:border-indigo-500/50 hover:shadow-indigo-500/20 transition-all duration-500 hover:-translate-y-1 flex items-start gap-4 min-h-[110px] lg:min-h-[130px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-900/40 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110">
                  <item.icon className="text-lg text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold mb-1.5 text-gray-900 dark:text-white group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-xs md:text-sm leading-tight line-clamp-3">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Progress Bars */}
          <div className="space-y-4 lg:space-y-5">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                className="group flex items-center gap-3 md:gap-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
              >
                <div className="w-36 md:w-44 font-medium text-gray-700 dark:text-gray-300 flex-shrink-0 text-sm md:text-base">
                  {skill.label}
                </div>

                <div className="flex-1 h-3 bg-gray-300 dark:bg-gray-800 rounded-full overflow-hidden relative">
                  <motion.div
                    className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.width}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: 'easeOut', delay: idx * 0.15 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                <span className="w-10 md:w-12 text-right font-bold text-indigo-400 text-sm md:text-base">
                  {skill.width}%
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;