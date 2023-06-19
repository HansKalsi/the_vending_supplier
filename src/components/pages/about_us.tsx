import React from 'react';
import BurgerMenu from '../burger_menu';

const AboutUsPage: React.FC = () => {
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
                <div>About Us</div>
            </main>

            {/* Footer */}
            <footer>
                {/* Add your footer content here */}
            </footer>
        </div>
    );
};

export default AboutUsPage;
  