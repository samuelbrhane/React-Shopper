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

const NavLinks = ({ direction }) => (
  <div
    className={`flex items-center ${
      direction && "flex-col gap-6 mb-4"
    } md:gap-3 text-[14px]`}
  >
    {links.map((link, index) => {
      return (
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {
                  fontWeight: "bold",
                  backgroundColor: "#f2f3ff",
                  padding: "4px",
                  borderRadius: "2px",
                  color: "#000",
                }
              : undefined
          }
          to={`${link === "Home" ? "/" : "/category/" + index}`}
          className="whitespace-nowrap md:text-[12px] lg:text-sm"
          key={index}
        >
          {link}
        </NavLink>
      );
    })}
  </div>
);

export default NavLinks;
