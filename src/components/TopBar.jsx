import React, { useState } from "react";
import Hamburger from "./Hamburger";
import logoUrl from "../assets/logo.svg";
import MobileMenu from "./MobileMenu";

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex fixed top-0 left-0 w-full gap-2 px-2 items-center justify-between bg-psn-red py-4">
      <MobileMenu isMenuOpen={isMenuOpen} />

      <div className="w-[98px]">
        <img alt="GMBN" src={logoUrl} />
      </div>

      <div className="flex justify-end">
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
