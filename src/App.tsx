import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './scss/App.scss';
import LandingPage from "./components/landing_page";
import { BurgerMenu } from './components/burger_menu';

const App: React.FC = () => {
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

export default App;
