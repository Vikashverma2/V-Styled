import React from "react";
import "../App.css";
import { useState } from "react";
import logo from "/src/assets/VV.png";
import bgg from "/src/assets/bgg.jpg";
import logov from "/src/assets/logoV.png";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { GoPerson } from "react-icons/go";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";

export const Navbar = () => {

const [menu, setMenu] = useState("men");


  return (
    <div className="navbar">
      <nav>
        <Link to="/"><div onClick={() => setMenu("img")}><img  src={logov} alt="V-Style" /></div>{menu=="img"?<></>:<></>}</Link>
        <ul>
          <li onClick={() => setMenu("men")}>
            <Link to="mens">Men {menu=="men"?<hr />:<></>}</Link>
          </li>
          <li onClick={() => setMenu("women")}>
           <Link to="womens">Women {menu=="women"?<hr />:<></>}</Link>
          </li>
          <li onClick={() => setMenu("kid")}>
            <Link to="kids">Kids {menu=="kid"?<hr />:<></>}</Link>
          </li>
          <li onClick={() => setMenu("accessories")}>
            <Link to="accessories">Accessories {menu=="accessories"?<hr />:<></>}</Link>
          </li>
          <li onClick={() => setMenu("about")}>
            <Link to="about">About {menu=="about"?<hr />:<></>}</Link>
          </li>
        </ul>
        <div className="nav-icons">
          <div className="nav-icon-person">
            <Link to="login"><GoPerson /></Link>
          </div> 
          <div className="nav-icon-fav">
            <Link to="favorite"><IoIosHeartEmpty /></Link>
          </div>
          <div className="nav-icon-card">
            <div className="nav-icon-cart">
              <Link to="cart"><PiShoppingCartSimpleLight /></Link>
            </div>
            <div className="nav-cart-count">0</div>
          </div>
        </div>
      </nav>
      <hr className="nav-hr" />
    </div>
  );
};
export default Navbar;
