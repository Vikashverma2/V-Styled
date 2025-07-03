import React from "react";
import mastercard from "../../assets/mastercard.svg";
import visa from "../../assets/visa.svg";

import paypal from "../../assets/paypal.svg";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div>
      <hr className="footer-hr" />

      <div className="footer">
        <div className="about-footer">
          <h2>About</h2>
          <ul>
            <li>
              <a href="#">Support Center</a>
            </li>
            <li>
              <a href="#">Customer Support</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>
        <div className="about-footer">
          <h2>Contact</h2>

          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">yourexample@email.com</a>
            </li>
            <li>
              <a href="#">example@email.com</a>
            </li>
            <li>
              <a href="#">Call us: +91 73239272**</a>
            </li>
          </ul>
        </div>
        <div className="about-footer">
          <h2>Customer Care</h2>
          <ul>
            <li>
              <a href="#">FAQ & Helps</a>
            </li>
            <li>
              <a href="#">Shipping & Delivery</a>
            </li>
            <li>
              <a href="#">Return & Exchanges</a>
            </li>
            <li>
              <a href="#">Terms & conditions</a>
            </li>
          </ul>
        </div>
        <div className="about-footer">
          <h2>Our Information</h2>
          <ul>
            <li>
              <a href="#">Privacy policy update</a>
            </li>
            <li>
              <a href="#">Return Policy</a>
            </li>
            <li>
              <a href="#">Shipping Policy</a>
            </li>
            <li>
              <a href="#">Refund Policy</a>
            </li>
            <li>
              <a href="#">Site Map</a>
            </li>
          </ul>
        </div>
        <div className="about-footer">
          <h2>Top Categories</h2>
          <ul>
            <li>
              <a href="#">Men's Wear</a>
            </li>
            <li>
              <a href="#">Women's Wear</a>
            </li>
            <li>
              <a href="#">Kid's Wear</a>
            </li>
            <li>
              <a href="#">Accessories</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="footer-hr" />
      <div className="footer-link">
        <div className="copyright">
          <p>
            Copyright © 2025
            <a href="https://github.com/Vikashverma2/"> Vikash Verma </a> All
            rights reserved
          </p>
        </div>
        <div className="footer-link-icon">
          <p>
            <FaInstagram />
          </p>
          <p>
            <FaFacebook />
          </p>
          <p>
            <FaYoutube />
          </p>
        </div>
        <div className="footer-link-payment">
          <img src={mastercard} alt="" />
          <img src={paypal} alt="" />

          <img src={visa} alt="" />
        </div>
      </div>
    </div>
  );
};
