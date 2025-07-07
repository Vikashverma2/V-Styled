import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const [isReturningCustomer, setIsReturningCustomer] = useState(false);

  // Address object
  const [addressInfo, setAddressInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zip: "",
    email: "",
    mobile: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [orderComplete, setOrderComplete] = useState(false);

  const handleInputChange = (e) => {
    setAddressInfo({ ...addressInfo, [e.target.name]: e.target.value });
  };

  const handlePayment = () => {
    if (!isReturningCustomer) {
      // Check if any field is empty
      const hasEmpty = Object.values(addressInfo).some((value) => value.trim() === "");
      if (hasEmpty) {
        alert("Please fill all address fields!");
        return;
      }
    }
    setIsReturningCustomer(true); // Save address before order completes
    setOrderComplete(true);
  };

  // Calculate total
  const subtotal = cartItems.reduce((sum, item) => sum + item.new_price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const discount = subtotal * 0.1;
  const shipping = 0;
  const total = subtotal + tax - discount + shipping;

  if (cartItems.length === 0) {
    return <div className="empty-checkout">Your cart is empty! 🛒</div>;
  }

  return (
    <div className="checkout-wrapper">
      {!orderComplete ? (
        <>
          <div className="checkout-left">
            <div className="checkout-box">
              <h2>Review Items</h2>
              {cartItems.map((item) => (
                <div className="product-details" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>Color: {item.color || "Default"}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p className="price">₹{item.new_price * item.quantity}</p>
                  </div>
                </div>
              ))}

              <label className="return-customer">
                <input
                  type="checkbox"
                  checked={isReturningCustomer}
                  onChange={() => setIsReturningCustomer(!isReturningCustomer)}
                />
                Returning Customer?
              </label>
            </div>

            <div className="checkout-box">
              <h2>Delivery Information</h2>
              {isReturningCustomer ? (
                <div className="saved-address">
                  <p>
                    <strong>
                      {addressInfo.firstName} {addressInfo.lastName}
                    </strong>
                  </p>
                  <p>
                    {addressInfo.address} {addressInfo.city}, {addressInfo.state}, {addressInfo.zip}
                  </p>
                  <p>{addressInfo.mobile}</p>
                  <p>{addressInfo.email}</p>
                  <button
                    className="edit-btn"
                    onClick={() => setIsReturningCustomer(false)}
                  >
                    Edit
                  </button>
                </div>
              ) : (
                <form className="address-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="input-row">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name *"
                      value={addressInfo.firstName}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name *"
                      value={addressInfo.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <input
                    type="text"
                    name="address"
                    placeholder="Address *"
                    value={addressInfo.address}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="input-row">
                    <input
                      type="text"
                      name="city"
                      placeholder="City *"
                      value={addressInfo.city}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="text"
                      name="state"
                      placeholder="State *"
                      value={addressInfo.state}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="text"
                      name="zip"
                      placeholder="Zip Code *"
                      value={addressInfo.zip}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={addressInfo.email}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="mobile"
                    placeholder="Mobile *"
                    value={addressInfo.mobile}
                    onChange={handleInputChange}
                    required
                  />
                </form>
              )}
            </div>
          </div>

          <div className="checkout-right">
            <div className="checkout-box">
              <h2>Order Summary</h2>
              <div className="summary-item"><span>Subtotal</span><span>₹{subtotal.toFixed(2)}</span></div>
              <div className="summary-item"><span>Tax (10%)</span><span>₹{tax.toFixed(2)}</span></div>
              <div className="summary-item"><span>Discount</span><span>−₹{discount.toFixed(2)}</span></div>
              <div className="summary-item"><span>Shipping</span><span>₹{shipping.toFixed(2)}</span></div>
              <div className="summary-total"><strong>Total</strong><strong>₹{total.toFixed(2)}</strong></div>

              <h2>Payment Details</h2>
              <div className="payment-options">
                <label>
                  <input type="radio" value="online" checked={paymentMethod === "online"} onChange={() => setPaymentMethod("online")} />
                  UPI
                </label>
                <label>
                  <input type="radio" value="card" checked={paymentMethod === "card"} onChange={() => setPaymentMethod("card")} />
                  Credit / Debit Card
                </label>
                <label>
                  <input type="radio" value="cod" checked={paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")} />
                  Cash on Delivery
                </label>
              </div>

              {paymentMethod === "card" && (
                <>
                  <input type="text" placeholder="Card Holder Name *" required />
                  <input type="text" placeholder="Card Number *" required />
                  <div className="input-row">
                    <input type="text" placeholder="Expiry MM/YY *" required />
                    <input type="text" placeholder="CVC *" required />
                  </div>
                </>
              )}

              <button className="pay-btn" onClick={handlePayment}>Pay ₹{total.toFixed(2)}</button>
            </div>
          </div>
        </>
      ) : (
        <div className="order-complete">
          <div className="success-card">
            <div className="checkmark">✔</div>
            <h3>Your order has been accepted</h3>
            <p>Transaction ID: {Math.floor(Math.random() * 1000000000)}</p>
            <button className="continue-btn" onClick={() => navigate("/")}>Continue Shopping</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
