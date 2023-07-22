import React from 'react';
import SidenavMenu from './base_sidenav';
import BurgerMenu from './burger_menu';
import DesktopNav from './desktop_nav';

const BaseHeader: React.FC = () => {
  return (
    <>
      <header className="navbar-fixed">
        <nav>
          <BurgerMenu />
          <DesktopNav />
        </nav>
      </header>
      <SidenavMenu />
    </>
  );
};

export default BaseHeader;
