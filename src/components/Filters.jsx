const products = [
  "Sweater",
  "Shirt",
  "Jeans",
  "Cap",
  "Suit",
  "Flip",
  "Shorts",
  "Belt",
  "Socks",
  "Tie",
];

const Filters = () => {
  return (
    <div className="md:fixed md:bottom-[55px]  md:top-[80px] flex  flex-col gap-2  bg-white z-50 px-4 md:w-[250px]">
      <div>
        <h2 className="mb-1 font-bold text-lg md:text-xl">Category Products</h2>
        {products.map((product, index) => (
          <div className="px-3 mb-1" key={index}>
            <input type="checkbox" id={product} className="mr-2" />
            <label className="text-[17px]" htmlFor={product}>
              {product}
            </label>
          </div>
        ))}
      </div>
      <div className="">
        <h2 className="mb-1 font-bold text-lg md:text-xl">Sort By</h2>
        <div className="pl-4">
          <div>
            <input className="mr-2" type="checkbox" id="new" />
            <label className="text-[17px]" htmlFor="new">
              New Arrivals
            </label>
          </div>
          <div>
            <input className="mr-2" type="checkbox" id="lowest" />
            <label className="text-[17px]" htmlFor="lowest">
              Lowest Price
            </label>
          </div>
          <div>
            <input className="mr-2" type="checkbox" id="highest" />
            <label className="text-[17px]" htmlFor="highest">
              Highest Price
            </label>
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-bold mb-1">Filter By Price</h2>
        <div className="range">
          <span>0</span> <input type="range" min="0" max="1000" step="10" />
          <span>1000</span>
        </div>
        <button className="p-2 mt-4 w-full text-lg bg-red-500 rounded font-bold text-white bg-[rgb(247, 70, 194)]">
          Clear Filter
        </button>
      </div>
    </div>
  );
};

export default Filters;
