import { NavLink } from "react-router-dom";
import "./navbar.scss";
const links = [
  "Home",
  "New Arrival",
  "Special Sell",
  "Women",
  "Men",
  "Children",
  "Accessories",
];

const NavLinks = () => (
  <div className="navLinks">
    {links.map((link, index) => {
      return (
        <NavLink
          to={`${link === "Home" ? "/" : "/category/" + index}`}
          className={({ isActive }) => (isActive ? "link active" : "link")}
          key={index}
        >
          {link}
        </NavLink>
      );
    })}
  </div>
);

export default NavLinks;
