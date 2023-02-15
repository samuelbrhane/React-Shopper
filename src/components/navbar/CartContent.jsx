import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const CartContent = () => (
  <NavLink
    to="/cart"
    className={({ isActive }) =>
      isActive ? "link cartLink active" : "link cartLink"
    }
  >
    <p>Cart </p>
    <FaShoppingCart />
    <p className="absolute top-[-5px] right-[-10px]">1</p>
  </NavLink>
);

export default CartContent;
