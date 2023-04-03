import React from "react";

const Hamburger = ({ isOpen, handleClick }) => (
  <button onClick={handleClick} className="w-10 flex flex-col gap-2">
    <div
      className={`transition-all relative rounded-full w-full h-1
                  ${isOpen ? "rotate-45 top-3 bg-psn-red" : "bg-white"}`}
    ></div>
    <div
      className={`transition-all rounded-full w-full h-1
                     ${
                       isOpen
                         ? "opacity-0 bg-psn-red -translate-x-24 "
                         : "bg-white"
                     }`}
    ></div>
    <div
      className={`transition-all relative rounded-full w-full h-1
                  ${isOpen ? "-rotate-45 -top-3 bg-psn-red" : "bg-white"}`}
    ></div>
  </button>
);

export default Hamburger;
