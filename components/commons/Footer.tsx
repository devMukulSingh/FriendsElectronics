import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const quickLinks = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  const contacts = [
    {
      value: "friends007@gmail.com",
      icon: Mail
    },
    {
      value: "+91 817184007",
      icon:Phone
    },
  ];
  return (
    <div
      className="bg-white 
    items-center
    flex 
    gap-5 
    p-5 
    h-[15rem] 
    justify-center"
    >
      <div
        className="
        grid 
        grid-cols-2
        gap-5
        "
      >
        <ul className="flex flex-col gap-2">
          <li className="font-semibold text-lg">
            Quick Links
          </li>
          {quickLinks.map((link, index) => (
            <li className="hover:underline-offset-2 hover:underline transition-all">
              <Link href={link.link} key={index}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="
          flex
          flex-col
          gap-3
        ">
          <li className="text-lg font-semibold">
            Contact Us
          </li>
          {
            contacts.map( (contact,index) => (
              <li
                key={index} 
                className="flex gap-2">
                  <contact.icon/>
                  {contact.value}
              </li>
            ) )
          }
        </ul>

          <h1 className="text-semibold text-lg">
              Timings
          </h1>
          <h1>
            Monday-Sunday 9:00 AM to 8 PM
          </h1>

      </div>
    </div>
  );
};

export default Footer;
