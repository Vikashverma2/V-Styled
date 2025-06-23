
import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../../Context/ShopContext'; 
import './ShopCategory.css';
import { Footer } from '../homePage/Footer';

import mastercard from '../../assets/mastercard.svg';
import visa from '../../assets/visa.svg';
import paypal from '../../assets/paypal.svg';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa6';

export const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);
  const [visibleCount, setVisibleCount] = useState(15); 
  const [sortOption, setSortOption] = useState('default');
  const [sortedProducts, setSortedProducts] = useState([]);

  const filteredProducts = all_products.filter(
    (product) => product.category === props.catogry
  );

  // Sorting Logic
  useEffect(() => {
    let sorted = [...filteredProducts];
    if (sortOption === 'price-low-to-high') {
      sorted.sort((a, b) => a.new_price - b.new_price);
    } else if (sortOption === 'price-high-to-low') {
      sorted.sort((a, b) => b.new_price - a.new_price);
    } else if (sortOption === 'newest') {
      sorted.sort((a, b) => b.id - a.id); // assuming newer items have higher IDs
    }
    setSortedProducts(sorted);
  }, [sortOption, all_products, props.catogry]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  const visibleProducts = sortedProducts.slice(0, visibleCount);

  return (
    <div className='shopcategory'>
      <img src={props.banner} alt={props.catogry} />

      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing {Math.min(visibleCount, filteredProducts.length)}</span> out of {filteredProducts.length} products
        </p>
        <div className='shopcategory-sort'>
          <label htmlFor="sort">Sort by</label>
          <select id="sort" value={sortOption} onChange={handleSortChange}>
            <option value="default">Default</option>
            <option value="price-low-to-high">Price: Low to High</option>
            <option value="price-high-to-low">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>

      <div className='shopcategory-products'>
        {visibleProducts.map((product) => (
          <div key={product.id} className='product-card'>
            <img src={product.image} alt={product.name} />
            <div className='product-details'>
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <p className='product-price'>
                ₹{product.new_price}
                <span style={{ textDecoration: "line-through", color: "gray" }}>
                  ₹{product.old_price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>

     
      {visibleCount < filteredProducts.length && (
        <div className="load-more-container">
          <button className="load-more-btn" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}

      <hr className="footer-hr" />
      <Footer />
      <hr className="footer-hr" />

      <div className="footer-link">
        <div className="copyright">
          <p>
            Copyright © 2025 <a href="https://github.com/Vikashverma2/">Vikash Verma</a> All rights reserved
          </p>
        </div>
        <div className="footer-link-icon">
          <p><FaInstagram /></p>
          <p><FaFacebook /></p>
          <p><FaYoutube /></p>
        </div>
        <div className="footer-link-payment">
          <img src={mastercard} alt="mastercard" />
          <img src={paypal} alt="paypal" />
          <img src={visa} alt="visa" />
        </div>
      </div>
    </div>
  );
};
