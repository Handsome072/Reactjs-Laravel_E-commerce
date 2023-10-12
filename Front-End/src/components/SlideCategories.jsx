import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideData from "../data/SlideData";

const SlideCategories = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <div className="container-fluid caroussel-product ps-5 pe-5 pb-5">
        <h1 className='home-title text-center pb-2'>Les fruits & légumes les plus populaires du moment...</h1>
        <div className="row">
          <Slider {...settings}>
            {SlideData.map((value, index) => (
              <div className='box produit' key={index}>
                <div className='nametop '>
                  <span className='tleft'>{value.para}</span>
                  <span className='tright'>{value.desc}</span>
                </div>
                <div className='img'>
                  <img src={value.sary} className="img-fluid w-100" alt='' />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default SlideCategories;
