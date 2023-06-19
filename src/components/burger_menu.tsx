import React, { useEffect, useState } from "react";

const BurgerMenu: React.FC = () => {
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
      <div>
        <nav>
          <ul id="slide-out" className="sidenav">
            {/* <li>
              <div className="user-view">
                <div className="background">
                  <img src={require("../images/vending_machine.png").default}/>
                </div>
                <a href="#user"><img className="circle" src={require("../images/vending_machine.jpg").default}/></a>
                <a href="#name"><span className="white-text name">John Doe</span></a>
                <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
              </div>
            </li> */}
            <li><a className="subheader">The Vending Supplier</a></li>
            <li><a href="/"><span className="material-icons">home</span>Homepage</a></li>
            <li><a href="/shop"><span className="material-icons">shopping_cart</span>Browse Shop</a></li>
            <li><a href="/cart"><span className="material-icons">local_shipping</span>Order</a></li>
            <li><div className="divider"></div></li>
            <li><a href="/about-us" className="waves-effect">About Us</a></li>
            <li><a href="/contact-us" className="waves-effect">Contact Us</a></li>
          </ul>
          <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        </nav>
      </div>
      );
}

export default BurgerMenu;