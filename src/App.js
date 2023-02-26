import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Loader } from "./components";
import { auth } from "./firebase/config";
import {
  Home,
  Orders,
  Cart,
  Category,
  Product,
  AdminLogin,
  Dashboard,
  Success,
} from "./pages";
import { Login, Reset, Register } from "./pages/auth";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
  }, [user]);

  if (loading) return <Loader />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/orders"
          element={user ? <Orders /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
        <Route path="/reset" element={<Reset />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
