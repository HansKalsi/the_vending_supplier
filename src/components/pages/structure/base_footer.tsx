import React from 'react';

const BaseFooter: React.FC<{}> = props => {
  return (
    <footer className="row valign-wrapper">
      <div className="business_logo col s12 l3">
        <img src={require('../../../images/TheVendingSuppliersLogo.png')} />
      </div>
      <div className="business_details col s12 l6 center">
        <div className="row">
          <h5>Business details:</h5>
          <p>
            Business email:{' '}
            <a className="hoverable" href="mailto:Info@thevendingsuppliers.com">
              email@example.com
            </a>
          </p>
          <p>
            Business telephone:{' '}
            <a className="hoverable" href="tel:+000000 000000">
              000000 000000
            </a>
          </p>
        </div>
      </div>
      <div className="col s12 l3 center-align">
        {/* ToDo: update this to be an auto follow button via the facebook developer console (requires access to the facebook account/developer side of it) */}
        <a
          className="hoverable waves-effect waves-light btn social facebook"
          target="_blank"
          href="https://www.facebook.com/profile.php?id=000000000000000"
        >
          <i className="fa fa-facebook"></i>Follow us on facebook
        </a>
      </div>
    </footer>
  );
};

export default BaseFooter;
