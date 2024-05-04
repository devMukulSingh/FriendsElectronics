"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathName = usePathname();
  const navLinks = [
    {
      name: "Home",
      link: "/",
      isActive: pathName.endsWith("/"),
    },
    {
      name: "Our products",
      link: "/products",
      isActive: pathName.endsWith("/products"),
    },
    {
      name: "Our services",
      link: "/services",
      isActive: pathName.endsWith("/products"),
    },
    {
      name: "Contact us",
      link: "/contact",
      isActive: pathName.endsWith("/products"),
    },
  ];
  return (
    <div className="flex gap-10 justify-center w-5/6">
      {navLinks.map((item, index) => (
        <Link
          className="text-neutral-800
                    hover:underline
                    transition-transform
                     font-semibold 
                     text-md  
                     sm:text-lg
                     whitespace-nowrap
                     "
          key={index}
          href={item.link}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
