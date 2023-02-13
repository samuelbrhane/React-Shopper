const ProductCard = ({ product }) => {
  const { image, name, oldPrice, newPrice } = product;
  return (
    <div className="w-[280px]">
      <div className="w-full h-[350px] relative group">
        <img
          src={image[0]}
          alt="product"
          className="z-10 w-full h-full absolute rounded"
        />
        <img
          src={image[1]}
          alt="product"
          className="group-hover:z-20 w-full h-full absolute rounded"
        />
      </div>
      <div className="mt-1 flex items-center justify-between px-2 font-2xl shadow rounded-sm mb-6">
        <p>{name}</p>
        <div className="flex gap-1 text-lg">
          <p>
            Price: <span className="line-through"> ${oldPrice}</span>
          </p>
          <p>${newPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
