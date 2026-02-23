import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      "service_123",
      "template_5bn4im6",
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "m3RBTnMpZa6bVT8h5"
    )
    .then(() => {
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error(error);
      alert("Failed to send message. Try again later.");
    });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
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
              CONTACT
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-2 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start md:items-center">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              Send a Message <FaPaperPlane className="text-indigo-400" />
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
              Got a project in mind? Let's chat and bring it to life.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 bg-gray-100 dark:bg-gray-900/70 border border-gray-300 dark:border-gray-700 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 outline-none transition-all placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white text-base"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 bg-gray-100 dark:bg-gray-900/70 border border-gray-300 dark:border-gray-700 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 outline-none transition-all placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white text-base"
              />
              <textarea
                name="message"
                placeholder="Your Message..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-4 bg-gray-100 dark:bg-gray-900/70 border border-gray-300 dark:border-gray-700 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 outline-none transition-all placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white text-base resize-y"
              />
              <button
                type="submit"
                className="w-full md:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-full hover:from-indigo-500 hover:to-purple-500 hover:-translate-y-1 transition-all shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center gap-2 text-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right: Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 md:pl-8 lg:pl-12 flex flex-col justify-center h-full"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Let's Connect</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3 text-lg">
                Tell me about your idea or project.
              </p>
              <p className="text-indigo-400 font-medium text-lg flex items-center gap-2">
                Ready to build something awesome? ↓
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xl flex-shrink-0">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <a href="mailto:farhankhan9909991@gmail.com" className="text-indigo-400 hover:underline text-base">
                    farhankhan9909991@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xl flex-shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="text-gray-900 dark:text-white text-base">Faisalabad, Pakistan</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-gray-500 dark:text-gray-400 mb-4 text-base">
                Or reach me on socials
              </p>
              <div className="flex gap-6 text-3xl">
                <a
                  href="https://linkedin.com/in/farhan-khan-00621234a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-indigo-400 transition-all hover:scale-110"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/Farhankhann56"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-indigo-400 transition-all hover:scale-110"
                >
                  <FaGithub />
                </a>
                <a
                  href="mailto:farhankhan9909991@gmail.com"
                  className="text-gray-500 dark:text-gray-400 hover:text-indigo-400 transition-all hover:scale-110"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;