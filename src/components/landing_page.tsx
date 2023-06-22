import React from 'react';
import ImageComponent from './image';
import TextBox from './text_box';

const LandingPage: React.FC = () => {
  return (
    <div className="container">
      <TextBox type="title" text="Welcome to Vending Machine Supplier" />
      <TextBox
        type="text"
        text="We provide top-quality vending machines for your business needs."
      />
      <ImageComponent
        src={require('../images/vending_machine.png')}
        alt="vending_machine"
      />
    </div>
  );
};

export default LandingPage;
