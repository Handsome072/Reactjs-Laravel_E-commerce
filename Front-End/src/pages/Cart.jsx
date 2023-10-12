import React, { useState, useEffect } from 'react';
import { BsFillTrashFill } from "react-icons/bs";
import Header from '../components/Header';
import Footer from '../components/Footer';


function Cart({ cart , activeLink , handleLinkClick , setCart }) {




  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity === 0) {

      const updatedCart = cart.filter(item => item.id !== productId);
      setCart(updatedCart);
    } else {

      const updatedCart = cart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
      setCart(updatedCart);
    }
  };


  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {

    let newTotalPrice = 0;

    cart.forEach((item) => {
      newTotalPrice += item.price * item.quantity;
    });

    setTotalPrice(newTotalPrice);
  }, [cart]);



  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div>
      <Header cart={cart} activeLink={activeLink}  handleLinkClick={handleLinkClick} />
      <div className="container-fluid p-0">
        <img src="/product-header.jpg" className='img-fluid w-100 m-0 p-0' alt="" />

      </div>

      <div className="container mb-5 pb-5">
      <h2 className='text-center p-5'>Panier</h2>
      {cart.length === 0 ? (
          <div className="row pb-5">
              <div className=" col-md-8 bg-white rounded text-center shadow p-4">
                    <p>Le panier est vide.</p>
              </div>
              <div className="col-md-3 bg-white cart-total rounded shadow p-4">
                <div className="row">
                  < h5 className='mt-5 border-bottom  pb-3 fw-bold '>Total Panier  </ h5>
                  <div className="col-md-4  pt-3">
                    < p>Prix Total :</ p></div>


                  <div className="col-md-6  text-end pt-3">
                    <p>{totalPrice}0 €</p>
                  </div>
                </div>
              </div>
          </div>
       
      
        ) : (

          <ul className='pb-5'>

            <div className="row">
              <div className="col-md-8">


                {cart.map((item, index) => (

                  <li key={index} className="cart bg-white rounded shadow p-4 mb-3">
                    <div className="row">
                      <div className="col-md-3">
                        <img src={`/product-image/${item.photos}`} className="img-fluid w-100" alt="" />
                      </div>
                      <div className="col-md-9">
                        <div className="row">
                          <div className="col-md-6"> <h4 className='mb-4'>{item.name}</h4></div>
                          <div className="col-md-6 text-end pt-2"> <i className="cart-icon"
                            onClick={() => handleRemoveFromCart(item.id)}> <BsFillTrashFill /></i></div>


                        </div>

                        <div className="row">

                          <div className="col-md-5">
                            <div className="row">
                              <div className="col-md-4">
                                <input
                                  type="number"
                                  value={item.quantity}
                                  className="form-control"
                                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                /></div>
                              <div className="col-md-8 pt-2">
                                <span>* &nbsp; {item.price}.00 €</span>
                              </div>
                            </div>


                          </div>
                          <div className="col-md-6  pt-2  ">


                            < span className='pt-5 fw-bold'> = </ span>
                            <span> &nbsp; {item.price * item.quantity}. 0 €</span>
                          </div>

                        </div>





                      </div>


                    </div>

                  </li>




                ))}

              </div>
              <div className="col-md-4 bg-white cart-total rounded shadow p-4">
                <div className="row">
                  < h5 className='mt-5 border-bottom  pb-3 fw-bold '>Total Panier  </ h5>
                  <div className="col-md-4  pt-3">
                    < p>Prix Total :</ p></div>


                  <div className="col-md-6  text-end pt-3">
                    <p>{totalPrice} . 0 €</p>
                  </div>
                </div>
              </div>

            </div>


          </ul>
        )}




      </div>
      <Footer />

    </div >
  );
}

export default Cart;
