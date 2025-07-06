import React, { useEffect, useState, useContext } from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import HomepageProduct from "../../data/HomePage_Product";
import { CartContext } from "../../Context/CartContext";
import { AuthContext } from "../../Context/AuthContext";

const Trending = () => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { isLoggedIn } = useContext(AuthContext);

  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    filterTrendingProduct();
  }, []);

  const filterTrendingProduct = () => {
    var products = HomepageProduct.filter((a) => a.page === "TrendingProduct");
    setTrendingProducts(products);
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    if (!isLoggedIn) {
      navigate("/auth");
    } else {
      addToCart(product);
      navigate("/cart"); // ✅ direct cart page pe le jao
    }
  };

  return (
    <div className="trending-products-container">
      {trendingProducts.map((product) => (
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
            <button onClick={(e) => handleAddToCart(e, product)}>Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trending;
