import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Timeline.css"; // Import the custom CSS file

const timelineData = [
  { id: 1, date: "31 march", title: "Registrations Open & Commencement of Round 1", description: "Registrations for Learn-a-thon officially begin, inviting participants to embark on an innovative journey. In Round 1, participants will submit their ideation solutions to any problem statement within the specified domains, allowing them to showcase their creativity and problem-solving approach." },
  { id: 2, date: "30 April ", title: "Conclusion of Round 1", description: "Round 1 submissions close as teams submit their ideation solutions. Judges will carefully evaluate each submission based on the clarity, innovation, and feasibility of the proposed ideas, setting the stage for the next phase." },
  { id: 3, date: "10 May", title: "Release of Selected Finalists", description: "The list of finalists advancing to Round 2 will be announced. These teams have impressed the judges with their ideation and will proceed to tackle more complex challenges in the final round." },
  { id: 4, date: "16 May", title: "Release of Round 2 Problem Statements", description: "New and intricate problem statements will be released for the second round. The finalists will now be challenged to develop their ideas into tangible solutions, working on real-world problems across impactful domains." },
  { id: 5, date: "30 May", title: "Commencement of 24-Hour Hackathon (Round 2)", description: "The final round kicks off with the 24-hour hackathon. Finalist teams will work tirelessly to develop working prototypes, refining their solutions under time constraints while displaying teamwork and technical prowess." },
  { id: 6, date: "31 May", title: "Conclusion of Hackathon", description: "The hackathon concludes with the submission of final solutions. The judges will evaluate the projects, and the winners will be announced, celebrating innovative ideas and impactful contributions to society." }
];

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".timeline-content");
      let index = 0;
      sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2) {
          index = i;
        }
      });
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="timeline" className="timeline-container">
      {/* Sidebar Timeline */}
      <div className="timeline-sidebar">
        <div className="timeline-line"></div>
        {timelineData.map((item, index) => (
          <div key={item.id} className={`timeline-date ${index === activeIndex ? "active" : ""}`}>
            {item.date}
          </div>
        ))}
      </div>

      {/* Timeline Content */}
      <div className="timeline-content-wrapper">
        {timelineData.map((item, index) => (
          <motion.div 
            key={item.id} 
            className="timeline-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="timeline-title">{item.title}</h3>
            <p className="timeline-description">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
