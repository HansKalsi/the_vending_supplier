import React from 'react';
import TextBox from './text_box';

const LandingPage: React.FC = () => {
  return (
    <div className="container">
      <TextBox type="title" text="Welcome to Vending Machine Supplier" />
      <TextBox
        type="text"
        text="We provide top-quality vending machines for your business needs."
      />
    </div>
  );
};

export default LandingPage;
