import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    category: "Participation & Eligibility",
    questions: [
      {
        question: "Who is eligible to take part in Learn-a-thon?",
        answer:
          "Learn-a-thon is a national-level hackathon open to all current students enrolled in colleges across India. Teams can have members from different institutions.",
      },
      {
        question: "Is being a student a requirement for participation?",
        answer:
          "Yes, only students currently enrolled in colleges in India are eligible to participate.",
      },
      {
        question: "What is the maximum size for a team?",
        answer: "Teams must consist of 2 to 4 members.",
      },
      {
        question: "Is it possible to compete as a solo participant?",
        answer: "No, participants must form teams of at least 2 members to compete.",
      },
    ],
  },
  {
    category: "Hackathon Details",
    questions: [
      {
        question: "Will Learn-a-thon be held online, in person, or both?",
        answer:
          "Learn-a-thon will be a hybrid event. Round 1 is conducted online while Round 2 will take place physically at CEG campus, Anna University on November 23-24, 2024.",
      },
      {
        question: "What is the deadline for team registration?",
        answer:
          "Team registration must be completed before the deadline specified on the event’s Unstop page.",
      },
      {
        question: "How many teams will be selected for Round 2?",
        answer: "From each track, 3-4 teams will be selected.",
      },
      {
        question: "How can I stay updated on announcements?",
        answer:
          "Important announcements will be made via the official event channels on Unstop and CSEA's social media handles.",
      },
    ],
  },
  {
    category: "Registration",
    questions: [
      {
        question: "How do I register for the hackathon?",
        answer:
          "Teams can register online through Unstop (formerly Dare2Compete) by submitting their details.",
      },
      {
        question: "Is there a registration fee?",
        answer:
          "Round 1 is free but selected teams for Round 2 must pay a registration fee of ₹500 per participant.",
      },
      {
        question: "Who should I contact if I have more questions?",
        answer:
          "You can reach out to the organizers through the event’s official page on Unstop or contact the CSEA team for further queries.",
      },
    ],
  },
];

const FAQ = () => {
  const [selectedCategory, setSelectedCategory] = useState(faqs[0].category);
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const currentFaq = faqs.find((section) => section.category === selectedCategory);

  return (
    <section
      id="faq"
      className="min-h-screen px-4 py-20 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center drop-shadow-lg">
        ❓ Frequently Asked Questions
      </h2>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {faqs.map((section, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 ease-in-out
              ${
                selectedCategory === section.category
                  ? "bg-cyan-400 text-black border-cyan-300 shadow-md scale-105"
                  : "bg-white/10 border-white/20 text-white hover:bg-cyan-500/20 hover:scale-105"
              }`}
            onClick={() => {
              setSelectedCategory(section.category);
              setOpenIndex(null);
            }}
          >
            {section.category}
          </button>
        ))}
      </div>

      {/* FAQ List */}
      <div className="w-full max-w-4xl space-y-6">
        {currentFaq.questions.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white/10 border border-white/20 backdrop-blur-md p-6 rounded-xl shadow-md transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <button
              onClick={() => handleToggle(index)}
              className="w-full text-left flex justify-between items-center text-lg font-semibold text-cyan-300 hover:text-cyan-100 transition-all duration-300"
            >
              {item.question}
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden mt-3 text-sm text-gray-300 leading-relaxed"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
