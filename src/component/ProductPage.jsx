import React from 'react';
import { useParams } from 'react-router-dom';
import HomepageProduct from "../data/HomePage_Product";


const ProductPage = () => {
  const { productId } = useParams();
  
  const product = HomepageProduct.find(item => item.id === parseInt(productId));

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div className="product-page-container">
      <img className="product-page-image" src={product.image} alt={product.name} />
      <div className="product-page-details">
        <h1>{product.name}</h1>
        <p>
          ₹{product.new_price}{' '}
          <span style={{ textDecoration: "line-through", color: "gray" }}>
            ₹{product.old_price}
          </span>
        </p>
        <p>Category: {product.category}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductPage;
