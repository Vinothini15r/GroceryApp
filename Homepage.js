// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header>
        <h1 className="centered-text">Welcome to Our Grocery Shop</h1>
      </header>
      <div className="img">
        <img src="img-bg.jpg" alt="Grocery Store" />
      </div>
      <main>
        <p>This is the main content of our grocery shop's homepage.</p>
      </main>

      {/* Square containers */}
      <div className="square-container">
        <Link to="/products" className="square">
          <img src="g.jpg" alt="products" />
          <b>Find the Happiness by</b>
          <b> Shopping</b>
        </Link>
        <Link to="/products" className="square">
          <img src="gro.jpg" alt="products" />
          <b>Always Fresh</b>
        </Link>
        <Link to="/products" className="square">
          <img src="delivery.jpg" alt="products" />
          <b>Fast and Home Delivery</b>
        </Link>
        <Link to="/products" className="square">
          <img src="shop.jpg" alt="products" />
          <b>Easy to shop</b>
        </Link>
      </div>

      {/* Footer */}
      <footer className="fixed-footer">
        <div className="footer-content">
          <ul className="footer-links">
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/admin">Admin</Link></li>
            <li><Link to="/feedback">Feedback</Link></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
