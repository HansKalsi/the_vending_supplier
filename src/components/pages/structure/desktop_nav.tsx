import React, { useContext, useEffect, useRef, useState } from 'react';
import { CurrentPageContext } from '../../contexts';

const DesktopNav: React.FC = () => {
  const [M, setM] = useState((window as any).M);
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext);

  const tabsInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Initialize the tabs
    const tabsElement = document.querySelector('.tabs');
    const instance = M.Tabs.init(tabsElement);
    tabsInstanceRef.current = instance;

    // Clean up the tabs instance when the component is unmounted
    return () => {
      if (tabsInstanceRef.current) {
        tabsInstanceRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    // Change the active tab whenever the currentPage changes
    if (tabsInstanceRef.current) {
      const tabId = `tab-${currentPage}`;
      tabsInstanceRef.current.select(tabId);
    }
  }, [currentPage]);

  return (
    <ul className="tabs tabs-fixed-width">
      <li className="tab">
        <a
          href="#tab-home"
          onClick={() => {
            setCurrentPage('home');
          }}
          className={currentPage === 'home' ? 'active' : ''}
        >
          Home
        </a>
      </li>
      <li className="tab">
        <a
          href="#tab-about"
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
          href="#tab-contact"
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
          href="#tab-browse"
          onClick={() => {
            setCurrentPage('browse');
          }}
          className={currentPage === 'browse' ? 'active' : ''}
        >
          Shop
        </a>
      </li>
      <li className="tab">
        <a
          href="#tab-cart"
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
