import React from "react";
function Home() {
  return (
    <div style={{
      padding: "60px 20px",
      backgroundImage: "url('https://cdn.pixabay.com/photo/2017/03/27/14/56/car-2179255_1280.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "white",
      textShadow: "1px 1px 4px rgba(0,0,0,0.8)"
    }}>
      <h1>Welcome to AutoMarket</h1>
      <p>Buy and sell second-hand vehicles easily!</p>
    </div>
  );
}
export default Home;