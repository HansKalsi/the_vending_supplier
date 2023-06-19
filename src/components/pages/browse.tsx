import React from 'react';
import BurgerMenu from '../burger_menu';

const BrowsePage: React.FC = () => {
    return (
        <div>
            {/* Header */}
            <header>
                {/* Add your header content here */}
                <BurgerMenu/>
            </header>

            {/* Main Content */}
            <main>
                {/* Add your main content here */}
                <div>BROWSING</div>
            </main>

            {/* Footer */}
            <footer>
                {/* Add your footer content here */}
            </footer>
        </div>
    );
};

export default BrowsePage;
  