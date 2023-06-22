import React, { useEffect, useState } from 'react';
import { Page } from '../../../App';

const BurgerMenu: React.FC<{
  activePage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
}> = props => {
  const [M, setM] = useState((window as any).M);

  useEffect(() => {
    // Initialize the sidenav
    const sidenavElement = document.querySelector('.sidenav');
    M.Sidenav.init(sidenavElement);

    // Clean up the sidenav instance when the component is unmounted
    return () => {
      const instance = M.Sidenav.getInstance(sidenavElement);
      if (instance) {
        instance.destroy();
      }
    };
  }, []);

  const handlePageChange = (page: Page): void => {
    props.setCurrentPage(page);
  };

  return (
    <>
      <ul id="slide-out" className="sidenav">
        <li>
          <a className="subheader">The Vending Supplier</a>
        </li>
        <li>
          <a
            onClick={() => {
              handlePageChange('home');
            }}
            className={props.activePage === '' ? 'active' : ''}
          >
            <span className="material-icons">home</span>Homepage
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              handlePageChange('browse');
            }}
            className={props.activePage === 'shop' ? 'active' : ''}
          >
            <span className="material-icons">shopping_cart</span>Browse Shop
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              handlePageChange('cart');
            }}
            className={props.activePage === 'cart' ? 'active' : ''}
          >
            <span className="material-icons">local_shipping</span>Submit Order
          </a>
        </li>
        <li>
          <div className="divider"></div>
        </li>
        <li>
          <a
            onClick={() => {
              handlePageChange('about');
            }}
            className={
              props.activePage === 'about'
                ? 'waves-effect active'
                : 'waves-effect'
            }
          >
            About Us
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              handlePageChange('contact');
            }}
            className={
              props.activePage === 'contact'
                ? 'waves-effect active'
                : 'waves-effect'
            }
          >
            Contact Us
          </a>
        </li>
      </ul>
      <a href="#" data-target="slide-out" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </a>
    </>
  );
};

export default BurgerMenu;
