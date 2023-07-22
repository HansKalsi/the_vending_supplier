import React, { useContext, useState } from 'react';
import { GenericButton } from '../button';
import { CartBasketContext } from '../contexts';
import { Product } from './product';

export const ShoppingCart: React.FC = () => {
  const [M, setM] = useState((window as any).M);
  const { cartBasket } = useContext(CartBasketContext);

  console.log(cartBasket);

  const handleOrderSubmission = () => {
    // Show the toast popup
    M.toast({
      html: 'Order has been placed! (placeholder notification)',
      classes: 'blue',
    });
  };

  return (
    <div className="col s12">
      {cartBasket.coffee_machine === 0 &&
      cartBasket.tubz_machine === 0 &&
      cartBasket.vending_machine === 0 ? (
        <div className="col s12 center">
          <h3>Your cart is empty</h3>
        </div>
      ) : (
        Object.entries(cartBasket).map((cart_item: any, index) => {
          console.log(cart_item, index);
          if (cart_item[1] > 0) {
            return (
              <Product
                product={cart_item[0]}
                number_in_cart={cart_item[1]}
                key={cart_item + `_${index}`}
              />
            );
          }
        })
      )}
      {cartBasket.coffee_machine === 0 &&
      cartBasket.tubz_machine === 0 &&
      cartBasket.vending_machine === 0 ? null : (
        <div className="row center">
          <GenericButton label="Place Order" onClick={handleOrderSubmission} />
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
