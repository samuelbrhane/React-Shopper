import React from "react";
import { Navbar, Footer, Filters, CategoryProducts } from "../components";

const Category = () => {
  return (
    <div className="category">
      <Navbar />
      <div className="mt-[80px]">
        <div className="flex px-8">
          <div className="w-[20%]">
            <Filters />
          </div>
          <div className="w-[80%] min-h-[80vh]">
            <CategoryProducts />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Category;
