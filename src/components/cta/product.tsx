import React from 'react';
import TextBox from '../text_box';

export const Product: React.FC<{ product_title: string }> = props => {
  return (
    <div className="product_advert">
      <TextBox type="title" text={props.product_title} />
    </div>
  );
};
