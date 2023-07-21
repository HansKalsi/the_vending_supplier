import React, { useContext, useEffect, useState } from 'react';
import { CurrentPageContext } from '../../contexts';

const BurgerMenu: React.FC = () => {
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext);
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

  return (
    <>
      <ul id="slide-out" className="sidenav">
        <li>
          <a className="subheader">The Vending Supplier</a>
        </li>
        <li>
          <a
            onClick={() => {
              setCurrentPage('home');
            }}
            className={currentPage === '' ? 'active' : ''}
          >
            <span className="material-icons">home</span>Homepage
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setCurrentPage('browse');
            }}
            className={currentPage === 'shop' ? 'active' : ''}
          >
            <span className="material-icons">shopping_cart</span>Browse Shop
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setCurrentPage('cart');
            }}
            className={currentPage === 'cart' ? 'active' : ''}
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
              setCurrentPage('about');
            }}
            className={
              currentPage === 'about' ? 'waves-effect active' : 'waves-effect'
            }
          >
            About Us
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setCurrentPage('contact');
            }}
            className={
              currentPage === 'contact' ? 'waves-effect active' : 'waves-effect'
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
