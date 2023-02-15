import React, { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import RightBtns from "./RightBtn";
import NavLinks from "./NavLinks";
import CartContent from "./CartContent";
import { onAuthStateChanged } from "firebase/auth";
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
      <div className="px-4 mt-1 flex space-between items-center tex-white">
        <div>
          <h1 className="text-xl md:text-2xl">Shoppers</h1>
        </div>
        <div className="hidden md:inline">
          <NavLinks />
        </div>
        <div className="hidden md:inline">
          <RightBtns />
        </div>
        <div className="md:hidden">
          <div className="flex text-white sm:gap-5 sm:font-xl gap-3 text-lg">
            <CartContent />
            <HiMenuAlt3
              className="z-40 text-2xl cursor-pointer text-[#06235c]"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
          {showMenu && (
            <div className="z-30 fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.2)]"></div>
          )}
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
