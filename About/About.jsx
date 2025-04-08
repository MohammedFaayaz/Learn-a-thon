import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-[#16213e] text-white font-sans overflow-hidden flex items-center justify-center px-6 sm:px-10 py-20"
    >
      {/* Animated SVG Background (like Home) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#0f172a" fillOpacity="1">
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,160L60,170.7C120,181,240,203,360,181.3C480,160,600,96,720,96C840,96,960,160,1080,181.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L0,320Z;

                M0,192L60,213.3C120,235,240,277,360,256C480,235,600,149,720,128C840,107,960,149,1080,149.3C1200,149,1320,107,1380,85.3L1440,64L1440,320L0,320Z;

                M0,160L60,170.7C120,181,240,203,360,181.3C480,160,600,96,720,96C840,96,960,160,1080,181.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L0,320Z
              "
            />
          </path>
        </svg>
      </div>

      {/* Overlay to boost text visibility */}
      <div className="absolute inset-0 bg-[#16213e]/70 backdrop-blur-sm z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl text-center animate-fade-in-up">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 animate-slide-down">
          About <span className="text-cyan-400 animate-glow">Learn-A-Thon</span>
        </h2>

        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up">
          <span className="text-cyan-300 font-semibold">Learn-A-Thon</span> is a
          <span className="text-cyan-300 font-semibold"> 24-hour hackathon</span> designed to ignite creativity, challenge minds, and foster innovation among passionate developers. <br />
          Hosted by the <span className="text-cyan-300 font-semibold">CSE Department of Thiagarajar College of Engineering, Madurai</span>, this event brings together tech enthusiasts, problem solvers, and innovators to build groundbreaking solutions in a high-energy environment.
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10 px-4">
          <div className="bg-cyan/10 border border-cyan-500 rounded-xl p-6 hover:scale-105 transition duration-300 shadow-lg backdrop-blur-sm animate-fade-in-up">
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">🚀 Innovation</h3>
            <p className="text-sm text-blue-100">
              Push the boundaries of technology and create disruptive solutions.
            </p>
          </div>
          <div className="bg-cyan/10 border border-cyan-500 rounded-xl p-6 hover:scale-105 transition duration-300 shadow-lg backdrop-blur-sm animate-fade-in-up delay-100">
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">🤝 Collaboration</h3>
            <p className="text-sm text-blue-100">
              Work with talented peers and industry mentors to build your dream.
            </p>
          </div>
          <div className="bg-cyan/10 border border-cyan-500 rounded-xl p-6 hover:scale-105 transition duration-300 shadow-lg backdrop-blur-sm animate-fade-in-up delay-200">
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">🏆 Competition</h3>
            <p className="text-sm text-blue-100">
              Compete for exciting prizes and recognition among the best minds.
            </p>
          </div>
        </div>

        {/* CTA */}
        <button className="mt-6 px-8 py-3 bg-cyan-300 hover:bg-cyan-200 text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-110 duration-300 animate-glow">
          Join the Hackathon
        </button>
      </div>
    </section>
  );
};

export default About;
