import React from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";

const Navbar = () => {
  return (
    <div
      className="
      shadow-text-neutral-900
        bg-slate-900
        text-white
        fixed
        top-0 
        overflow-hidden
        z-50
        w-screen
        shadow-xl 
        flex
        items-center 
        p-5 
        h-[5rem]
        "
    >
      <div className="w-1/6">
        <Link href="/">Friends Electronics</Link>
      </div>
      <NavLinks />
    </div>
  );
};

export default Navbar;
