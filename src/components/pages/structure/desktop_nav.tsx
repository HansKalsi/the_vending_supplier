import React, { useContext, useEffect, useState } from 'react';
import { CurrentPageContext } from '../../contexts';

const DesktopNav: React.FC = () => {
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext);
  const [M, setM] = useState((window as any).M);

  useEffect(() => {
    // Initialize the tabs
    const tabsElement = document.querySelector('.tabs');
    M.Tabs.init(tabsElement);

    // Clean up the tabs instance when the component is unmounted
    return () => {
      const instance = M.Tabs.getInstance(tabsElement);
      if (instance) {
        instance.destroy();
      }
    };
  }, []);

  return (
    <ul className="tabs tabs-fixed-width">
      <li className="tab">
        <a
          onClick={() => {
            setCurrentPage('home');
          }}
          className={currentPage === '' ? 'active' : ''}
        >
          Home
        </a>
      </li>
      <li className="tab">
        <a
          onClick={() => {
            setCurrentPage('about');
          }}
          className={currentPage === 'about' ? 'active' : ''}
        >
          About Us
        </a>
      </li>
      <li className="tab">
        <a
          onClick={() => {
            setCurrentPage('contact');
          }}
          className={currentPage === 'contact' ? 'active' : ''}
        >
          Contact Us
        </a>
      </li>
      <li className="tab">
        <a
          onClick={() => {
            setCurrentPage('browse');
          }}
          className={currentPage === 'shop' ? 'active' : ''}
        >
          Shop
        </a>
      </li>
      <li className="tab">
        <a
          onClick={() => {
            setCurrentPage('cart');
          }}
          className={currentPage === 'cart' ? 'active' : ''}
        >
          Order
        </a>
      </li>
    </ul>
  );
};

export default DesktopNav;
