import React from 'react';
import BurgerMenu from './burger_menu';
import DesktopNav from './desktop_nav';

const BaseHeader: React.FC = () => {
  return (
    <header>
      <nav>
        <BurgerMenu />
        <DesktopNav />
      </nav>
    </header>
  );
};

export default BaseHeader;
