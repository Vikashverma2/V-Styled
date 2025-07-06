import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./Cart.css";

const CartPage = () => {
  const { cartItems, removeFromCart, addToCart, decreaseQuantity } = useContext(CartContext);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.new_price * item.quantity,
    0
  );

  const delivery = 3;
  const taxes = 2;
  const discount = 38;
  const service = 1;
  const total = subtotal + delivery + taxes + service - discount;

  return (
    <div className="cart-container">
      <div className="cart-items-section">
        <h2>Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty 🛒</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>Category: <span className="light">{item.category || "General"}</span></p>
                <p>Color: <span className="light">{item.color || "Default"}</span></p>
              </div>
              <p className="item-price">₹{(item.new_price * item.quantity).toFixed(2)}</p>
              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(item.id)}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => addToCart(item)}>+</button>
              </div>
              <button
                className="delete-btn"
                onClick={() => removeFromCart(item.id)}
              >
                <RiDeleteBin6Line />
              </button>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-line">
            <span>Subtotal Product</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-line">
            <span>Price Delivery</span>
            <span>₹{delivery.toFixed(2)}</span>
          </div>
          <div className="summary-line">
            <span>Taxes</span>
            <span>₹{taxes.toFixed(2)}</span>
          </div>
          <div className="summary-line">
            <span>Total Discount</span>
            <span>−₹{discount.toFixed(2)}</span>
          </div>
          <div className="summary-line">
            <span>Service Charge</span>
            <span>₹{service.toFixed(2)}</span>
          </div>
          <hr />
          <div className="summary-line total">
            <strong>Total</strong>
            <strong>₹{total.toFixed(2)}</strong>
          </div>
          <button className="checkout-btn">Checkout →</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
