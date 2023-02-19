import { Link } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_PRODUCT, selectCartItems } from "../redux/slice/productSlice";

const ProductCard = ({ data, id }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const [itemAdded, setItemAdded] = useState(false);
  const { imageUrls, oldPrice, currentPrice, vendor, type } = data;

  console.log(cartItems);
  return (
    <div className="flex justify-center">
      <div className="w-full relative">
        <button
          className={`${
            itemAdded
              ? "bg-gray-600 hover:bg-gray-500"
              : "bg-blue-700 hover:bg-blue-500"
          }   absolute top-2 right-2 z-40 text-white w-8 h-8 rounded flex justify-center items-center text-xl`}
          disabled={itemAdded}
          onClick={() => {
            setItemAdded(true);
            dispatch(ADD_PRODUCT({ data, id }));
          }}
        >
          <BsFillCartPlusFill />
        </button>

        <Link to={`/product/${id}`}>
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
    </div>
  );
};

export default ProductCard;
