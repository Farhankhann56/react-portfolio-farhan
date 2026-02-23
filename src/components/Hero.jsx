// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FaGithub } from 'react-icons/fa';
import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { TypeAnimation } from 'react-type-animation';
import { useTheme } from '../ThemeContext'; // dark mode context

const Hero = () => {
  const { isDark } = useTheme(); // use the dark mode state
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    background: { color: "transparent" },
    particles: {
      number: { value: 40, density: { enable: true } },
      color: { value: "#6366f1" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3, random: true },
      links: { enable: true, distance: 120, color: "#6366f1", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 1 },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: true, mode: "push" } },
      modes: { repulse: { distance: 100 }, push: { quantity: 4 } },
    },
  };

  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16 px-4 sm:px-6 md:px-8 ${
        isDark ? 'bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-900'
      } transition-colors duration-500`}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 -z-10"
      />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
        <motion.div
          className="text-center md:text-left order-1 md:order-1 flex flex-col items-center md:items-start"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div className="mb-6 md:mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }}>
            <div className="inline-flex items-center gap-3 mb-3 md:mb-4 justify-center md:justify-start">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-indigo-500 animate-pulse" />
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Farhan Khan
              </h1>
            </div>
            <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto md:mx-0 mt-2 rounded-full" />
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 md:mb-8 min-h-[60px] sm:min-h-[80px] md:min-h-[120px] flex items-center justify-center md:justify-start">
            <span className="inline-block min-w-[300px] sm:min-w-[380px] md:min-w-[620px] text-center md:text-left">
              <TypeAnimation
                sequence={['Crafting Digital Experiences', 5000, '', 800]}
                wrapper="span"
                speed={45}
                deletionSpeed={35}
                repeat={Infinity}
                cursor={true}
                cursorStyle="|"
                className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
              />
            </span>
          </h2>

          <p className={`text-base sm:text-lg md:text-xl max-w-lg mb-8 md:mb-10 mx-auto md:mx-0 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Web Developer building clean, modern & responsive websites that solve real problems.
          </p>

          <div className="flex flex-wrap gap-4 sm:gap-5 justify-center md:justify-start">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={600}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:from-indigo-500 hover:to-purple-500 hover:-translate-y-1 transition-all shadow-lg hover:shadow-indigo-500/40 cursor-pointer text-base sm:text-lg"
            >
              Let's Collaborate
            </ScrollLink>

            <a
              href="https://github.com/Farhankhann56"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-indigo-500 text-indigo-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-indigo-600/20 hover:border-indigo-400 hover:text-white transition-all flex items-center gap-2 sm:gap-3 text-base sm:text-lg hover:-translate-y-1"
            >
              <FaGithub className="text-xl sm:text-2xl" />
              View GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative max-w-[80%] sm:max-w-md mx-auto order-2 md:order-2 mt-8 md:mt-0"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 via-purple-600/20 to-transparent rounded-full blur-3xl opacity-70" />
          <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl group border-4 border-indigo-500/20">
            <img
              src="/images/new pic.png"
              alt="Farhan Khan"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6 sm:pb-8">
              <p className="text-white font-medium text-base sm:text-xl px-4 sm:px-6 text-center">
                Frontend Enthusiast
              </p>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-32 sm:w-40 h-32 sm:h-40 bg-indigo-600/20 rounded-full blur-3xl" />
          <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-40 sm:w-48 h-40 sm:h-48 bg-purple-600/15 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;