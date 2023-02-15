import { NavLink } from "react-router-dom";
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
  <div className="flex items-center md:gap-5 gap:3 text-[14px]">
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
