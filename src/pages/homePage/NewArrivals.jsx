import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import HomepageProduct from "../../data/HomePage_Product"




const NewArrivals = () => {
const navigate = useNavigate();


const [NewArrivals, setNewArrivals]= useState([])

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  useEffect(()=>{
    filterNewArrivals();
    
  },[])


  const filterNewArrivals = ()=>{
    var products = HomepageProduct.filter((a) => a.page === "NewArrivel")
    setNewArrivals(products);

  }

  return (
    <div className="new-arrivals-container">
      {NewArrivals.map((product) => (
        <div
        onClick={()=> handleProductClick(product.id)}
        key={product.id} className="new-arrival-card">
          <img src={product.image} alt={product.name} className="new-arrival-image" />
          <div className="new-arrival-details">
            <h3 className="new-arrival-name">{product.name}</h3>
          <p className="new-arrival-description">{product.shortDescription}</p>
          <p className="new-arrival-price">₹{product.new_price}</p>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default NewArrivals;