import React from 'react';
import ImageComponent from '../image';
import TextBox from '../text_box';
import { AddToCartButton } from './add_to_cart_button';

export const ProductAdvert: React.FC<{
  img_src: string;
  img_alt: string;
  product_desc: string;
  product_title: string;
}> = props => {
  return (
    <div className="product_advert">
      <TextBox type="title" text={props.product_title} />
      <ImageComponent src={props.img_src} alt={props.img_alt} />
      <TextBox type="text" text={props.product_desc} />
      <AddToCartButton product={props.product_title} />
    </div>
  );
};

export default ProductAdvert;
