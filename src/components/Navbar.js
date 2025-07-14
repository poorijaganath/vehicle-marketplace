import React from "react";
import { Link } from "react-router-dom";

function Navbar({ scrollToFooter }) {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#1e3a8a",
        padding: "10px 20px"
      }}
    >
      <h2 style={{ color: "white" }}>AutoMarket</h2>
      <div>
        <Link to="/" style={{ color: "white", margin: "0 10px" }}>Home</Link>
        <Link to="/about" style={{ color: "white", margin: "0 10px" }}>About</Link>
        <Link to="/listings" style={{ color: "white", margin: "0 10px" }}>Listings</Link>
        <Link to="/sell" style={{ color: "white", margin: "0 10px" }}>Sell</Link>
        <Link to="/login" style={{ color: "white", margin: "0 10px" }}>Login</Link>
        <Link to="/register" style={{ color: "white", margin: "0 10px" }}>Register</Link>
        <span
          onClick={scrollToFooter}
          style={{ color: "white", margin: "0 10px", cursor: "pointer", textDecoration: "underline" }}
        >
          Contact
        </span>
      </div>
    </nav>
  );
}

export default Navbar;


