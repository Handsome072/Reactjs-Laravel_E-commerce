
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Header from './Header';

import Footer from './Footer';

function ProductItem({ cart, setCart , activeLink , handleLinkClick }) {

  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState([]);
  const handleQuantityChange = event => {
    setQuantity(event.target.value);
  };
  useEffect(() => {
    try {
        axios.get('http://127.0.0.1:8000/api/vegetables')
            .then(response => {
                setProducts(response.data);
            });
    } catch (error) {
        console.error('Erreur lors de la récupération des données de l\'API : ', error);
    
    }
}, []);
const { productId } = useParams();

const product = products.find(item => item.id === parseInt(productId));

  const addToCart = () => {
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + parseInt(quantity) } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: parseInt(quantity) }]);
    }
  };

  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  return (
    <div>
                  <Header cart={cart} activeLink={activeLink} handleLinkClick={handleLinkClick} />
      <div className="container-fluid  p-0">

        <img src="/product-header.jpg" className='img-fluid w-100 m-0 p-0' alt="" />

      </div>
      <div className="container text-center p-4">
        <img src="/paiement.png" className='img-fluid' alt="" />
      </div>

      <div className="container-fluid   product-Item pb-5  mb-5">
        <div className="container mb-5">
          <div className="row   ">
            <div className=" offset-md-3 col-md-5 mt-4 p-4 bg-white delivery-home">
              <img src={`/product-image/${product.photos}`} alt={product.name} className="img-fluid w-100" />
          
            </div>
            <div className="col-md-4 mt-4 delivery-home shadow bg-white  p-5">
              <h3 className='fw-bold '>{product.name}</h3>

              <p className='product-price p-0  mt-4 pb-2'>Prix: {product.price} €</p>
              <h5>Details du produit </h5>

              <p  className='p-0'>
                <em>Les stocks varient régulièrement. Après réception de votre commande,
                  nous vous tiendrons au courant si des produits sont indisponibles.</em>
              </p>
              <div className="row">
                <div className="col-md-3 pt-1">              <label>
                  Quantité:

                </label></div>
                <div className="col-md-4"><input type="number" className='form-control' value={quantity} onChange={handleQuantityChange} /></div>
              </div>
              <div className="row">
                    
              <button onClick={addToCart} className="form-control btn btn-primary mt-4">Ajouter au panier</button>
              </div>

           
            </div>
          </div>


        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductItem;
