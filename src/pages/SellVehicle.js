import React, { useState } from "react";

function SellVehicle() {
  const [vehicle, setVehicle] = useState({
    type: "",
    brand: "",
    model: "",
    year: "",
    price: "",
    image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setVehicle({ ...vehicle, image: files[0] });
    } else {
      setVehicle({ ...vehicle, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Vehicle Submitted!\n" + JSON.stringify({ ...vehicle, image: vehicle.image?.name }, null, 2));
    setVehicle({ type: "", brand: "", model: "", year: "", price: "", image: null });
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px"
      }}
    >
      <h2 style={{ textAlign: "center", color: "#2563eb" }}>Sell Your Vehicle</h2>
      <form onSubmit={handleSubmit}>
        {["type", "brand", "model", "year", "price", "image"].map((field, i) => (
          <div key={i} style={{ marginBottom: "15px" }}>
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
            {field === "image" ? (
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "10px", marginTop: "5px" }}
              />
            ) : (
              <input
                type="text"
                name={field}
                value={vehicle[field]}
                onChange={handleChange}
                placeholder={`Enter ${field}`}
                required
                style={{ width: "100%", padding: "10px", marginTop: "5px" }}
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "5px"
          }}
        >
          Submit Listing
        </button>
      </form>

      {vehicle.image && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h4>Preview:</h4>
          <img
            src={URL.createObjectURL(vehicle.image)}
            alt="preview"
            style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
          />
        </div>
      )}
    </div>
  );
}

export default SellVehicle;
