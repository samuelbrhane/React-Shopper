import React from "react";
import "./productCard.scss";

const ProductCard = ({ product }) => {
  const { image, name, oldPrice, newPrice } = product;
  return (
    <div className="productCard">
      <div className="productImage">
        <img src={image[0]} alt="product" className="firstImage" />
        <img src={image[1]} alt="product" className="secondImage" />
      </div>
      <div className="productDesc">
        <p>{name}</p>
        <div className="price">
          <p className="old">
            Price: <span> ${oldPrice}</span>
          </p>
          <p>${newPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
