import React from "react";
import { Title } from "../";
import "./categoryProducts.scss";
import { data } from "../../data";
import { ProductCard } from "../";

const CategoryProducts = () => {
  return (
    <>
      <div className="top">
        <img
          src="https://images.pexels.com/photos/3839432/pexels-photo-3839432.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="cover"
        />
      </div>
      <div className="bottom">
        <Title title="Men's" />
        <div className="products">
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryProducts;
