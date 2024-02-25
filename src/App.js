import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";

export default function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComp />
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/simple-react-router" element={<ProductList />} />
          <Route path="*" element={<ProductList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
