import React from 'react';
import { Page } from '../../../App';
import BurgerMenu from './burger_menu';
import DesktopNav from './desktop_nav';

const BaseHeader: React.FC<{
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
}> = props => {
  return (
    <header>
      <nav>
        <BurgerMenu
          activePage={props.currentPage}
          setCurrentPage={props.setCurrentPage}
        />
        <DesktopNav
          activePage={props.currentPage}
          setCurrentPage={props.setCurrentPage}
        />
      </nav>
    </header>
  );
};

export default BaseHeader;
