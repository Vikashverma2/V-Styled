import React from 'react';
import './HomePage.css';
import trendingwomen from '../../assets/trending/trending-women.webp';
import trendingwomen1 from '../../assets/trending/trending-women1.webp';
import trendingwomen2 from '../../assets/trending/trending-women2.webp';
import trendingwomen3 from '../../assets/trending/trending-women3.webp';
import trendingmen from '../../assets/trending/trending-men.webp';
import trendingmen1 from '../../assets/trending/trending-men1.webp';
import trendingmen2 from '../../assets/trending/trending-men2.webp';
import trendingkid from '../../assets/trending/trending-kid.webp';
import trendingkid1 from '../../assets/trending/trending-kid1.webp';
import trendingkid2 from '../../assets/trending/trending-kid2.webp';
import { TbShoppingCartPlus } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
const trendingProducts = [
  {
    id: 1,
    name: 'Women Crop Denim Shrug',
    category: "womens",
    image: trendingwomen, 
    new_price: 499,
    old_price: 1199,
  },
  {
    id: 2,
    name: 'Men Casual Denim Jacket',
    category: "mens",
    image: trendingmen, 
    new_price: 799,
    old_price: 1499,
  },

  {
    id: 3,
    name: 'Roadster Denim Jacket',
    category: "women",
    image: trendingwomen1, 
    new_price: 599,
    old_price: 1299,
  },
  {
    id: 4,
    name: 'Kids Fashion Outfit',
    category: "kids",
    image: trendingkid,
    new_price: 399,
    old_price: 999,
  },

  {
    id: 5,
    name: 'Women Stylish Cloths',
    category: "women",
    image: trendingwomen2, 
    new_price: 799,
    old_price: 1299,
  },
  {
    id: 6,
    name: 'Roadster Men ',
    category: "mens",
    image: trendingmen1, 
    new_price: 799,
    old_price: 1299,
  },
  {
    id: 7,
    name: 'Girl stylish cloths',
    category: "kids",
    image: trendingkid1, 
    new_price: 599,
    old_price: 1299,
  },
  {
    id: 8,
    name: 'Boy Fashion Outfit',
    category: "women",
    image: trendingkid2, 
    new_price: 799,
    old_price: 1299,
  },

  
  {
    id: 9,
    name: 'Stylish Women Top',
    category: "women",
    image: trendingwomen3, 
    new_price: 799,
    old_price: 1299,
  },
  {
    id: 10,
    name: 'Layring full Shirt',
    category: "women",
    image: trendingmen2, 
    new_price: 799,
    old_price: 1299,
  },
  

];

const Trending = () => {
   const navigate = useNavigate();
  const handleProductClick = (productId) => {
   
    navigate(`/product/${productId}`);
    console.log(`Product clicked: ${productId}`);
  };

  
  return (
    <div className="trending-products-container">
      {trendingProducts.map((product) => ( 
        <div
        onClick={() => handleProductClick(product.id)}
        className="trending-product" key={product.id}>
          <img src={product.image} alt={product.name} />
          <div className='trending-product-info'>
          <h3>{product.name}</h3>
          <p>
            ₹{product.new_price} <span style={{ textDecoration: "line-through", color: "gray" }}>₹{product.old_price}</span>
          </p>
          <button>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trending; 
