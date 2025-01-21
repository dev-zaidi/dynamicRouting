import React from "react";
import { Link } from "react-router-dom";
import Data from "../Data"; 
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", padding: "10px" }}>
      {Data.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "5px",
            width: "250px",
            textAlign: "center",
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
          <h3>{product.title}</h3>
          <p>${product.price.toFixed(2)}</p>
          <Link to={`/product/${product.id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
