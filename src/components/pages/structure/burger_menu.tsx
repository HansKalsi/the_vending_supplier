import React, { useContext, useEffect, useRef, useState } from 'react';
import { CurrentPageContext } from '../../contexts';

const BurgerMenu: React.FC = () => {
  const [M, setM] = useState((window as any).M);
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext);

  const sidenavInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Initialize the sidenav
    const sidenavElement = document.querySelector('.sidenav');
    const instance = M.Sidenav.init(sidenavElement);
    sidenavInstanceRef.current = instance;

    // Clean up the sidenav instance when the component is unmounted
    return () => {
      if (sidenavInstanceRef.current) {
        sidenavInstanceRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    // Change the active link whenever the currentPage changes
    if (sidenavInstanceRef.current) {
      const links = sidenavInstanceRef.current.el.querySelectorAll('a');
      for (const link of links) {
        if (link.href.endsWith(`/${currentPage}`)) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    }
  }, [currentPage]);

  return (
    <>
      <ul id="slide-out" className="sidenav">
        <li>
          <div className="user-view">
            <div className="background">
              <img
                src={require('../../../images/vending_machine_logo_example.jpeg')}
              />
            </div>
          </div>
        </li>
        <li>
          <a className="subheader">The Vending Suppliers</a>
        </li>
        <li>
          <a
            onClick={() => {
              setCurrentPage('home');
            }}
            className={
              currentPage === 'home' ? 'waves-effect active' : 'waves-effect'
            }
          >
            <span className="material-icons">home</span>Homepage
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setCurrentPage('browse');
            }}
            className={
              currentPage === 'browse' ? 'waves-effect active' : 'waves-effect'
            }
          >
            <span className="material-icons">shopping_cart</span>Browse Offers
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setCurrentPage('cart');
            }}
            className={
              currentPage === 'cart' ? 'waves-effect active' : 'waves-effect'
            }
          >
            <span className="material-icons">local_shipping</span>Place Order
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
