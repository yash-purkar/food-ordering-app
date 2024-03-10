import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { CartPage } from "./pages/cart/CartPage";
import { MenuPage } from "./pages/menu/MenuPage";
import { HomePage } from "./pages/home/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menus" element={<MenuPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}

export default App;
