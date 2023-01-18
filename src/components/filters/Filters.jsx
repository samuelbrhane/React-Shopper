import "./filters.scss";

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
    <div className="filters">
      <div className="top">
        <h2>Category Products</h2>
        {products.map((product, index) => (
          <div className="productName" key={index}>
            <input type="checkbox" id={product} />
            <label htmlFor={product}>{product}</label>
          </div>
        ))}
      </div>
      <div className="middle">
        <h2>Sort By</h2>
        <div>
          <input type="checkbox" id="new" />
          <label htmlFor="new">New Arrivals</label>
        </div>
        <div>
          <input type="checkbox" id="lowest" />
          <label htmlFor="lowest">Lowest Price</label>
        </div>
        <div>
          <input type="checkbox" id="highest" />
          <label htmlFor="highest">Highest Price</label>
        </div>
      </div>
      <div className="bottom">
        <h2>Filter By Price</h2>
        <div className="range">
          <span>0</span> <input type="range" min="0" max="1000" step="10" />
          <span>1000</span>
        </div>
        <button>Clear Filter</button>
      </div>
    </div>
  );
};

export default Filters;
