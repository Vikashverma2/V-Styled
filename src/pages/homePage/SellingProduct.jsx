import React from "react";
import "./HomePage.css";
import men from "../../assets/selling/shirt2.webp";
import men1 from "../../assets/selling/men1.webp";
import women from "../../assets/selling/women4.webp";
import women2 from "../../assets/selling/women-saree2.webp";
import waccessories from "../../assets/selling/women-accessories3.webp";
import women3 from "../../assets/selling/women-saree3.webp";
import shoes1 from "../../assets/selling/shoes1.webp";
import watch from "../../assets/selling/watch1.webp";
import kid from "../../assets/selling/kid-girl9.webp";

const sellingProduct = [
  {
    id: 1,
    image: men1,
    catagry: "men",
    name: "Men Round Neck Cotton Blend T-Shirt",
    des: "Comfortable men's cotton blend t-shirt with stylish printed round neck.",
    new_prize: 299,
    old_prize: 599,
  },
  {
    id: 2,
    image: women3,
    catagry: "women",
    name: "Embellished Bollywood Chiffon Saree ",
    des: "Classic design, modern twist, perfect for casual and relaxed wear.",
    new_prize: 799,
    old_prize: 1299,
  },
  {
    id: 3,
    image: shoes1,
    catagry: "men",
    name: "NIKE Shoes",
    des: "NIKE 2025 Black White sleek, modern, high-tech performance sneakers.",
    new_prize: 1200,
    old_prize: 2999,
  },
  {
    id: 4,
    image: watch,
    catagry: "men",
    name: "Analog Watch - For Men FCN059D",
    des: "Stylish analog watch for men, sleek design, timeless everyday accessory.",
    new_prize: 499,
    old_prize: 1100,
  },
  {
    id: 5,
    image: men,
    catagry: "men",
    name: "Regular Fit Flannel Shirt",
    des: " Fendi began life in 1925 as a fur and leather speciality store in Rome.",
    new_prize: 549,
    old_prize: 1300,
  },
  {
    id: 6,
    image: women,
    catagry: "women",
    name: "Gucci Carlton UK",
    des: "Knitted midi A-line dress, scoop neck, sleeveless, elegant silhouette.",
    new_prize: 399,
    old_prize: 699,
  },
  {
    id: 7,
    image: waccessories,
    catagry: "women",
    name: "Alloy Bracelet for Women",
    des: "Elegant alloy bracelet for women, stylish, lightweight, perfect daily accessory.",
    new_prize: 199,
    old_prize: 400,
  },
  {
    id: 8,
    image: kid,
    catagry: "kids",
    name: "Party Dress for Kid girl",
    des: "Adorable party dress for kid girl, vibrant, comfy, twirl-worthy fun.",
    new_prize: 799,
    old_prize: 1500,
  },
  {
    id: 9,
    image: women2,
    catagry: "men",
    name: "Banarasi Jacquard Saree",
    des: "Elegant woven Banarasi Jacquard saree, rich texture, traditional festive wear.",
    new_prize: 1600,
    old_prize: 4999,
  },
 
];

export const SellingProduct = () => {
  return (
    <div className="selling-product-container">
      {sellingProduct.map((product) => {
        return (
          <div className="selling-product-card" key={product.id}>
            <img src={product.image} alt="" />
            <div className="selling-product-contet">
              <h2>{product.name}</h2>
              <p>{product.des}</p>
              <h3>
                ₹{product.new_prize}
                <span style={{ textDecoration: "line-through", color: "gray" }}>
                  ₹{product.old_prize}
                </span>
              </h3>
            </div>
          </div>
        );
      })}
    </div>
      
  );
};
export default SellingProduct;
