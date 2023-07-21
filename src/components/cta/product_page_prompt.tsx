import React, { useContext } from 'react';
import { GenericButton } from '../button';
import { CurrentPageContext } from '../contexts';

export const ProductPagePrompt: React.FC = () => {
  const { setCurrentPage } = useContext(CurrentPageContext);

  const handleOnClick = () => {
    setCurrentPage('browse');
  };

  return (
    <div className="product_page_prompt">
      <GenericButton
        label="Have a look at what's on offer"
        onClick={handleOnClick}
      />
    </div>
  );
};
