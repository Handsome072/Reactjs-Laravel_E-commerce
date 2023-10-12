import React from 'react';
import CatItemProduct from './CatItemProduct';
const product = [
  {
    image: '/produit-1.jpg',
    type: 'Fruit & legume'
  },
  {
    image: '/produit-2.jpg',
    type: 'marketing'
  },
  {
    image: '/produit-3.jpg',
    type: 'Boisson'
  },

  {
    image: '/produit-4.jpg',
    type: 'Fruits sec'
  },

  {
    image: '/produit-5.jpg',
    type: 'Fruit Conft'
  },
  {
    image: '/produit-6.jpg',
    type: 'Pate de Fruit'
  }
]
const CatProduct = () => {
  return (

    <div className="container-fluid product-home pb-5">
      <div className="container pb-5">
        <h1 className='home-title text-center'>Découvrez nos produits</h1>
        <div className="row   ">
          <div className="row mt-5 portfolio-img">
            {product.map((item, index) => (
              <div key={index} className="col-md-4 mt-2">
                <CatItemProduct image={item.image} type={item.type}  />
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
};

export default CatProduct;
