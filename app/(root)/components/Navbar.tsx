import React from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";

const Navbar = () => {
  return (
    <div
      className="w-screen
        shadow-xl 
        flex
        items-center 
        bg-white 
        p-5 
        h-[5rem]"
    >
      <div className="w-1/6">
        <Link href="/">Friends Electronics</Link>
      </div>
      <NavLinks />
    </div>
  );
};

export default Navbar;
