import React from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  const contacts = [
    { name: "Mohammed Fayaz A", phone: "+91 6383085606" },
    { name: "Joshika Sri N R", phone: "+91 90348 9273" },
    { name: "Shruthi K", phone: "+91 49387 48888" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      id="contact"
      className="min-h-screen w-full px-6 py-20 bg-gradient-to-b from-[#0f172a] via-[#0d2f3f] to-[#0f172a] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Contact Box */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="flex-1 backdrop-blur-xl bg-white/5 p-8 rounded-2xl shadow-xl transition-all duration-300 hover:ring-2 hover:ring-cyan-400 hover:bg-cyan-500/10"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">📞 Contact Us</h2>
          <ul className="space-y-4 text-lg">
            {contacts.map((contact, index) => (
              <motion.li
                key={index}
                className="hover:scale-105 transition-all duration-300"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <strong className="text-cyan-300">{contact.name}</strong><br />
                <span className="text-gray-300">{contact.phone}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="flex-1 backdrop-blur-xl bg-white/5 p-8 rounded-2xl shadow-xl transition-all duration-300 hover:ring-2 hover:ring-cyan-400 hover:bg-cyan-500/10"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">🔗 Quick Links</h2>
          <ul className="space-y-3 text-base">
            {[
              { name: "About", id: "about" },
              { name: "Themes", id: "themes" },
              { name: "Timeline", id: "timeline" },
              { name: "Rules & Regulations", id: "rulesAndRegulations" },
              { name: "Prizes", id: "prizes" },
              { name: "FAQ", id: "faq" },
              { name: "Contact", id: "Contact" },
            ].map((link, index) => (
              <motion.li
                key={index}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="text-cyan-300 hover:text-white transition duration-300 hover:underline"
                >
                  {link.name}
                </button>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Social Media & Email */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="flex-1 backdrop-blur-xl bg-white/5 p-8 rounded-2xl shadow-xl transition-all duration-300 hover:ring-2 hover:ring-cyan-400 hover:bg-cyan-500/10"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">🌐 Connect With Us</h2>
          <div className="flex space-x-4 mb-6">
            <a
              href="https://instagram.com/tce_official"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-300 hover:text-white transition duration-300 hover:scale-110"
            >
              <Instagram size={28} />
            </a>
            <a
              href="https://linkedin.com/in/tce-official"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-300 hover:text-white transition duration-300 hover:scale-110"
            >
              <Linkedin size={28} />
            </a>
          </div>

          <div className="space-y-2 text-sm text-gray-300">
            <p className="flex items-center gap-2">
              <Mail size={18} /> <a href="mailto:info@tce.ac.in" className="hover:underline">info@tce.ac.in</a>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={18} /> <a href="mailto:support@tce.ac.in" className="hover:underline">support@tce.ac.in</a>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-gray-400">
        © 2024 TCE. All rights reserved.
      </footer>
    </motion.div>
  );
};

export default Contact;
