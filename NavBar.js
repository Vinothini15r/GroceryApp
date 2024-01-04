import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faShoppingBag,
  faShoppingCart,
  faCreditCard,
  faSignInAlt,
  faFolderOpen,
} from '@fortawesome/free-solid-svg-icons';

// NavBar component
function NavBar() {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav-list">
          <li className="nav-item">
            <FontAwesomeIcon icon={faHome} />
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <FontAwesomeIcon icon={faShoppingBag} />
            <a href="/products">Products</a>
          </li>
          <li className="nav-item">
            <FontAwesomeIcon icon={faShoppingCart} />
            <a href="/cart">Cart</a>
          </li>
          <li className="nav-item">
            <FontAwesomeIcon icon={faFolderOpen} />
            <a href="/categories">Categories</a>
          </li>
          <li className="nav-item">
            <FontAwesomeIcon icon={faCreditCard} />
            <a href="/checkout">Checkout</a>
          </li>
          <li className="nav-item">
            <FontAwesomeIcon icon={faSignInAlt} />
            <a href="/login">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
