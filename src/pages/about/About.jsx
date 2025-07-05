import React from "react";
import "./About.css";
import { Footer } from "../homePage/Footer";

const About = () => {
  return (
    <>
      <div className="about-page">
        <div className="about-container">
          <h1>Welcome to V-Styled</h1>
          <p className="tagline">Your ultimate fashion destination 💫</p>
          <p>
            At V-Styled, we believe that fashion is more than just clothing —
            it’s a bold expression of your personality. Our mission is to
            empower you to look confident and feel amazing every day.
          </p>
          <p>
            We curate a wide range of premium quality outfits and accessories
            for men, women, and kids. Whether it’s a casual day out, a formal
            event, or a party, V-Styled helps you stay ahead of trends and
            express your unique vibe.
          </p>
          <p>
            Our passionate team constantly scouts the latest global trends and
            handpicks the most stylish pieces at affordable prices. We’re here
            to make shopping fun, easy, and inspiring.
          </p>
          <p className="closing-message">
            Join the V-Styled family today and redefine your style journey! 💖
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
