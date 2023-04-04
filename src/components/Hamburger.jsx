import React from "react";

const Hamburger = ({ isOpen, handleClick }) => (
  <button onClick={handleClick} className="w-8 flex flex-col gap-[6px]">
    <div
      className={`transition-all duration-500 relative rounded-full w-full h-1
                  ${isOpen ? "rotate-45 top-2 bg-psn-red" : "top-0 bg-white"}`}
    ></div>
    <div
      className={`transition-all duration-500 rounded-full w-full h-1
                     ${
                       isOpen
                         ? "opacity-0 bg-psn-red -translate-x-24 "
                         : "bg-white"
                     }`}
    ></div>
    <div
      className={`transition-all duration-500 relative rounded-full w-full h-1
                  ${
                    isOpen ? "-rotate-45 -top-3 bg-psn-red" : "top-0 bg-white"
                  }`}
    ></div>
  </button>
);

export default Hamburger;
