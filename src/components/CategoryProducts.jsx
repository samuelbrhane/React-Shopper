import React, { useState } from "react";
import { Pagination, Title } from ".";
import { ProductCard } from ".";

const CategoryProducts = ({ products, title }) => {
  const [postPerPage, setPostPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const indexLastPost = currentPage * postPerPage;
  const indexFirstPost = indexLastPost - postPerPage;

  return (
    <div className="w-full md:ml-[320px] mt-4 md:mt-0 md:border-l-[1px] pl-4 bg-white md:min-h-[calc(100vh-150px)]">
      <div>
        <Title title={title} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-4 md:gap-3 mt-5">
          {products?.slice(indexFirstPost, indexLastPost)?.map((product) => (
            <ProductCard
              key={product?.id}
              data={product?.data}
              id={product?.id}
            />
          ))}
        </div>
        {products?.length > 8 && (
          <Pagination
            postPerPage={postPerPage}
            totalPost={products}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;
