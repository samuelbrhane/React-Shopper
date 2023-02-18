import React, { useEffect, useState } from "react";

const Pagination = ({
  postPerPage,
  totalPost,
  setCurrentPage,
  currentPage,
}) => {
  const [pages, setPages] = useState([]);
  useEffect(() => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalPost?.length / postPerPage); i++) {
      pages.push(i);
    }
    setPages(pages);
  }, [totalPost, postPerPage]);

  return (
    <div className="text-lg flex justify-center gap-2">
      {pages.map((number, index) => (
        <button
          className={`${
            currentPage === number ? "bg-blue-700" : "bg-blue-400"
          } px-1 text-sm text-white rounded-sm`}
          key={index}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
