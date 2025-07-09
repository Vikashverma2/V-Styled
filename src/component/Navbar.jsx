import React, { useContext, useState } from "react";
import "../App.css";
import logov from "/src/assets/logoV.png";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { GoPerson } from "react-icons/go";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { WishlistContext } from "../Context/WishlistContext";
import { AuthContext } from "../Context/AuthContext";
import { CartContext } from "../Context/CartContext";

export const Navbar = () => {
  const location = useLocation();
  const { wishlist } = useContext(WishlistContext);
  const { isLoggedIn, user } = useContext(AuthContext);
  const { cartItems, isLoading } = useContext(CartContext);

  const [menuOpen, setMenuOpen] = useState(false);

  if (isLoading) {
    return null; // or show loader
  }

  const isActive = (path) => location.pathname.includes(path);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="navbar">
      <nav>
        <Link to="/">
          <div>
            <img src={logov} alt="V-Style" />
          </div>
        </Link>

        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          <li>
            <Link to="/mens" onClick={() => setMenuOpen(false)}>
              Men {isActive("/mens") && <hr />}
            </Link>
          </li>
          <li>
            <Link to="/womens" onClick={() => setMenuOpen(false)}>
              Women {isActive("/womens") && <hr />}
            </Link>
          </li>
          <li>
            <Link to="/kids" onClick={() => setMenuOpen(false)}>
              Kids {isActive("/kids") && <hr />}
            </Link>
          </li>
          <li>
            <Link to="/accessories" onClick={() => setMenuOpen(false)}>
              Accessories {isActive("/accessories") && <hr />}
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About {isActive("/about") && <hr />}
            </Link>
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

          <Link to="/favorite" className="nav-icon-cart">
            <IoIosHeartEmpty className="icon" />
            {wishlist.length > 0 && (
              <span className="wishlist-count">{wishlist.length}</span>
            )}
          </Link>

          <Link to="/cart" className="nav-icon-cart">
            <PiShoppingCartSimpleLight className="icon" />
            {totalQuantity > 0 && (
              <span className="nav-cart-count">{totalQuantity}</span>
            )}
          </Link>
        </div>

        {/* Hamburger button */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <hr className="nav-hr" />
    </div>
  );
};

export default Navbar;
