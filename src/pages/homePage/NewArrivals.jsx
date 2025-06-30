import React from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";





const NewArrivals = () => {
const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };



  return (
    <div className="new-arrivals-container">
      {handleProductClick.map((item) => (
        <div key={item.id} className="new-arrival-card">
          <img src={item.image} alt={item.name} className="new-arrival-image" />
          <div className="new-arrival-details">
            <h3 className="new-arrival-name">{item.name}</h3>
          <p className="new-arrival-description">{item.description}</p>
          <p className="new-arrival-price">₹{item.price}</p>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default NewArrivals;