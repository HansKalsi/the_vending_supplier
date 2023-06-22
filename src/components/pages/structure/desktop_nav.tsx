import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const DesktopNav: React.FC = () => {
  const [M, setM] = useState((window as any).M);
  const location = useLocation();
  const pathSegments = location.pathname.split('/');

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
          target="_self"
          href="/"
          className={pathSegments[1] === '' ? 'active' : ''}
        >
          Home
        </a>
      </li>
      <li className="tab">
        <a
          target="_self"
          href="/about"
          className={pathSegments[1] === 'about' ? 'active' : ''}
        >
          About Us
        </a>
      </li>
      <li className="tab">
        <a
          target="_self"
          href="/contact"
          className={pathSegments[1] === 'contact' ? 'active' : ''}
        >
          Contact Us
        </a>
      </li>
      <li className="tab">
        <a
          target="_self"
          href="/shop"
          className={pathSegments[1] === 'shop' ? 'active' : ''}
        >
          Shop
        </a>
      </li>
      <li className="tab">
        <a
          target="_self"
          href="/cart"
          className={pathSegments[1] === 'cart' ? 'active' : ''}
        >
          Order
        </a>
      </li>
    </ul>
  );
};

export default DesktopNav;
