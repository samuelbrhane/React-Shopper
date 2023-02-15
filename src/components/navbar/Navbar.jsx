import React, { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import RightBtns from "./RightBtn";
import NavLinks from "./NavLinks";
import CartContent from "./CartContent";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useDispatch } from "react-redux";
import { ACTIVE_USER } from "../../redux/slice/authSlice";
import { Link } from "react-router-dom";

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
    <nav className="z-[100] px-2 md:px-4 lg:px-12 fixed top-0 left-0 right-0 h-[60px] md:h-[70px] flex justify-between items-center text-white bg-blue-400">
      <Link
        to="/"
        className="text-2xl md:text-xl lg:text-3xl font-bold md:mr-2"
      >
        Shoppers
      </Link>

      <div className="md:hidden">
        <CartContent />
      </div>

      <HiMenuAlt3
        className="z-40 text-2xl cursor-pointer md:hidden"
        onClick={() => setShowMenu(!showMenu)}
      />

      <div className={`${showMenu ? "menuContents show" : "menuContents"}`}>
        <NavLinks direction="row" />
        <RightBtns />
      </div>

      <div className="hidden md:flex items-center">
        <NavLinks />
      </div>
      <div className="hidden md:flex items-center">
        <div className="md:mr-6 lg:mr-10">
          <CartContent />
        </div>

        <RightBtns />
      </div>
    </nav>
  );
};

export default Navbar;
