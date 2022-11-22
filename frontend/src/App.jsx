import React from "react";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";

function App() {
  const loggedIn = true;

  return (
    <>
      <Router>
        {loggedIn ? null : <Navbar />}
        {loggedIn ? null : <Announcement />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/login"
            element={loggedIn ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={loggedIn ? <Navigate to="/" /> : <Register />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
