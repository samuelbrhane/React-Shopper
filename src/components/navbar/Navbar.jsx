import React, { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import RightBtns from "./RightBtn";
import NavLinks from "./NavLinks";
import CartContent from "./CartContent";
import { onAuthStateChanged } from "firebase/auth";
import "./navbar.scss";
import { auth } from "../../firebase/config";
import { useDispatch } from "react-redux";
import { ACTIVE_USER } from "../../redux/slice/authSlice";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          ACTIVE_USER({
            userEmail: user.email,
            userId: user.uid,
          })
        );
      }
    });
  }, [dispatch]);

  return (
    <nav>
      <div className="navContainer">
        <div className="navLeft">
          <div className="navLogo">
            <h1 className="logoText">Shoppers</h1>
          </div>
        </div>
        <div className="navCenter">
          <NavLinks />
        </div>
        <div className="navRight">
          <RightBtns />
        </div>
        <div className="menu">
          <div className="menuContainer">
            <CartContent />
            <HiMenuAlt3
              className="menuIcon"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
          {showMenu && <div className="menuShade"></div>}
          <div className={`${showMenu ? "menuContents show" : "menuContents"}`}>
            <NavLinks cartContent={false} />
            <RightBtns />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
