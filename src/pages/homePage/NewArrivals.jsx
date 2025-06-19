import React from "react";
import "./HomePage.css";
import men1 from "../../assets/new/men-tshirt-1.webp";
import men2 from "../../assets/new/men-tshirt-2.webp";
import men3 from "../../assets/new/shirt1.webp";
import men4 from "../../assets/new/shirt3.webp";
import menwatch1 from "../../assets/new/men-watch1.webp";
import menwatch2 from "../../assets/new/men-watch2.webp";
import menjeans1 from "../../assets/new/jeans4.webp";
import menjeans2 from "../../assets/new/jeans5.webp";
import kid1 from "../../assets/new/kid-girl8.webp";
import kid2 from "../../assets/new/kid-girl11.webp";
import kid3 from "../../assets/new/kid-girl12.webp";
import women1 from "../../assets/new/women3.webp";
import women2 from "../../assets/new/women11.webp";
import womensaree1 from "../../assets/new/women-saree6.webp";
import womensaree2 from "../../assets/new/women-saree12.webp";

const newArrivals = [
  {
    id: 1,
    image: men1,
    name: "Men Tshirts",
    description: "Description for New Arrival 1",
    price: 299,
  },
  {
    id: 2,
    image: women1,
    name: "Frocks",
    description: "Description for New Arrival 2",
    price: 399,
  },
  {
    id: 3,
    image: menwatch2,
    name: "Kiton Watch",
    description: "Description for New Arrival 3",
    price: 499,
  },
  {
    id: 4,
    image: menjeans2,
    name: "Men Jeans",
    description: "Description for New Arrival 4",
    price: 599,
  },
  {
    id: 5,
    image: womensaree1,
    name: "Sharee ",
    description: "Orange Sharee in Cotton",
    price: 599,
  },
  {
    id: 6,
    image: kid1,
    name: "New Arrival 5",
    description: "Description for New Arrival 5",
    price: 699,
  },
  {
    id: 7,
    image: men2,
    name: "New Arrival 5",
    description: "Description for New Arrival 5",
    price: 699,
  },
  {
    id: 8,
    image: womensaree2,
    name: "New Arrival 5",
    description: "Description for New Arrival 5",
    price: 699,
  },
  {
    id: 9,
    image: kid2,
    name: "New Arrival 5",
    description: "Description for New Arrival 5",
    price: 699,
  },
  {
    id: 10,
    image: kid3,
    name: "New Arrival 5",
    description: "Description for New Arrival 5",
    price: 699,
  },
];

export const NewArrivals = () => {
  return (
    <div className="new-arrivals-container">
      {newArrivals.map((item) => (
        <div key={item.id} className="new-arrival-card">
          <img src={item.image} alt={item.name} className="new-arrival-image" />
          <div className="new-arrival-details">
            <h3 className="new-arrival-name">{item.name}</h3>
          <p className="new-arrival-description">{item.description}</p>
          <p className="new-arrival-price">₹{item.price}</p>
          </div>
          
        </div>
      ))}
    </div>
  );
};
