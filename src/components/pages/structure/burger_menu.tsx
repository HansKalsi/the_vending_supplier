import React, { useContext, useEffect, useRef, useState } from 'react';
import { CartBasketContext, CurrentPageContext } from '../../contexts';

const BurgerMenu: React.FC = () => {
  const [M, setM] = useState((window as any).M);
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext);
  const { cartBasket } = useContext(CartBasketContext);
  const [cartTotal, setCartTotal] = useState(0);

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

  useEffect(() => {
    let newCartTotal = 0;
    Object.values(cartBasket).forEach((value: any) => {
      newCartTotal += value;
    });
    setCartTotal(newCartTotal);
  }, [cartBasket]);

  return (
    <div className="nav-wrapper">
      <a href="#" data-target="slide-out" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </a>
      <a
        href="#"
        className="right sidenav-trigger"
        onClick={() => setCurrentPage('cart')}
      >
        <i className="material-icons">local_shipping</i>
        <p className="order_number">{cartTotal}</p>
      </a>
    </div>
  );
};

export default BurgerMenu;
