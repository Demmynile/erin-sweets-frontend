import React, { useState } from 'react';
import './Banner.scss';
import banner1 from '../../../assets/shop.jpg'
import banner2 from '../../../assets/shop2.jpg'


const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    banner1,
    banner2,
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  return (
    <div className="image-slider">
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
      <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((image, index) => (
          <div className="slide" key={index} style={{ backgroundImage: `url(${image})` }}></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
