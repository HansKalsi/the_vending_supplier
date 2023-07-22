import React from 'react';
import TextBox from './text_box';

const LandingPage: React.FC = () => {
  return (
    <>
      <TextBox type="title" text="The Vending Suppliers" />
      <TextBox
        type="text"
        text="Your one-stop solution for top-quality vending machines. Satisfy your cravings and quench your thirst with our wide range of vending options. Elevate your business and enhance customer satisfaction with convenience at your fingertips."
      />
    </>
  );
};

export default LandingPage;
