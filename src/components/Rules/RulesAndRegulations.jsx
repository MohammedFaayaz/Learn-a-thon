import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const RulesAndRegulations = ({ onClose }) => {
  const rules = [
    "👥 Team Size: 2-4 members per team.",
    "⏳ Submission Deadline: Strictly adhered to Timeline.",
    "🚫 Originality: No plagiarism allowed.",
    "💻 Technology: Open stack but well-documented.",
    "🧑‍⚖️ Ethics: Maintain proper behavior.",
    "🤖 Use of AI: Allowed but must have human contribution.",
    "🏆 Judging: Innovation, functionality & scalability.",
    "🔐 Privacy: Adhere to data privacy guidelines.",
    "🗣️ Presentation: 5-minute pitch to judges.",
    "❌ Disqualification: Any form of misconduct leads to disqualification.",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm p-4">
      <motion.div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6 md:p-8 relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-600 transition"
        >
          <X size={24} />
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-cyan-700 mb-6">
          📜 Rules & Regulations
        </h2>

        {/* Rules List */}
        <ul className="space-y-4 text-base text-gray-800 leading-relaxed list-disc pl-6">
          {rules.map((rule, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.07 }}
              className="text-gray-700"
            >
              {rule}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default RulesAndRegulations;
