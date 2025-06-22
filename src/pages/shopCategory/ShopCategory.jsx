import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext'; 
import './ShopCategory.css';
import { Footer } from '../homePage/Footer';

import mastercard from '../../assets/mastercard.svg';
import visa from '../../assets/visa.svg';
import ruppay from '../../assets/RuPay.svg';
import paypal from '../../assets/paypal.svg';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa6';



 export const ShopCategory = (props) => {

  const {all_products} = useContext(ShopContext);
  return (
    <div className='shopcategory'>
     
        <img src={props.banner} alt={props.catogry} />
    <div className='shopcategory-indexSort'>
      <p>
        <span>Showing 1-12</span> out of 20 products
      </p>
      <div className='shopcategory-sort'>
        <label htmlFor="sort">Sort by:</label>
        <select id="sort">
          <option value="default">Default</option>
          <option value="price-low-to-high">Price: Low to High</option>
          <option value="price-high-to-low">Price: High to Low</option>
          <option value="newest">Newest</option>
        </select>

      </div>

    </div>
      


      <div className='shopcategory-products'>
        {
        all_products.filter((product) => product.category === props.catogry).map((product) => (
          <div key={product.id} className='product-card'>
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
              <p>
                ₹{product.new_price}
                <span style={{ textDecoration: "line-through", color: "gray" }}>
                  ₹{product.old_price}
                </span>
              </p>
          </div>
        ))}
      </div>

      <hr className="footer-hr" />
          {/* Footer Link */}
           <Footer/>
     
           <hr className="footer-hr" />
     
            {/* Footer Link */}
     
           <div className="footer-link">
            <div className="copyright"> <p>Copyright © 2025 <a href="https://github.com/Vikashverma2/"> Vikash Verma </a>  All rights reserved</p></div>
             <div className="footer-link-icon">
               <p><FaInstagram /></p>
               <p><FaFacebook /></p>
               <p><FaYoutube /></p>
               
               </div>
               <div className="footer-link-payment">
                 <img src={mastercard} alt="" />
                 <img src={paypal} alt="" />
                 {/* <img src={ruppay} alt="" /> */}
                 <img src={visa} alt="" />
     
     
               </div>
     
           </div>
    </div>

    
  )
}

