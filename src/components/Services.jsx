// src/components/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaBolt, FaRocket } from 'react-icons/fa';

const services = [
  {
    icon: FaLaptopCode,
    title: "Frontend & UX Design",
    description:
      "Crafting pixel-perfect, responsive interfaces with React & Tailwind CSS. I blend smooth animations, intuitive UX, and solid engineering to create engaging digital experiences that users love.",
  },
  {
    icon: FaBolt,
    title: "Modern React Applications",
    description:
      "Building fast, interactive SPAs, dashboards, and web apps using React, Vite & Tailwind. Fully responsive, performance-optimized, and scalable UIs that feel modern and professional.",
  },
  {
    icon: FaRocket,
    title: "High-Performance Landing Pages",
    description:
      "Designing conversion-focused landing pages that load blazing fast and look stunning on every device. Includes eye-catching animations, mobile-first design, and SEO-ready structure for startups & businesses.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 lg:py-32 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Updated Heading with pulse dot */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 mb-4 justify-center">
            <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-500 text-transparent bg-clip-text">
              SERVICES
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-500 mx-auto mt-2 rounded-full" />
          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I specialize in building beautiful, high-performance frontend solutions that help brands and startups stand out online.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group h-full"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: index * 0.2, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-700" />

              <div className="
                relative z-10 bg-white dark:bg-gray-900/90 backdrop-blur-md 
                border border-gray-200/60 dark:border-gray-700/60 
                rounded-3xl overflow-hidden shadow-xl 
                hover:shadow-2xl hover:shadow-indigo-500/30 
                transition-all duration-500 transform 
                group-hover:-translate-y-4 group-hover:scale-[1.02]
                flex flex-col h-full
              ">
                <div className="p-8 md:p-10 text-center flex-grow">
                  <div className="
                    w-20 h-20 md:w-24 md:h-24 mx-auto mb-8 rounded-full 
                    bg-gradient-to-br from-indigo-100 to-purple-100 
                    dark:from-indigo-900/60 dark:to-purple-900/60 
                    flex items-center justify-center 
                    border border-indigo-200/50 dark:border-indigo-700/40 
                    transition-all duration-500 group-hover:scale-110 group-hover:rotate-6
                  ">
                    <service.icon className="
                      w-10 h-10 md:w-12 md:h-12 
                      text-indigo-600 dark:text-indigo-400 
                      transition-colors duration-300 
                      group-hover:text-indigo-700 dark:group-hover:text-indigo-300
                    " />
                  </div>

                  <h3 className="
                    text-2xl md:text-3xl font-bold mb-5 
                    text-gray-900 dark:text-white 
                    group-hover:text-indigo-600 dark:group-hover:text-indigo-400 
                    transition-colors duration-300
                  ">
                    {service.title}
                  </h3>

                  <p className="
                    text-gray-700 dark:text-gray-300 
                    text-base md:text-lg leading-relaxed
                  ">
                    {service.description}
                  </p>
                </div>

                <div className="
                  absolute bottom-0 left-0 right-0 h-1.5 
                  bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600 
                  w-0 group-hover:w-full 
                  transition-all duration-700 ease-out
                " />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;