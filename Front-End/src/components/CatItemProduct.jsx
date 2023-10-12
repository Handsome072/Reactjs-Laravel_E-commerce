import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';

const CatItemProduct = ({ image, type, productId }) => {
  const [hovered, setHovered] = useState(false);
  const textAnimationControls = useAnimation();

  useEffect(() => {
    textAnimationControls.start({
      x: -100, 
      transition: { duration: 1 },
    });
  }, [textAnimationControls]);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="product-banner"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={`/product-image/${image}`} alt="Product Item" className={`img-fluid w-100 ${hovered ? 'scale-up' : ''}`} />
   
      <motion.div
        className="product-title"
        animate={textAnimationControls}
        initial={{ x:-250}}
      >
        {type}
      </motion.div>
      <Link to={`/product/${productId}`} className={`product-button ${hovered ? 'show' : ''}`}>Voir Produit</Link>
    </div>
  );
};

export default CatItemProduct;
