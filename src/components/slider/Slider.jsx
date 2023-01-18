import React, { useState } from "react";
import "./slider.scss";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useEffect } from "react";
const images = [
  "https://images.pexels.com/photos/8886963/pexels-photo-8886963.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/3865906/pexels-photo-3865906.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/5325586/pexels-photo-5325586.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

const Slider = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const checkIndex = (index) => {
    if (index < 0) return images.length - 1;
    if (index > images.length - 1) return 0;
    return index;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex(checkIndex(imageIndex + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [imageIndex]);

  const slideLeft = () => {
    setImageIndex(checkIndex(imageIndex - 1));
  };

  const slideRight = () => {
    setImageIndex(checkIndex(imageIndex + 1));
  };
  return (
    <div className="slider">
      {images.map((image, index) => {
        let position = "next";
        if (imageIndex === index) position = "active";
        if (
          index === imageIndex - 1 ||
          (imageIndex === 0 && index === images.length - 1)
        )
          position = "prev";
        return (
          <img
            src={image}
            alt="product"
            key={index}
            className={`${position} sliderImage`}
          />
        );
      })}
      <div className="sliderChange">
        <BsFillArrowLeftCircleFill onClick={slideLeft} className="arrow" />
        <BsFillArrowRightCircleFill onClick={slideRight} className="arrow" />
      </div>
    </div>
  );
};

export default Slider;
