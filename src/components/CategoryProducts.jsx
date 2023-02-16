import React from "react";
import { Title } from ".";
import { data } from "../data";
import { ProductCard } from ".";

const CategoryProducts = () => {
  return (
    <div className="w-full md:ml-[255px] mt-4 md:mt-0 md:border-l-[1px] pl-4 bg-white md:min-h-[calc(100vh-150px)]">
      <div className="mt-4 hidden md:inline bg-green-500">
        <img
          src="https://images.pexels.com/photos/3839432/pexels-photo-3839432.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="cover"
          className="w-full md:h-[350px] lg:h-[370px] xl:h-[430px] rounded-md"
        />
      </div>
      <div className="md:mt-6">
        <Title title="Men's" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-4 md:gap-3 mt-3">
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
