import React from "react";
import "../styles/About.css";

// ✅ Car images
import sedan from "../assets/car-sedan.jpg";
import compact from "../assets/car-compact.jpg";
import suv from "../assets/car-suv.jpg";
import coupe from "../assets/car-coupe.jpg";

// ✅ Bike images
import standard from "../assets/bike-standard.jpg";
import cruiser from "../assets/bike-cruiser.jpg";
import sport from "../assets/bike-sport.jpg";
import touring from "../assets/bike-touring.jpg";

// ✅ Lorry images
import mini from "../assets/lorry-mini.jpg";
import container from "../assets/lorry-container.jpg";
import tanker from "../assets/lorry-tanker.jpg";
import trailer from "../assets/lorry-trailer.jpg";

function About() {
  return (
    <div>
      {/* Section: About Info */}
      <div className="about-section">
        <div className="about-image">
          <img src={sedan} alt="vehicle" />
        </div>
        <div className="about-content">
          <h4>About AutoMarket</h4>
          <h2>
            India’s Trusted <span className="highlight">Second-Hand</span> Vehicle Marketplace
          </h2>
          <p>
            Welcome to <strong>AutoMarket</strong> — the platform where buying and selling used vehicles is easy, fast, and transparent.
            Whether you're upgrading your car, buying your first bike, or looking to sell your commercial vehicle — we've got you covered.
          </p>
          <ul>
            <li>✔ List your vehicle for free</li>
            <li>✔ Upload images with live preview</li>
            <li>✔ Easy-to-use mobile-friendly interface</li>
            <li>✔ 24/7 support and contact assistance</li>
          </ul>
        </div>
      </div>

      {/* Section: Stats */}
      <div className="stats-section">
        <div className="stats-grid">
          <div>
            <h2>500+</h2>
            <p>Available Vehicles</p>
          </div>
          <div>
            <h2>900+</h2>
            <p>Happy Clients</p>
          </div>
          <div>
            <h2>1500+</h2>
            <p>Verified Sellers</p>
          </div>
          <div>
            <h2>20+</h2>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>

      {/* Section: Car Categories */}
      <div className="category-section">
        <h2>🚗 Car <span className="highlight">Categories</span></h2>
        <div className="category-grid">
          {[
            { label: "Sedans", img: sedan },
            { label: "Compact", img: compact },
            { label: "SUV", img: suv },
            { label: "Coupe", img: coupe }
          ].map((type, i) => (
            <div key={i} className="category-card">
              <img src={type.img} alt={type.label} />
              <h4>{type.label}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Bike Categories */}
      <div className="category-section">
        <h2>🏍️ Bike <span className="highlight">Categories</span></h2>
        <div className="category-grid">
          {[
            { label: "Standard", img: standard },
            { label: "Cruiser", img: cruiser },
            { label: "Sport", img: sport },
            { label: "Touring", img: touring }
          ].map((type, i) => (
            <div key={i} className="category-card">
              <img src={type.img} alt={type.label} />
              <h4>{type.label}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Lorry Categories */}
      <div className="category-section">
        <h2>🚛 Lorry <span className="highlight">Categories</span></h2>
        <div className="category-grid">
          {[
            { label: "Mini Truck", img: mini },
            { label: "Container", img: container },
            { label: "Tanker", img: tanker },
            { label: "Trailer", img: trailer }
          ].map((type, i) => (
            <div key={i} className="category-card">
              <img src={type.img} alt={type.label} />
              <h4>{type.label}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
