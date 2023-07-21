import React from 'react';

const BaseFooter: React.FC<{}> = props => {
  return (
    <footer>
      <div className="business_logo">
        <img
          src={require('../../../images/vending_machine_logo_example.jpeg')}
        />
      </div>
      <div className="business_details">
        <h5>Business details to be added here.</h5>
        <p>
          Business email:{' '}
          <a href="mailto:business_email@example.com">
            business_email@example.com
          </a>
        </p>
      </div>
      <div className="socials">
        <a className="waves-effect waves-light btn-floating social facebook">
          <i className="fa fa-facebook" />
        </a>
        <a className="waves-effect waves-light btn-floating social instagram">
          <i className="fa fa-instagram" />
        </a>
        <a className="waves-effect waves-light btn-floating social linkedin">
          <i className="fa fa-linkedin" />
        </a>
        <a className="waves-effect waves-light btn-floating social twitter">
          <i className="fa fa-twitter" />
        </a>
      </div>
    </footer>
  );
};

export default BaseFooter;
