import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>Welcome to Vending Machine Supplier</h1>
      <p>We provide top-quality vending machines for your business needs.</p>
      <button className="btn waves-effect waves-light" type="button">Contact Us</button>
    </div>
  );
};

export default App;
