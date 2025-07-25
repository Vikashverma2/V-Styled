import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop";
import Navbar from "./component/Navbar";
import HomePage from "./pages/homePage/HomePage";

import men_banner from "./assets/mens-banner.png";
import women_banner from "./assets/womens-banner.png";
import kid_banner from "./assets/kids-banner.png";
import accessories_banner from "./assets/Accessories-banner.png";

import About from "./pages/about/About";
import Cart from "./pages/cart/Cart";
import Favorite from "./pages/favorite/Favorite";
import AuthPage from "./pages/authPage/AuthPage";

import { ShopCategory } from "./pages/shopCategory/ShopCategory";
import UserProfile from "./pages/profile/UserProfile";
import ProductPage from "./component/HomePageProduct";
import CategoryProducts from "./component/CategoryProducts";
import CheckoutPage from "./pages/cart/CheckoutPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mens" element={<ShopCategory banner={men_banner} catogry="mens" />} />
        <Route path="/womens" element={<ShopCategory banner={women_banner} catogry="womens" />} />
        <Route path="/kids" element={<ShopCategory banner={kid_banner} catogry="kids" />} />
        <Route path="/accessories" element={<ShopCategory banner={accessories_banner} catogry="accessories" />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/pageproduct/:productId/:name" element={<CategoryProducts />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
