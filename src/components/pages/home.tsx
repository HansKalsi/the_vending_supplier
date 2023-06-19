import React from 'react';
import BurgerMenu from '../burger_menu';
import LandingPage from '../landing_page';

const HomePage: React.FC = () => {
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
                <LandingPage/>
            </main>

            {/* Footer */}
            <footer>
                {/* Add your footer content here */}
            </footer>
        </div>
    );
};

export default HomePage;
  