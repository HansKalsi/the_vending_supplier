import React, { useContext } from 'react';
import { CartBasketContext } from '../contexts';
import { Product } from './product';

export const ShoppingCart: React.FC = () => {
  const { cartBasket } = useContext(CartBasketContext);

  return (
    <div>
      {cartBasket.length > 0
        ? cartBasket.map((cart_item: string, index: number) => {
            return (
              <Product
                product_title={cart_item}
                key={cart_item + `_${index}`}
              />
            );
          })
        : null}
    </div>
  );
};

export default ShoppingCart;
