import React, { useContext } from "react";
import "../App.css";
import logov from "/src/assets/logoV.png";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { GoPerson } from "react-icons/go";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { WishlistContext } from "../Context/WishlistContext";
import { AuthContext } from "../Context/AuthContext";
import { CartContext } from "../Context/CartContext"; // ✅ import

export const Navbar = () => {
  const location = useLocation();
  const { wishlist } = useContext(WishlistContext);
  const { isLoggedIn, user } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext); // ✅ get cart items

  const isActive = (path) => location.pathname.includes(path);

  return (
    <div className="navbar">
      <nav>
        <Link to="/">
          <div>
            <img src={logov} alt="V-Style" />
          </div>
        </Link>

        <ul>
          <li>
            <Link to="/mens">Men {isActive("/mens") && <hr />}</Link>
          </li>
          <li>
            <Link to="/womens">Women {isActive("/womens") && <hr />}</Link>
          </li>
          <li>
            <Link to="/kids">Kids {isActive("/kids") && <hr />}</Link>
          </li>
          <li>
            <Link to="/accessories">Accessories {isActive("/accessories") && <hr />}</Link>
          </li>
          <li>
            <Link to="/about">About {isActive("/about") && <hr />}</Link>
          </li>
        </ul>

        <div className="nav-icons">
          <div className="nav-icon-person">
            {isLoggedIn ? (
              <Link to="/user-profile" style={{ textDecoration: "none" }}>
                <p className="user-name">Hi, {user?.name?.split(" ")[0]}</p>
              </Link>
            ) : (
              <Link to="/auth">
                <GoPerson />
              </Link>
            )}
          </div>

          <div className="nav-icon-fav">
            <Link to="/favorite" className="wishlist-link">
              <IoIosHeartEmpty size={28} />
              {wishlist.length > 0 && (
                <span className="wishlist-count">{wishlist.length}</span>
              )}
            </Link>
          </div>

          <div className="nav-icon-card">
            <div className="nav-icon-cart">
              <Link to="/cart">
                <PiShoppingCartSimpleLight />
              </Link>
            </div>
            {cartItems.length > 0 && (
              <div className="nav-cart-count">{cartItems.length}</div>
            )}
          </div>
        </div>
      </nav>
      <hr className="nav-hr" />
    </div>
  );
};

export default Navbar;
