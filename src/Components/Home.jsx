import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Data from "../Data"; 
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
     const navigate= useNavigate();
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", padding: "10px", justifyContent: "center"}}>
      {Data.map((product) => (
        <div
          key={product.id}
          style={{
            // border: "1px solid grey",
            borderRadius: "10px",
            padding: "15px",
            width: "250px",
            textAlign: "center",
            boxShadow:"2px 2px 5px grey"
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius:"25px", boxShadow:"2px 2px 5px grey" }}
          />
          <p>{product.title.slice(0,25)}</p>
          <p>{product.description.slice(0,80)}</p>
            <button  onClick={()=>{navigate(`/product/${product.id}`)}} className="btn btn-outline-primary">View</button>   
        </div>
      ))}
    </div>
  );
};

export default Home;
