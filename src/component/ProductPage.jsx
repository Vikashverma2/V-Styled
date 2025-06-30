import React from "react";
import { useParams } from "react-router-dom";
import HomepageProduct from "../data/HomePage_Product";

const ProductPage = () => {
  const { productId } = useParams();

  const product = HomepageProduct.find(
    (item) => item.id === parseInt(productId)
  );

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div className="product-page">
      <div className="product-page-container">
        <img
          className="product-page-image"
          src={product.image}
          alt={product.name}
        />
        <div className="product-page-details">
          <h1 className="name">{product.name}</h1>
          <p className="des">{product.shortDescription}</p>
          <p className="reviews">
            Reviews: {product.reviewCount} <span>{product.stars}⭐</span>
          </p>
          <p className="price">
            ₹{product.new_price}{" "}
            <span style={{ textDecoration: "line-through", color: "gray" }}>
              ₹{product.old_price}
            </span>
          </p>
          <div className="size">
            <span>Size: </span>
            {product.size.map((sz, index) => (
              <div key={index} className="size-box">
                {sz}
              </div>
            ))}
          </div>
          <p className="full-des">{product.fullDescription}</p>
          <p className="product-details">{product.productDetails}</p>
          <div className="add-product">
            <button className="btn-cart">🛒 Add to Cart</button>
            <button className="btn-wishlist">❤️ Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
