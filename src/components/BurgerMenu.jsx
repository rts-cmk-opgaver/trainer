import Navigation from "../components/Navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";

import React, { useState } from "react";

const BurgerMenu = ({ menuIconColor }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      {!isOpen ? (
        <HiMenuAlt3
          className="text-3xl cursor-pointer z-50"
          style={{ color: menuIconColor }}
          onClick={toggleMenu}
        />
      ) : (
        <div className="fixed inset-0 bg-white z-40">
          <HiX
            className="text-3xl cursor-pointer text-gray-500 z-50 absolute top-10 right-10"
            onClick={toggleMenu}
          />
          <Navigation onClose={toggleMenu} />
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
