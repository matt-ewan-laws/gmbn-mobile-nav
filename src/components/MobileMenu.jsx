import React, { useState } from "react";
import MagnifyingGlass from "./MagnifyingGlass";
import MobileMenuItem from "./MobileMenuItem";
import MobileMenuSocial from "./MobileMenuSocial";
import MobileMenuExternal from "./MobileMenuExternal";

import logoUrl from "../assets/logo-black.svg";
import youtubeLogoUrl from "../assets/youtube.png";

// This would come from the CMS
const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Video Categories",
    childrenLinks: [
      {
        title: "Dirt Shed Show",
        href: "/category/dirt-shed-show",
      },
      {
        title: "How To",
        href: "/category/how-to",
      },
      {
        title: "MTB Maintenance",
        href: "/category/mtb-maintenance",
      },
      {
        title: "Ask GMBN",
        href: "/category/ask-gmbn",
      },
      {
        title: "Top 10s",
        href: "/category/top-10s",
      },
      {
        title: "GMBN Tech",
        href: "/category/gmbn-tech",
      },
    ],
  },
  {
    title: "Presenters",
    childrenLinks: [
      {
        title: "Martyn Ashton",
        href: "/presenters/martyn-ashton",
      },
      {
        title: "Neil Donoghue",
        href: "/presenters",
      },
      {
        title: "Blake Samson",
        href: "/presenters",
      },
      {
        title: "Andrew Dodd",
        href: "/presenters",
      },
    ],
  },
];

const TopBar = ({ isMenuOpen }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <aside
      className={`fixed flex flex-col text-psn-red font-bold p-2 top-0 left-0 bg-white transition-all delay-500
                  w-full h-full
                         ${
                           isMenuOpen
                             ? "opacity-100"
                             : "pointer-events-none opacity-0"
                         }`}
    >
      <div className="relative flex items-center mb-8 w-[calc(100%-4rem)] ">
        <input
          type="text"
          placeholder="Search our videos"
          className={`rounded-full h-10 px-4 border-2 border-psn-red text-psn-red w-full transition-all`}
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />

        <div className="absolute right-4 w-6 h-6 text-psn-red">
          <MagnifyingGlass className="text-psn-red" />
        </div>
      </div>

      <ul className="px-4">
        {navLinks.map((item) => (
          <MobileMenuItem {...item} />
        ))}
      </ul>

      <div className="mt-auto">
        <div className="flex justify-between mb-2 p-2 text-black">
          <MobileMenuExternal
            title="Shop"
            href="/shop"
            imageUrl={logoUrl}
            alt="GMBN shop"
          />

          <MobileMenuExternal
            title="Subscribe"
            href="www.youtube.com"
            imageUrl={youtubeLogoUrl}
            alt="Subscribe to our YoutTube channel"
          />
        </div>

        <MobileMenuSocial />
      </div>
    </aside>
  );
};

export default TopBar;
