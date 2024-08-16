import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import { BatteryJumpstartService } from "./components/Services";
import Footer from './components/Footer'

const App = () => {
  return (
      <Router>
        <div style={{  }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/battery-jump-start" element={<BatteryJumpstartService />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
      </Router>
  );
};

export default App;
