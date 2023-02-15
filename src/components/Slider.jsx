import React, { useState, useEffect } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
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
    <div className="h-[calc(100vh-60px)] md:h-[calc(100vh-70px)] mt-[60px] md:mt-[70px] w-full flex overflow-hidden relative">
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
            className={`${position} sliderImage absolute left-0 w-full h-full opacity-0 duration-1000`}
          />
        );
      })}
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full flex items-center justify-between text-3xl text-[rgb(127, 208, 255)] px-4">
        <BsFillArrowLeftCircleFill
          onClick={slideLeft}
          className="cursor-pointer"
        />
        <BsFillArrowRightCircleFill
          onClick={slideRight}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Slider;
