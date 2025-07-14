import React from "react";
import "../styles/About.css";

// 🚗 Cars
import tiago from "../assets/tata-tiago.jpg";
import alto from "../assets/maruti-alto.jpg";
import i20 from "../assets/hyundai-i20.jpg";
import figo from "../assets/ford-figo.jpg";
import xuv from "../assets/mahindra-xuv.jpg";

// 🏍️ Bikes
import splendor from "../assets/hero-splendor.jpg";
import r15 from "../assets/yamaha-r15.jpg";
import pulsar from "../assets/bajaj-pulsar.jpg";
import duke from "../assets/ktm-duke.jpg";
import enfield from "../assets/royal-enfield.jpg";

// 🚛 Lorries
import ace from "../assets/tata-ace.jpg";
import container from "../assets/ashok-container.jpg";
import benz from "../assets/bharat-benz.jpg";
import tanker from "../assets/oil-tanker.jpg";
import trailer from "../assets/flatbed-trailer.jpg";

const listings = [
  { id: 1, title: "Tata Tiago", type: "Hatchback", category: "Car", image: tiago },
  { id: 2, title: "Maruti Alto", type: "Hatchback", category: "Car", image: alto },
  { id: 3, title: "Hyundai i20", type: "Premium Hatch", category: "Car", image: i20 },
  { id: 4, title: "Ford Figo", type: "Hatchback", category: "Car", image: figo },
  { id: 5, title: "Mahindra XUV", type: "SUV", category: "Car", image: xuv },

  { id: 6, title: "Hero Splendor", type: "Standard", category: "Bike", image: splendor },
  { id: 7, title: "Yamaha R15", type: "Sport", category: "Bike", image: r15 },
  { id: 8, title: "Bajaj Pulsar", type: "Street", category: "Bike", image: pulsar },
  { id: 9, title: "KTM Duke", type: "Naked", category: "Bike", image: duke },
  { id: 10, title: "Royal Enfield", type: "Cruiser", category: "Bike", image: enfield },

  { id: 11, title: "Tata Ace", type: "Mini Truck", category: "Lorry", image: ace },
  { id: 12, title: "Ashok Container", type: "Container", category: "Lorry", image: container },
  { id: 13, title: "Bharat Benz", type: "Heavy Load", category: "Lorry", image: benz },
  { id: 14, title: "Oil Tanker", type: "Fuel Carrier", category: "Lorry", image: tanker },
  { id: 15, title: "Flatbed Trailer", type: "Trailer", category: "Lorry", image: trailer }
];

function VehicleList() {
  return (
    <div className="category-section">
      <h2>📋 All <span className="highlight">Listings</span></h2>
      <div className="category-grid">
        {listings.map((item) => (
          <div key={item.id} className="category-card">
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <p>{item.type} | {item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VehicleList;
