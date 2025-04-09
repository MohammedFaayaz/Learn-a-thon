import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Themes from "./components/Themes/Themes";
import Timeline from "./Timelines/Timeline";
import PrizePool from "./Prizepool/Prizepool";
import Sponsors from "./Sponsors/Sponsors";
import RulesAndRegulations from "./components/Rules/RulesAndRegulations";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import AuthPage from "./components/Auth/AuthPage";

const App = () => {
  const [isRulesOpen, setIsRulesOpen] = useState(false);

  return (
    <Router>
      <div
        className="bg-no-repeat bg-cover bg-fixed min-h-screen"
        style={{ backgroundImage: `url('/bg-animated.svg')` }}
      >
        {/* Navbar gets onRulesClick handler */}
        <Navbar onRulesClick={() => setIsRulesOpen(true)} />

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Themes />
                <Timeline />
                <PrizePool />
                <Sponsors />
                <FAQ />
                <Contact />

                {/* Rules Modal */}
                {isRulesOpen && (
                  <RulesAndRegulations onClose={() => setIsRulesOpen(false)} />
                )}
              </>
            }
          />

          {/* Auth Route */}
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
