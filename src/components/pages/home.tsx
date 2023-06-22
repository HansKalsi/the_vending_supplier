import React from 'react';
import LandingPage from '../landing_page';
import BaseHeader from './structure/base_header';

const HomePage: React.FC = () => {
  return (
    <div>
      <BaseHeader />
      {/* Main Content */}
      <main>
        {/* Add your main content here */}
        <LandingPage />
      </main>

      {/* Footer */}
      <footer>{/* Add your footer content here */}</footer>
    </div>
  );
};

export default HomePage;
