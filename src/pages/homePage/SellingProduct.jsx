import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import HomepageProduct from "../../data/HomePage_Product";

const SellingProduct = () => {
  const navigate = useNavigate();

  const [SellingProducts, setSellingProducts] = useState([]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  useEffect(() => {
    filterTrandingProduct();
  }, []);

  const filterTrandingProduct = () => {
    var products = HomepageProduct.filter((a) => a.page === "SellingProduct");
    setSellingProducts(products);
  };

  return (
    <div className="selling-product-container">
      {SellingProducts.map((product) => {
        return (
          <div
            onClick={() => handleProductClick(product.id)}
            className="selling-product-card"
            key={product.id}
          >
            <img src={product.image} alt="" />
            <div className="selling-product-contet">
              <h2>{product.name}</h2>
              <p>{product.des}</p>
              <h3>
                ₹{product.new_price}
                <span style={{ textDecoration: "line-through", color: "gray" }}>
                  ₹{product.old_price}
                </span>
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default SellingProduct;
