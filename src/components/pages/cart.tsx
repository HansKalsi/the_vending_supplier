import React from 'react';
import ShoppingCart from '../cta/shopping_cart';

const CartPage: React.FC = () => {
  return (
    <div>
      <main>
        <ShoppingCart />
      </main>
      {/* Footer */}
      <footer>{/* Add your footer content here */}</footer>
    </div>
  );
};

export default CartPage;
