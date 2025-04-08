import React, { useState } from "react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  console.log("AuthPage loaded");


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1f2937] flex items-center justify-center px-4">
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
      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 text-white animate-fade-in-up border border-white/20">
        
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold mb-2 animate-glow">
            {isLogin ? "Welcome Back 👋" : "Create Account 🚀"}
          </h2>
          <p className="text-gray-300 text-sm">
            {isLogin ? "Login to continue" : "Sign up to get started"}
          </p>
        </div>

        {/* Form Fields */}
        <form className="space-y-5 animate-fade-in-up">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <button
            type="submit"
            className="w-full bg-cyan-400 hover:bg-cyan-300 transition duration-300 text-white py-3 rounded-lg font-semibold shadow-md hover:scale-105"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Toggle */}
        <p className="text-sm text-center text-gray-300 mt-6">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-cyan-400 hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
