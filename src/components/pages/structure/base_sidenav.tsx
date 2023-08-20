import React, { useContext } from 'react';
import { CurrentPageContext } from '../../contexts';

const SidenavMenu: React.FC = () => {
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext);

  return (
    <ul id="slide-out" className="sidenav">
      <li>
        <div className="user-view">
          <div className="background">
            <img src={require('../../../images/TheVendingSuppliersLogo.png')} />
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
          <span className="material-icons">local_shipping</span>Send Enqiury
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
  );
};

export default SidenavMenu;
