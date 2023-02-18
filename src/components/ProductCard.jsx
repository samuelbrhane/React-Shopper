import { Link } from "react-router-dom";

const ProductCard = ({ data, id }) => {
  const { imageUrls, oldPrice, currentPrice, vendor, type } = data;

  return (
    <div className="flex justify-center">
      <Link to={`/product/${id}`} className="w-full cursor-pointer">
        <div className="w-full h-[350px] relative group">
          <img
            src={imageUrls[0]}
            alt="product"
            className="z-10 w-full h-full absolute rounded"
          />
          <img
            src={imageUrls[1]}
            alt="product"
            className="group-hover:z-20 w-full h-full absolute rounded"
          />
        </div>
        <div className="mt-1 flex items-center justify-between px-2 font-2xl shadow rounded-sm mb-6">
          <p className="text-sm">
            {vendor} {type}
          </p>
          <div className="flex gap-1 text-sm">
            <p>
              Price: <span className="line-through"> ${oldPrice}</span>
            </p>
            <p className="text-blue-500">${currentPrice}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
