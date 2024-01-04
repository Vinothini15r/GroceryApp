import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import ResetPasswordPage from './ResetPasswordPage'; // Import your ResetPasswordPage component
import Login from './Login';
import Signup from './Signup';
import HomePage from './Homepage';
import SearchBar from './Searchbar';
import GroceryList from './GroceryList';
import PrivacyPolicy from './PrivacyPolicy';

import CategoryPage from './CategoryPage';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/products" element={<GroceryList />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} /> {/* Include the ResetPasswordPage component route */}
        {/* <Route path="/add to cart" element={<Cart />} /> */}
        <Route path="/Categories" element={<CategoryPage />} />

      </Routes>
    </>
  );
}

export default App;