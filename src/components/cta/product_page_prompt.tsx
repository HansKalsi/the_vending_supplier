import React, { useContext } from 'react';
import { GenericButton } from '../button';
import { CurrentPageContext } from '../contexts';

export const ProductPagePrompt: React.FC<{ label: string }> = props => {
  const { setCurrentPage } = useContext(CurrentPageContext);

  const handleOnClick = () => {
    setCurrentPage('browse');
  };

  return (
    <div className="product_page_prompt">
      <GenericButton label={props.label} onClick={handleOnClick} />
    </div>
  );
};
