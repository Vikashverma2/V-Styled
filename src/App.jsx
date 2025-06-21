import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import HomePage from "./pages/homePage/HomePage";


import About from "./pages/about/About";
import Cart from "./pages/cart/Cart";
import Favorite from "./pages/favorite/Favorite";
import LoginPage from "./pages/loginPage/LoginPage";

import { ShopCategory } from "./pages/shopCategory/ShopCategory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mens" element={<ShopCategory catogry="mens" />} />
          <Route path="/womens" element={<ShopCategory catogry="womens" />} />
          <Route path="/kids" element={<ShopCategory catogry="kids" />} />
          <Route path="/accessories" element={<ShopCategory catogry="accessories" />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/login" element={<LoginPage />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
