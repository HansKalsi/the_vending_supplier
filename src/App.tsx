import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './scss/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/home';
import AboutUsPage from './components/pages/about_us';
import BrowsePage from './components/pages/browse';
import ContactUsPage from './components/pages/contact_us';
import CartPage from './components/pages/cart';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/shop" Component={BrowsePage} />
        <Route path="/cart" Component={CartPage} />
        <Route path="/about-us" Component={AboutUsPage} />
        <Route path="/contact-us" Component={ContactUsPage} />
      </Routes>
    </Router>
  );
};

export default App;
