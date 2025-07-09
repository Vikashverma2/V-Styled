import React, { useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import AllProducts from "../data/All_Product";
import { Footer } from "../pages/homePage/Footer";
import { WishlistContext } from "../Context/WishlistContext";
import { AuthContext } from "../Context/AuthContext";
import { CartContext } from "../Context/CartContext";

const CategoryProducts = () => {
  const { productId } = useParams();
  const [pincode, setPincode] = useState("");
  const [wishlistMessage, setWishlistMessage] = useState("");
  const [cartMessage, setCartMessage] = useState(""); // ✅ new message state
  const navigate = useNavigate();

  const { addToWishlist } = useContext(WishlistContext);
  const { isLoggedIn } = useContext(AuthContext);
  const { addToCart } = useContext(CartContext);

  const product = AllProducts.find((item) => item.id === parseInt(productId));

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  const handleAddToWishlist = (product) => {
    if (!isLoggedIn) {
      navigate("/auth");
    } else {
      addToWishlist(product);
      setWishlistMessage(`Added to wishlist!`);
      setTimeout(() => setWishlistMessage(""), 1500);
    }
  };

 const handleAddToCart = (product) => {
  if (!isLoggedIn) {
    navigate("/auth");
  } else {
    addToCart(product);
    setCartMessage(`Added to Cart!`);
    setTimeout(() => setCartMessage(""), 1500);
  }
};


  return (
    <>
      <div className="product-page">
        <div className="product-page-container">
          {/* Left side image */}
          <div className="product-image-section">
            <img className="product-page-image" src={product.image} alt={product.name} />
          </div>

          {/* Right side details */}
          <div className="product-details-section">
            <h1 className="product-name">{product.name}</h1>
            <p className="product-short-description">{product.shortDescription}</p>
            <div className="product-reviews">
              Reviews: {product.reviewCount} <span>⭐ {product.stars}</span>
            </div>
            <div className="product-price">
              <span className="new-price">₹{product.new_price}</span>
              <span className="old-price">₹{product.old_price}</span>
            </div>
            <p className="availability">In stock</p>

            <div className="product-size">
              <p>Size:</p>
              <div className="size-options">
                {product.size.map((sz, index) => (
                  <button key={index} className="size-box">{sz}</button>
                ))}
              </div>
            </div>

            {wishlistMessage && (
              <div className="wishlist-message">{wishlistMessage}</div>
            )}

            {cartMessage && (
              <div className="cart-message">{cartMessage}</div>
            )}

            <div className="add-buttons">
              <button onClick={() => handleAddToCart(product)} className="btn-cart">🛒 Add to Cart</button>
              <button onClick={() => handleAddToWishlist(product)} className="btn-wishlist">❤️ Add to Wishlist</button>
            </div>

            <div className="delivery-options">
              <h3>DELIVERY OPTIONS 🚚</h3>
              <div className="pincode-check">
                <input
                  type="text"
                  placeholder="Enter pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
                <button>Check</button>
              </div>
              <p className="pincode-note">
                Please enter PIN code to check delivery time & Pay on Delivery availability
              </p>
              <ul className="delivery-list">
                <li>100% Original Products</li>
                <li>Pay on delivery might be available</li>
                <li>Easy 7 days returns and exchanges</li>
              </ul>
            </div>

            <p className="product-full-description">{product.fullDescription}</p>

            <ul className="product-extra-details">
              <h2>Product Details</h2>
              {product.productDetails.split("|").map((detail, index) => (
                <li key={index}>{detail.trim()}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Related Products Section */}
        
        <div className="related-products-section">
          <h2>Related Products</h2>
          <div className="related-products-list">
            {AllProducts.filter((item) => item.id !== product.id)
              .slice(0, 5)
              .map((item) => (
                <Link
                  key={item.id}
                  to={`/pageproduct/${item.id}/${item.name}`}
                  className="related-product-card"
                >
                  <img src={item.image} alt={item.name} />
                  <p className="related-name">{item.name}</p>
                  <p className="related-price">₹{item.new_price}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CategoryProducts;
