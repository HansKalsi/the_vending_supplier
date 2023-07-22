import React from 'react';
import TextBox from './text_box';

const LandingPage: React.FC = () => {
  return (
    <>
      <TextBox type="title" text="The Vending Suppliers" />
      <TextBox
        type="text"
        text="We provide top-quality vending machines for your business needs."
      />
    </>
  );
};

export default LandingPage;
