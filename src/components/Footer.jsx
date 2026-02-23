import { FaGithub, FaLinkedin, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-950 to-black border-t border-indigo-900/30 text-gray-400 py-10 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left - Copyright & Location */}
        <div className="text-center md:text-left">
          <p className="font-medium text-gray-200 text-lg">
            © 2026 Farhan Khan. All rights reserved.
          </p>
          <p className="text-sm opacity-80 mt-2">
            Crafting modern web experiences from Faisalabad, Pakistan
          </p>
        </div>

        {/* Right - Social Icons */}
        <div className="flex gap-7 text-3xl">
          <a
            href="https://github.com/Farhankhann56"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
          >
            <FaGithub />
          </a>
          <a
            href="http://linkedin.com/in/farhan-k-a-3854593a5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/farhandevlabs?igsh=MmJjZTdpdXRteHA4&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/share/1T1Qjtk3q5/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://x.com/FarhanK581"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Optional subtle credit line */}
      <div className="text-center mt-8 text-sm opacity-60">
        Built with React, Vite & Tailwind CSS • Deployed with ❤️
      </div>
    </footer>
  );
};

export default Footer;