import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PrizePool = () => {
  const [prizeAmount, setPrizeAmount] = useState(0);
  const [animatedAmounts, setAnimatedAmounts] = useState([0, 0, 0]);

  const mainPrizes = [
    { title: "🏆 1st Prize", amount: 75000 },
    { title: "🥈 2nd Prize", amount: 50000 },
    { title: "🥉 3rd Prize", amount: 25000 },
  ];

  const specialPrizes = [
    { title: "♀ Empowering Women", description: "Leading Women's Team" },
    { title: "🚀 Special Track Prize", description: "Track Prize" },
  ];

  useEffect(() => {
    // Animate Total Prize Pool once on load
    let total = 0;
    const totalInterval = setInterval(() => {
      total += 5000;
      if (total >= 170000) {
        total = 170000;
        clearInterval(totalInterval);
      }
      setPrizeAmount(total);
    }, 50);

    return () => clearInterval(totalInterval);
  }, []);

  // Function to animate prize amount on hover
  const handleHover = (index, targetAmount) => {
    let count = 0;
    const interval = setInterval(() => {
      count += 2500;
      if (count >= targetAmount) {
        count = targetAmount;
        clearInterval(interval);
      }
      setAnimatedAmounts((prev) => {
        const updated = [...prev];
        updated[index] = count;
        return updated;
      });
    }, 40);
  };

  return (
    <div
      id="prizes"
      className="min-h-screen px-6 py-16 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white flex flex-col items-center"
    >
      {/* Header */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-6 text-center text-cyan-400"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🏆 Prize Pool 🏆
      </motion.h1>

      {/* Animated Total Prize Pool */}
      <motion.div
        className="text-4xl md:text-6xl font-extrabold text-white bg-gradient-to-r from-[#0ea5e9] to-[#22d3ee] bg-clip-text text-transparent mb-12"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        ₹ {prizeAmount.toLocaleString()}
      </motion.div>

      {/* Main Prizes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14 w-full max-w-5xl">
        {mainPrizes.map((prize, index) => (
          <motion.div
            key={index}
            className="bg-[#1f2937] border border-[#0ea5e9] shadow-xl rounded-2xl p-6 text-center transition-all duration-300 cursor-pointer"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 25px rgba(14, 165, 233, 0.5)",
            }}
            onMouseEnter={() => handleHover(index, prize.amount)}
          >
            <h2 className="text-2xl font-bold text-cyan-400 mb-2">
              {prize.title}
            </h2>
            <p className="text-3xl font-semibold text-white">
              ₹ {animatedAmounts[index].toLocaleString()}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Special Prizes */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1 }}
      >
        {specialPrizes.map((prize, index) => (
          <motion.div
            key={index}
            className="bg-[#0f172a] border border-cyan-500 rounded-xl p-5 text-center transition-all duration-300"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 30px rgba(0, 255, 255, 0.8)",
            }}
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-1">
              {prize.title}
            </h3>
            <p className="text-white text-sm">{prize.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PrizePool;
