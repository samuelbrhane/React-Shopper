import React from "react";
import { Navbar, Footer, Filters, CategoryProducts } from "../../components";
import "./category.scss";

const Category = () => {
  return (
    <div className="category">
      <Navbar />
      <div className="categoryContainer">
        <div className="categoryContent">
          <div className="left">
            <Filters />
          </div>
          <div className="right">
            <CategoryProducts />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Category;
