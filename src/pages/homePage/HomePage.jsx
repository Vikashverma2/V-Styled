import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import bgg from "../../assets/bgg.jpg";
import app from "../../assets/app.png";
import appstore from "../../assets/app-store.svg";
import playstore from "../../assets/play-store.svg";

import Trending from "./Trending";
import menbanner from "../../assets/men-banner.jpg";
import womenbanner from "../../assets/women-banner.webp";
import kidbanner from "../../assets/kid-banner.webp";
// import offerbanner from "../../assets/offer-banner.webp";

import SellingProduct from "./SellingProduct";
import { Footer } from "./Footer";
import NewArrivals from "./NewArrivals";

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
          <Link to="/mens"><button>Shop Now</button></Link>
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
         <Link to="/womens"> <button>Buy Now</button></Link>
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
  <Link to="/mens" className="men-banner">
    <img src={menbanner} alt="Men Banner" />
  </Link>
  <div className="right-banners">
    <Link to="/kids" className="banner">
      <img src={kidbanner} alt="Kid Banner" />
    </Link>
    <Link to="/womens" className="banner">
      <img src={womenbanner} alt="Women Banner" />
    </Link>
  </div>
</div>



    {/* Selling Products */}

      <div className="selling-products">
        <h1 className="common-h1">
          New Arrivals <hr className="common-hr" />
        </h1>
        <NewArrivals />
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

      {/* Footer Link */}

      <Footer />
    </div>
  );
};
export default HomePage;
