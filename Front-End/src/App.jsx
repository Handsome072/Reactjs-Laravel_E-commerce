import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ProductItem from './components/ProductItem';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Start from './pages/Start';

function App() {
  const [cart, setCart] = useState([]);
  const [activeLink, setActiveLink] = useState('/home');

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<Home cart={cart} activeLink={activeLink} handleLinkClick={handleLinkClick} />} />
        <Route path="/about" element={<About cart={cart} activeLink={activeLink} handleLinkClick={handleLinkClick} />} />
        <Route path="/products" element={<Products cart={cart} activeLink={activeLink} handleLinkClick={handleLinkClick} setCart={setCart} />} />
        <Route path="/product/:productId" element={<ProductItem cart={cart} setCart={setCart} activeLink={activeLink} handleLinkClick={handleLinkClick} />} />
        <Route path="/contact" element={<Contact cart={cart} activeLink={activeLink} handleLinkClick={handleLinkClick} />} />
        <Route path="/cart" element={<Cart cart={cart} activeLink={activeLink} handleLinkClick={handleLinkClick} setCart={setCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
