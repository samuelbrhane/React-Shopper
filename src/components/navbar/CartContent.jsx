import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./navbar.scss";

const CartContent = () => (
  <NavLink
    to="/cart"
    className={({ isActive }) =>
      isActive ? "link cartLink active" : "link cartLink"
    }
  >
    <p>Cart </p>
    <FaShoppingCart />
    <p className="cartAmount">1</p>
  </NavLink>
);

export default CartContent;
