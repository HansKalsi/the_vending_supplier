import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './scss/App.scss';

const App: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <header>
        {/* Add your header content here */}
        <nav>
          {/* Add navigation links or burger menu here */}
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {/* Add your main content here */}
        <div className="container">
          <h1>Welcome to Vending Machine Supplier</h1>
          <p>We provide top-quality vending machines for your business needs.</p>
          <button className="btn waves-effect waves-light" type="button">
            Contact Us
          </button>
        </div>
      </main>

      {/* Shopping Cart */}
      <aside>
        {/* Add your shopping cart component here */}
      </aside>

      {/* Footer */}
      <footer>
        {/* Add your footer content here */}
      </footer>
    </div>
  );
};

export default App;
