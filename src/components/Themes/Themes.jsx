import React from "react";
import {
  FaBrain,
  FaLock,
  FaUserShield,
  FaMedkit,
  FaBitcoin,
  FaMoneyBillWave,
  FaFemale,
} from "react-icons/fa";
import { motion } from "framer-motion";

const themes = [
  {
    name: "Women Empowerment",
    icon: <FaFemale />,
    color: "#f9c5d1",
    desc: "Encouraging equality, entrepreneurship, and education for women.",
  },
  {
    name: "Blockchain",
    icon: <FaBitcoin />,
    color: "#ffe0b2",
    desc: "Decentralized innovation, smart contracts, and secure digital IDs.",
  },
  {
    name: "AI & ML",
    icon: <FaBrain />,
    color: "#c8e6c9",
    desc: "Intelligent solutions using data-driven machine learning models.",
  },
  {
    name: "Cyber Security",
    icon: <FaLock />,
    color: "#b3e5fc",
    desc: "Protecting data and systems from digital threats and attacks.",
  },
  {
    name: "MedTech",
    icon: <FaMedkit />,
    color: "#f8bbd0",
    desc: "Innovations improving healthcare delivery and patient outcomes.",
  },
  {
    name: "FinTech",
    icon: <FaMoneyBillWave />,
    color: "#d1c4e9",
    desc: "Digital finance, banking innovation, and economic empowerment.",
  },
  {
    name: "Women Safety",
    icon: <FaUserShield />,
    color: "#ffcdd2",
    desc: "Technological solutions to ensure women's safety and well-being.",
  },
];

const Themes = () => {
  return (
    <section
      id="themes"
      className="relative py-20 px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Hackathon <span className="text-cyan-400">Themes</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              className="perspective"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative w-full h-64 transform-style-3d transition-transform duration-700 group hover:rotate-y-180">
                {/* Front */}
                <div
                  className="absolute inset-0 rounded-2xl p-6 flex flex-col items-center justify-center border shadow-xl bg-white/80 backdrop-blur-sm group-hover:backface-hidden"
                  style={{
                    backgroundColor: `${theme.color}33`,
                    borderColor: `${theme.color}`,
                  }}
                >
                  <div
                    className="text-4xl p-4 rounded-full mb-4 transition duration-300 group-hover:animate-pulse"
                    style={{
                      background: theme.color,
                      boxShadow: `0 0 12px ${theme.color}aa`,
                    }}
                  >
                    {theme.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-center text-gray-800">
                    {theme.name}
                  </h3>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 rounded-2xl p-6 flex items-center justify-center bg-white/90 backdrop-blur-sm rotate-y-180 backface-hidden border text-center text-gray-800"
                  style={{
                    borderColor: theme.color,
                  }}
                >
                  <p className="text-sm font-medium">{theme.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Themes;
