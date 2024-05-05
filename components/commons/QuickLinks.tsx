import Link from "next/link";
import React from "react";

const QuickLinks = () => {
  const quickLinks = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Products",
      link: "/products",
    },
  ];
  return (
    <div>
      <ul className="flex flex-col text-sm gap-2 ">
        <li className="font-semibold text-lg">Quick Links</li>
        {quickLinks.map((link, index) => (
          <li
            key={index}
            className="hover:underline-offset-2 hover:underline transition-all"
          >
            <Link href={link.link} key={index}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
