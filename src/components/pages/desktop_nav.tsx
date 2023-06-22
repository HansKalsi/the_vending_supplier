import React, { useEffect, useState } from 'react';

const DesktopNav: React.FC = () => {
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
        <a href="/">Home</a>
      </li>
      <li className="tab">
        <a href="/about-us">About Us</a>
      </li>
      <li className="tab">
        <a href="/contact-us">Contact Us</a>
      </li>
      <li className="tab">
        <a href="/shop">Shop</a>
      </li>
      <li className="tab">
        <a href="/cart">Order</a>
      </li>
    </ul>
  );
};

export default DesktopNav;
