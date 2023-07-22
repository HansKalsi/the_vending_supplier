import React from 'react';
import { ProductPagePrompt } from '../cta/product_page_prompt';
import LandingPage from '../landing_page';

const HomePage: React.FC = () => {
  return (
    <div>
      <main>
        <div className="container">
          <LandingPage />
          <ProductPagePrompt label="Explore our collection now!" />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
