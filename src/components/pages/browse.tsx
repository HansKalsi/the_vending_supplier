import React from 'react';
import ProductAdvert from '../cta/product_advert';

const BrowsePage: React.FC = () => {
  return (
    <div>
      <main className="product_list col s12">
        <div className="row">
          <div className="col s12 m6">
            <ProductAdvert
              img_src={require('../../images/coffee_machine.png')}
              img_alt={'coffee vending machine'}
              product_desc={'Coffee machine for all your quick caffine needs'}
              product_title={'Coffee Machine'}
            />
          </div>
          <div className="col s12 m6">
            <ProductAdvert
              img_src={require('../../images/tubz_tower.jpeg')}
              img_alt={'tubz tower vending machine'}
              product_desc={
                'Tubz tower vending machine for all your quick tub needs'
              }
              product_title={'Tubz Vending Machine'}
            />
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <ProductAdvert
              img_src={require('../../images/vending_machine.webp')}
              img_alt={'vending machine'}
              product_desc={'Vending machine for all your quick snack needs'}
              product_title={'Vending Machine'}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default BrowsePage;
