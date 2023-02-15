import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const CartContent = () => (
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
    <p className="absolute top-[-8px] right-[-10px]">1</p>
  </NavLink>
);

export default CartContent;
