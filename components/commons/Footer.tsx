import React from "react";
import QuickLinks from "./QuickLinks";
import ContactLinks from "./ContactLinks";
import Timings from "./Timings";
import { Copyright } from "lucide-react";

const Footer = () => {
  return (
    <div
      className="
      bg-black
      text-white
      shadow-inner
      shadow-neutral-300
      items-center
      gap-5
      flex
      flex-col  
      h-[15rem] 
      justify-center"
    >
      <div
        className="
        flex
        gap-20
        "
      >
        <QuickLinks />
        <ContactLinks />
        <Timings />
      </div>
      <div
        className="
        flex
        gap-1
        text-sm
        text-neutral-500
        items-center
        "
      >
        <Copyright size={15} /> Friends Electronics @2024
      </div>
    </div>
  );
};

export default Footer;
