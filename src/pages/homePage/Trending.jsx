import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { TbShoppingCartPlus } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import HomepageProduct from "../../data/HomePage_Product"; 

const Trending = () => {
  const navigate = useNavigate();

  const [trendingProducts, setTrendingProducts] = useState([]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  useEffect(() => {
    filterTrandingProduct();
  },[]);

  const filterTrandingProduct = () => {
    var products = HomepageProduct.filter((a) => a.page === "TrendingProduct");
    setTrendingProducts(products);
  };

  return (
    <div className="trending-products-container">
      { trendingProducts.map((product) => (
        <div
          onClick={() => handleProductClick(product.id)}
          className="trending-product"
          key={product.id}
        >
          <img src={product.image} alt={product.name} />
          <div className="trending-product-info">
            <h3>{product.name}</h3>
            <p>
              ₹{product.new_price}{" "}
              <span style={{ textDecoration: "line-through", color: "gray" }}>
                ₹{product.old_price}
              </span>
            </p>
            <button> Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trending;
