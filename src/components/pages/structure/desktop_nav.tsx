import React, { useEffect, useState } from 'react';
import { Page } from '../../../App';

const DesktopNav: React.FC<{
  activePage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
}> = props => {
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

  const handlePageChange = (page: Page): void => {
    props.setCurrentPage(page);
  };

  return (
    <ul className="tabs tabs-fixed-width">
      <li className="tab">
        <a
          onClick={() => {
            handlePageChange('home');
          }}
          className={props.activePage === '' ? 'active' : ''}
        >
          Home
        </a>
      </li>
      <li className="tab">
        <a
          onClick={() => {
            handlePageChange('about');
          }}
          className={props.activePage === 'about' ? 'active' : ''}
        >
          About Us
        </a>
      </li>
      <li className="tab">
        <a
          onClick={() => {
            handlePageChange('contact');
          }}
          className={props.activePage === 'contact' ? 'active' : ''}
        >
          Contact Us
        </a>
      </li>
      <li className="tab">
        <a
          onClick={() => {
            handlePageChange('browse');
          }}
          className={props.activePage === 'shop' ? 'active' : ''}
        >
          Shop
        </a>
      </li>
      <li className="tab">
        <a
          onClick={() => {
            handlePageChange('cart');
          }}
          className={props.activePage === 'cart' ? 'active' : ''}
        >
          Order
        </a>
      </li>
    </ul>
  );
};

export default DesktopNav;
