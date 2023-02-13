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
    <div className="fixed top-[80vh] flex flex-col gap-4">
      <div>
        <h2 className="mb-1 text-green-500">Category Products</h2>
        {products.map((product, index) => (
          <div className="px-3 mb-2" key={index}>
            <input type="checkbox" id={product} className="mr-2" />
            <label className="text-lg" htmlFor={product}>
              {product}
            </label>
          </div>
        ))}
      </div>
      <div className="middle">
        <h2 className="mb-1 text-green-500">Sort By</h2>
        <div>
          <input className="mr-2" type="checkbox" id="new" />
          <label className="text-lg" htmlFor="new">
            New Arrivals
          </label>
        </div>
        <div>
          <input className="mr-2" type="checkbox" id="lowest" />
          <label className="text-lg" htmlFor="lowest">
            Lowest Price
          </label>
        </div>
        <div>
          <input className="mr-2" type="checkbox" id="highest" />
          <label className="text-lg" htmlFor="highest">
            Highest Price
          </label>
        </div>
      </div>
      <div className="bottom">
        <h2>Filter By Price</h2>
        <div className="range">
          <span>0</span> <input type="range" min="0" max="1000" step="10" />
          <span>1000</span>
        </div>
        <button className="p-2 mt-4 w-full text-lg text-white rounded-sm bg-[rgb(247, 70, 194)]">
          Clear Filter
        </button>
      </div>
    </div>
  );
};

export default Filters;
