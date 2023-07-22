import React, { useContext, useState } from 'react';
import { CartBasketContext } from '../contexts';
import { Product } from './product';
import { ProductPagePrompt } from './product_page_prompt';

export const ShoppingCart: React.FC = () => {
  const [M, setM] = useState((window as any).M);
  const { cartBasket } = useContext(CartBasketContext);

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
          <ProductPagePrompt label="Have a look at what's on offer" />
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
          <a
            onClick={handleOrderSubmission}
            className="waves-effect waves-light btn-large hoverable"
          >
            <i className="material-icons left">local_shipping</i>Place Order
            <i className="material-icons right">local_shipping</i>
          </a>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
