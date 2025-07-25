import React, { useContext } from "react";
import { WishlistContext } from "../../Context/WishlistContext";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router-dom";
import "./Favorite.css";

const FavoritePage = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { isLoggedIn } = useContext(AuthContext);

  // If user is not logged in
  if (!isLoggedIn) {
    return (
      <div className="wishlist-empty">
        Please log in to view your wishlist 🔒
      </div>
    );
  }

  // If logged in but wishlist is empty
  if (wishlist.length === 0) {
    return <div className="wishlist-empty">Your Wishlist is Empty 💔</div>;
  }

  // If logged in and has items in wishlist
  return (
    <div className="wishlist-page">
      <h2>My Wishlist 💖</h2>
      <div className="wishlist-container">
        {wishlist.map((item) => (
          <div key={item.id} className="wishlist-card">
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>₹{item.new_price}</p>
            <div className="wishlist-actions">
              <Link
                to={`/pageproduct/${item.id}/${item.name}`}
                className="view-btn"
              >
                View
              </Link>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="remove-btn"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritePage;
