import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function getTimeLeft() {
    const eventDate = new Date("2025-05-30T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-[#16213e] text-white">
      {/* Inline Animated SVG as Background */}
      <div className="absolute inset-0 z-0">
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
              M0,160L60,170.7C120,181,240,203,360,181.3C480,160,600,96,720,96C840,96,960,160,1080,181.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z;

              M0,192L60,213.3C120,235,240,277,360,256C480,235,600,149,720,128C840,107,960,149,1080,149.3C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z;

              M0,160L60,170.7C120,181,240,203,360,181.3C480,160,600,96,720,96C840,96,960,160,1080,181.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z
              "
            />
          </path>
        </svg>
      </div>

      {/* Main Content */}
      <div className="z-10 text-center max-w-3xl px-6 animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Welcome to <span className="text-cyan-400">Learn-A-Thon</span>
        </h1>
        <p className="text-lg sm:text-xl font-medium text-blue-100 mb-2">
          Conducted by CSE | 24-Hour Hackathon
        </p>
        <p className="text-md sm:text-lg mb-6 text-blue-200">
          📅 May 30-31, 2025 | 📍 Thiagarajar College of Engineering, Madurai
        </p>

        {/* Countdown */}
        <div className="flex justify-center gap-4 flex-wrap mb-8">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="flex flex-col items-center justify-center w-24 h-24 bg-blue-900 bg-opacity-70 rounded-xl shadow-lg border border-blue-500"
            >
              <span className="text-2xl font-bold text-cyan-300">{value}</span>
              <span className="text-sm capitalize text-blue-200">{unit}</span>
            </div>
          ))}
        </div>

        {/* Button with navigation */}
        <button
          onClick={() => navigate("/auth")}
          className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-full shadow-xl transition-transform transform hover:scale-105 hover:shadow-cyan-500/50"
        >
          Register Now
        </button>
      </div>
    </section>
  );
};

export default Home;
