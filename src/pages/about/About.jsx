import React from "react";
import "./About.css";
import fashionImage from "../../assets/fashionImage.webp"; // Adjust the path as necessary
import { Footer } from "../homePage/Footer";
import { ShoppingBag, Users, Sparkles, Mail } from "lucide-react";

const About = () => {
  return (
    <>
      <div className="about-page">
        {/* Hero Section */}
        <div className="about-hero">
          <div className="about-img">
            <img src={fashionImage} alt="fashion" />
          </div>
          <div className="about-content">
            <h2>About Our Online Shop</h2>
            <p>
              At <strong>V-Styled</strong>, fashion isn’t just clothing — it’s
              your personality. Our shop is dedicated to bringing you handpicked
              premium styles for men, women, and kids. Whether you need elegance
              or casual comfort, we’ve got you covered with global trends and
              affordable prices.
            </p>
            <p>
              Our mission is to help you express your confidence and vibe with
              style. 🧥👗🕶️
            </p>
          </div>
        </div>

        {/* Info Icons */}
        <div className="about-icons">
          <div className="info-box">
            <ShoppingBag className="icon" />
            <h4>Wide Collection</h4>
            <p>From casual to formal, we cover every fashion need.</p>
          </div>
          <div className="info-box">
            <Sparkles className="icon" />
            <h4>Trendy Picks</h4>
            <p>We stay updated with the latest fashion buzz.</p>
          </div>
          <div className="info-box">
            <Users className="icon" />
            <h4>Customer-Centric</h4>
            <p>We care about your experience. Always!</p>
          </div>
        </div>

       
      </div>

      <Footer />
    </>
  );
};

export default About;
