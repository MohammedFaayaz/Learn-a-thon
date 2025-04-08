import React from "react";
import { motion } from "framer-motion";


  const sponsors = [
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      premium: true,
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      premium: true,
    },
    {
      name: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      premium: false,
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      premium: false,
    },
    {
      name: "Tesla",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
      premium: false,
    },
  ];
  


const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="min-h-screen px-6 py-16 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white flex flex-col items-center justify-center"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-cyan-400 mb-12 drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🌟 Our Proud Sponsors 🌟
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={index}
            className={`relative p-6 rounded-2xl backdrop-blur-md bg-white/10 border-2 transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-cyan-400/50 hover:-translate-y-2 ${
              sponsor.premium
                ? "border-cyan-400 hover:border-cyan-300"
                : "border-cyan-400 hover:border-cyan-300"
            }`}
            whileHover={{
              scale: 1.1,
            }}
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="w-24 h-24 object-contain transition-transform duration-500 hover:rotate-6"
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className="mt-12 text-center text-gray-300 text-sm italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        Partner with us to be part of innovation that inspires 💡
      </motion.p>
    </section>
  );
};

export default Sponsors;
