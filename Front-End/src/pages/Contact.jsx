import React from 'react';

import Header from '../components/Header';
function Contact({ cart , activeLink , handleLinkClick })  {
    

    return (
        <div>
  <Header cart={cart} activeLink={activeLink} handleLinkClick={handleLinkClick} />
      <div className="container-fluid p-0">
                <img src="/product-header.jpg" className='img-fluid w-100 m-0 p-0' alt="" />
                
            </div>


            
        </div>

    );
}

export default Contact;
