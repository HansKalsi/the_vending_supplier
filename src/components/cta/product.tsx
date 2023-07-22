import React, { useContext } from 'react';
import { GenericButton } from '../button';
import { CartBasketContext } from '../contexts';
import ImageComponent from '../image';
import TextBox from '../text_box';

interface ProdRef {
  [key: string]: string[];
}

export const Product: React.FC<{
  product: string;
  number_in_cart: number;
}> = props => {
  const { cartBasket, updateCartBasket } = useContext(CartBasketContext);
  const product_refs: ProdRef = {
    coffee_machine: [
      'Coffee Machine',
      require('../../images/coffee_machine.png'),
      'coffee vending machine',
    ],
    tubz_machine: [
      'Tubz Vending Machine',
      require('../../images/tubz_tower.jpeg'),
      'tubz tower vending machine',
    ],
    vending_machine: [
      'Vending Machine',
      require('../../images/vending_machine.webp'),
      'vending machine',
    ],
  };

  const handleAddClick = (product_clicked: string) => {
    switch (product_clicked) {
      case 'coffee_machine':
        updateCartBasket({
          ...cartBasket,
          coffee_machine: cartBasket.coffee_machine + 1,
        });
        break;
      case 'tubz_machine':
        updateCartBasket({
          ...cartBasket,
          tubz_machine: cartBasket.tubz_machine + 1,
        });
        break;
      case 'vending_machine':
        updateCartBasket({
          ...cartBasket,
          vending_machine: cartBasket.vending_machine + 1,
        });
        break;
      default:
        break;
    }
  };
  const handleRemoveClick = (product_clicked: string) => {
    switch (product_clicked) {
      case 'coffee_machine':
        updateCartBasket({
          ...cartBasket,
          coffee_machine: cartBasket.coffee_machine - 1,
        });
        break;
      case 'tubz_machine':
        updateCartBasket({
          ...cartBasket,
          tubz_machine: cartBasket.tubz_machine - 1,
        });
        break;
      case 'vending_machine':
        updateCartBasket({
          ...cartBasket,
          vending_machine: cartBasket.vending_machine - 1,
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="product_cart row">
      <ImageComponent
        src={product_refs[props.product][1]}
        alt={product_refs[props.product][2]}
      />
      <TextBox type="title" text={product_refs[props.product][0]} />
      <div className="product_cart__incrementors">
        <GenericButton
          label="-"
          onClick={() => handleRemoveClick(props.product)}
        />
        <TextBox type="text" text={props.number_in_cart.toString()} />
        <GenericButton
          label="+"
          onClick={() => handleAddClick(props.product)}
        />
      </div>
    </div>
  );
};
