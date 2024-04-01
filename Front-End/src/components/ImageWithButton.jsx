import React, { useState } from 'react';

const ImageWithButton = ({ imageUrl, productName }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="image-container position-relative text-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span>{productName}</span>
      <img src={imageUrl} alt={productName} className="img-fluid" />
      <button
        className={`btn btn-primary view-button ${isHovered ? 'visible' : ''}`}
      >
        View Product
      </button>
    </div>
  );
};

export default ImageWithButton;
