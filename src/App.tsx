import React, { useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './scss/App.scss';
import HomePage from './components/pages/home';
import AboutUsPage from './components/pages/about_us';
import BrowsePage from './components/pages/browse';
import ContactUsPage from './components/pages/contact_us';
import CartPage from './components/pages/cart';
import { CartBasketContext } from './components/contexts';
import BaseHeader from './components/pages/structure/base_header';

export type Page = 'home' | 'about' | 'browse' | 'contact' | 'cart';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [cartBasket, updateCartBasket] = useState<any[]>([]);

  const renderPage = (): JSX.Element | null => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutUsPage />;
      case 'browse':
        return <BrowsePage />;
      case 'contact':
        return <ContactUsPage />;
      case 'cart':
        return <CartPage />;
      default:
        return null;
    }
  };

  return (
    <CartBasketContext.Provider value={{ cartBasket, updateCartBasket }}>
      <div>
        <BaseHeader currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {renderPage()}
      </div>
    </CartBasketContext.Provider>
  );
};

export default App;
