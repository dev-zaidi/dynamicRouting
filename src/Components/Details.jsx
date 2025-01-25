import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Data from "../Data";
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaHome } from "react-icons/fa";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();


  const product = Data.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div className="container">
        <div>
      <button className=" btn btn-outline-primary m-4" onClick={() => navigate("/")}>
      <FaHome />
      </button>
      <br /><br />
      <div style={{boxShadow:"5px 5px 5px grey", borderRadius:"25px", padding:"15px" 
      }} >
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "300px", height: "300px", objectFit: "cover", borderRadius:"25px" }}
        />
        <div style={{padding:"10px"}}>
          <h2>{product.title}</h2>
          <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Details;
