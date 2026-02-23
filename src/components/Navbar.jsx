// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach((section) => {
        const top = section.offsetTop - 200;
        if (window.scrollY >= top) current = section.id;
      });
      setActiveSection(current || 'hero');
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 backdrop-blur-xl border-b ${
          isScrolled
            ? 'bg-gray-950/95 border-indigo-900/40 shadow-2xl shadow-indigo-950/30'
            : 'bg-gray-950/70 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Farhan
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Khan
            </span>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => (
              <li key={item.to}>
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={600}
                  spy={true}
                  offset={-80}
                  className={`font-medium text-base lg:text-lg cursor-pointer transition-all duration-300 hover:text-indigo-400 ${
                    activeSection === item.to
                      ? 'text-indigo-400 underline underline-offset-4 decoration-2 decoration-indigo-500'
                      : 'text-gray-300 hover:-translate-y-0.5'
                  }`}
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
          </ul>

          {/* Theme Toggle + Mobile Button */}
          <div className="flex items-center gap-5">
            <button
              onClick={toggleTheme}
              className="text-xl md:text-2xl text-gray-300 hover:text-indigo-400 transition-all duration-300 hover:rotate-12 hover:scale-110"
              aria-label="Toggle Theme"
            >
              {isDark ? <FaSun /> : <FaMoon />}
            </button>

            <button
              className="md:hidden text-2xl md:text-3xl text-gray-300 hover:text-indigo-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[998] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-gradient-to-b from-gray-950 via-indigo-950/95 to-gray-950 backdrop-blur-2xl border-l border-indigo-800/50 shadow-2xl z-[9999] md:hidden flex flex-col overflow-hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-indigo-800/50 bg-gradient-to-r from-indigo-950/80 to-gray-950/80">
                <div className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Menu
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl text-gray-200 hover:text-indigo-300 transition-colors"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Nav Links */}
              <ul className="flex flex-col p-6 gap-4 flex-1 overflow-y-auto">
                {navItems.map((item, idx) => (
                  <motion.li
                    key={item.to}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06, type: 'spring', stiffness: 200 }}
                  >
                    <ScrollLink
                      to={item.to}
                      smooth={true}
                      duration={600}
                      offset={-80}
                      className={`block px-6 py-4 rounded-xl text-lg font-medium transition-all duration-300 ${
                        activeSection === item.to
                          ? 'bg-indigo-900/50 text-indigo-300 border-l-4 border-indigo-500 shadow-md'
                          : 'text-gray-200 hover:bg-indigo-950/60 hover:text-indigo-300 hover:pl-8'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </ScrollLink>
                  </motion.li>
                ))}
              </ul>

              {/* Theme Toggle */}
              <div className="p-6 border-t border-indigo-800/50 mt-auto bg-gradient-to-r from-indigo-950/80 to-gray-950/80">
                <button
                  onClick={() => {
                    toggleTheme();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-4 w-full px-6 py-4 rounded-xl text-lg font-medium text-gray-200 hover:bg-indigo-950/60 hover:text-indigo-300 transition-all"
                >
                  {isDark ? <FaSun className="text-2xl" /> : <FaMoon className="text-2xl" />}
                  {isDark ? 'Light Mode' : 'Dark Mode'}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;