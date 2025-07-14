import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VehicleList from "./pages/VehicleList";
import SellVehicle from "./pages/SellVehicle";

function App() {
  const footerRef = useRef(null);

  return (
    <Router>
      <Navbar scrollToFooter={() => footerRef.current?.scrollIntoView({ behavior: "smooth" })} />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/listings" element={<VehicleList />} />
        <Route path="/sell" element={<SellVehicle />} />
      </Routes>
      <div ref={footerRef}>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

