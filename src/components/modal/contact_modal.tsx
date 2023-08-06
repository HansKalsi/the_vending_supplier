import React, { useContext, useEffect, useState } from 'react';
import { CartBasketContext } from '../contexts';

export const ContactModal = () => {
  const [M, setM] = useState((window as any).M);
  const { cartBasket } = useContext(CartBasketContext);

  function handleSubmit() {
    handleOrderSubmission();
  }

  useEffect(() => {
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems);
  }, []);

  const BuildHiddenCartDataInputs = () => {
    let returnArr: any = [];

    Object.entries(cartBasket).forEach((item: any) => {
      if (item[1] > 0) {
        returnArr.push(
          <input key={item[0]} name={item[0]} value={item[1]} readOnly hidden />
        );
      }
    });

    return <>{returnArr.map((el: any) => el)}</>;
  };

  const handleOrderSubmission = () => {
    // Show the toast popup
    M.toast({
      html: 'Email client opened! (Just click send, no need to reformat the email)',
      classes: 'blue',
      displayLength: 10000,
    });
  };

  return (
    <div id="contact_modal" className="modal">
      <div className="modal-content">
        <h4>Contact Details</h4>
        <p>
          Enter your name/business-name and your preferred contact method, if
          you wish to add further information please do so when the email client
          opens.
        </p>
        <form
          action="mailto:hansthedude@gmail.com?subject=Query for The Vending Suppliers"
          method="post"
          onSubmit={() => handleSubmit()}
        >
          <BuildHiddenCartDataInputs />
          <div className="row">
            <div className="input-field col s12">
              <input
                type="text"
                id="name"
                name="Name"
                required
                className="validate"
              />
              <label htmlFor="name">Name</label>
              <span className="helper-text">name / business name</span>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                type="text"
                id="contact_method"
                name="Contact_Method"
                required
                className="validate"
              />
              <label htmlFor="contact_method">Preferred Contact Method</label>
              <span className="helper-text">
                email address / telephone number / etc
              </span>
            </div>
          </div>
          <div className="center">
            <button className="btn waves-effect waves-light" type="submit">
              Submit Details
              <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
