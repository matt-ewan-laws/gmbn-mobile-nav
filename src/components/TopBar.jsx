import React, { useState } from "react";
import Logo from "./Logo";
import Hamburger from "./Hamburger";

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between bg-psn-red py-4">
      <div className="w-[98px]"></div>
      <div className="w-[98px]">
        <Logo />
      </div>
      <div className="flex justify-end w-[98px] pr-2">
        <div className="relative w-10">
          <div
            className={`menu-circle absolute top-1/2 left-1/2 bg-white rounded-full
                        -translate-x-1/2 -translate-y-1/2 pointer-events-none
                        ${isMenuOpen ? "menu-circle-expand " : ""}`}
          ></div>
          <Hamburger
            isOpen={isMenuOpen}
            handleClick={() => setIsMenuOpen((current) => !current)}
          />
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
