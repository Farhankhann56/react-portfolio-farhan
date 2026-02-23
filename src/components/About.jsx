// src/components/About.jsx
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

const About = () => {
  return (
    <section
      id="about"
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
              ABOUT ME
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-2 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            className="relative order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            {/* Gradient Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/15 to-purple-600/15 rounded-3xl blur-2xl opacity-70" />

            {/* Image */}
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl group border border-indigo-500/20">
              <img
                src="/images/WhatsApp Image 2025-01-24 at 4.00.33 AM.jpeg"
                alt="Farhan"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                loading="lazy"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                <p className="text-white font-medium text-lg px-6 text-center">
                  Frontend Developer
                </p>
              </div>
            </div>

            {/* Decorative Blur */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl sm:-top-8 sm:-right-8 sm:w-40 sm:h-40" />
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            className="order-1 md:order-2 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Hello! I'm Farhan
            </h3>

            <p className="text-2xl md:text-3xl font-semibold text-indigo-400">
              Frontend Developer
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I'm a passionate web developer focused on creating fast, beautiful, and user-friendly digital products using React, Tailwind CSS, Vite, and modern JavaScript. I love building responsive UIs with smooth animations and clean code. Currently exploring full-stack opportunities while sharpening my skills in Next.js and performance optimization.
            </p>

            <div className="space-y-4 mt-8 text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-indigo-400 text-xl" />
                <div>
                  <span className="text-gray-400">Email :</span>{' '}
                  <a href="mailto:farhankhan9909991@gmail.com" className="text-indigo-400 hover:underline">
                    farhankhan9909991@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-indigo-400 text-xl" />
                <div>
                  <span className="text-gray-400">From :</span> Faisalabad, Pakistan
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaGlobe className="text-indigo-400 text-xl" />
                <div>
                  <span className="text-gray-400">Languages :</span> English, Urdu, Punjabi
                </div>
              </div>
            </div>

            {/* Hire Me Button */}
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold px-8 py-4 rounded-full hover:from-indigo-500 hover:to-purple-500 hover:-translate-y-1 transition-all shadow-lg hover:shadow-indigo-500/40 text-lg"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;