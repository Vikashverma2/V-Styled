import React from "react";
import "./HomePage.css";
import bgg from "../../assets/bgg.jpg";
import app from "../../assets/app.png";
import appstore from "../../assets/app-store.svg";
import playstore from "../../assets/play-store.svg";
import mastercard from '../../assets/mastercard.svg';
import visa from '../../assets/visa.svg';
import ruppay from '../../assets/RuPay.svg';
import paypal from '../../assets/paypal.svg';

import Trending from "./Trending";
import menbanner from "../../assets/men-banner.webp";
import womenbanner from "../../assets/women-banner.webp";
import kidbanner from "../../assets/kid-banner.webp";
import offerbanner from "../../assets/offer-banner.webp";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa6";

import SellingProduct from "./SellingProduct";
import { Footer } from "./Footer";
import { NewArrivals } from "./NewArrivals";

export const HomePage = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Use <span> Fashion</span> <br /> Into Your All <br /> Collection
          </h1>
          <p>
            Shopping is bit of a relaxing hobby for me,
            <br />
            which is sometimes troubling.
          </p>
          <button>Shop Now</button>
        </div>

        <img src={bgg} alt="" />
      </div>

      {/* Trending */}

      <div className="trending">
        <h1 className="common-h1">
          Trending Products <hr className="common-hr" />
        </h1>
        <Trending />
      </div>

      {/* Offer Banner */}

      <div className="offer-banner">
        <div className="offer-banner-content">
          <h3>Winter Clearance Sale</h3>
          <h1>GET 50% OFF</h1>
          <p>Use this code to receive 50% discount off all products</p>
          <button>Buy Now</button>
        </div>
      </div>

      {/* Selling Products */}

      <div className="selling-products">
        <h1 className="common-h1">
          On Selling Products <hr className="common-hr" />
        </h1>
        <SellingProduct />
      </div>

      {/* Cloth Banner */}

      <div className="cloth-banner">
        <div className="men-banner">
          <img src={menbanner} alt="Men Banner" />
        </div>
        <div className="women-kid-banner">
          <img className="women-banner" src={womenbanner} alt="Women Banner" />
          <img className="kid-banner" src={kidbanner} alt="Kid Banner" />
        </div>
      </div>


      <div className="selling-products">
        <h1 className="common-h1">
        New Arrivals <hr className="common-hr" />
        </h1>
        <NewArrivals/>
      </div>
      

      {/* Phone Application */}

      <div className="phone-app">
        <div className="phone-app-card">
          <div className="phone-des">
            <h3>The V- Styled App</h3>
            <h1>
              Share Your <span>Ideas</span> & Shop Endless{" "}
              <span>Inspiration</span>
            </h1>
            <div className="app-link">
              <img src={appstore} alt="" />
              <img src={playstore} alt="" />
            </div>
          </div>
          <div className="phone-img">
            <img src={app} alt="" />
          </div>
        </div>
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
  );
};
export default HomePage;
