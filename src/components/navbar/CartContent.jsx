import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/slice/productSlice";

const CartContent = () => {
  const cartItems = useSelector(selectCartItems);
  return (
    <NavLink
      to="/cart"
      className="relative flex items-center gap-1"
      style={({ isActive }) =>
        isActive
          ? {
              color: "#22332a",
            }
          : undefined
      }
    >
      <p>Cart </p>
      <FaShoppingCart />
      <p className="absolute top-[-8px] right-[-10px]">{cartItems.length}</p>
    </NavLink>
  );
};

export default CartContent;
