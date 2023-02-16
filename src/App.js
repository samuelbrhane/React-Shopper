import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  Orders,
  Cart,
  Category,
  Product,
  AdminLogin,
  Dashboard,
} from "./pages";
import { Login, Reset, Register } from "./pages/auth";

const App = () => {
  const admin = JSON.parse(localStorage.getItem("shoppersUser"));
  console.log("admin", admin);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/category/:id" element={<Category />} />
        <Route
          path="/dashboard"
          element={
            admin?.email === process.env.REACT_APP_ADMIN_EMAIL ? (
              <Dashboard />
            ) : (
              <Navigate to="/admin/login" />
            )
          }
        />
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
