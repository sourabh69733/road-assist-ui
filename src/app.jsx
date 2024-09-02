import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import {
  BatteryJumpstartService,
  FlatTyreService,
  FuelFillingService,
  KeyLockoutService,
  MechanicalFaultService,
  VehicleTowingService,
} from "./components/Services";
import Footer from './components/Footer'
import Plans from './components/Plans'
import Checkout from './components/Checkout'

const App = () => {
  return (
<Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/battery-jump-start" element={<BatteryJumpstartService />} />
          <Route path="/tyre-puncture" element={<FlatTyreService />} />
          <Route path="/fuel-delivery" element={<FuelFillingService />} />
          <Route path="/key-lockout" element={<KeyLockoutService />} />
          <Route path="/instant-car-repair" element={<MechanicalFaultService />} />
          <Route path="/towing" element={<VehicleTowingService />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      <Footer />
    </Router>
    
  );
};

export default App;
