import React from "react";
import { Title } from ".";
import { data } from "../data";
import { ProductCard } from ".";

const CategoryProducts = () => {
  return (
    <>
      <div className="mt-4">
        <img
          src="https://images.pexels.com/photos/3839432/pexels-photo-3839432.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="cover"
          className="w-full h-[350px] rounded-md"
        />
      </div>
      <div>
        <Title title="Men's" />
        <div>
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryProducts;
