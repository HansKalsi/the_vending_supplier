import React from 'react';
import BaseHeader from './base_header';

const CartPage: React.FC = () => {
  return (
    <div>
      <BaseHeader />
      {/* Main Content */}
      <main>
        {/* Add your main content here */}
        <div>CART</div>
      </main>

      {/* Footer */}
      <footer>{/* Add your footer content here */}</footer>
    </div>
  );
};

export default CartPage;
