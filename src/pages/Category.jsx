import React from "react";
import { Navbar, Footer, Filters, CategoryProducts } from "../components";

const Category = () => {
  return (
    <div className="">
      <Navbar />
      <div className="mt-[60px] md:mt-[70px] pt-4 flex flex-col gap-5 md:flex-row px-4  bg-white">
        <Filters />
        <CategoryProducts />
      </div>
      <Footer />
    </div>
  );
};

export default Category;
