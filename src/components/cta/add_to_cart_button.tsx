import React, { useContext, useEffect, useState } from 'react';
import { CartBasketContext } from '../contexts';

export const AddToCartButton: React.FC<{ product: string }> = props => {
  const [M, setM] = useState((window as any).M);
  const [buttonClicked, setButtonClicked] = useState(false);
  const { cartBasket, updateCartBasket } = useContext(CartBasketContext);

  useEffect(() => {
    if (buttonClicked) {
      // Perform any actions you want when the button is clicked
      switch (props.product) {
        case 'Coffee Machine':
          updateCartBasket({
            ...cartBasket,
            coffee_machine: cartBasket.coffee_machine + 1,
          });
          break;
        case 'Tubz Vending Machine':
          updateCartBasket({
            ...cartBasket,
            tubz_machine: cartBasket.tubz_machine + 1,
          });
          break;
        case 'Vending Machine':
          updateCartBasket({
            ...cartBasket,
            vending_machine: cartBasket.vending_machine + 1,
          });
          break;
        default:
          break;
      }
      // Show the toast popup
      M.toast({ html: `${props.product} added to cart!`, classes: 'green' });
      // Reset the buttonClicked state if needed
      setButtonClicked(false);
    }
  }, [buttonClicked]);

  const handleButtonClick = () => {
    setButtonClicked(true);
  };

  return (
    <button
      onClick={handleButtonClick}
      className="btn waves-effect waves-light"
      type="button"
    >
      Add to Cart
    </button>
  );
};
