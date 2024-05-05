"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

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
      isActive: pathName.endsWith("/services"),
    },
    {
      name: "Contact us",
      link: "/contact",
      isActive: pathName.endsWith("/contact"),
    },
  ];
  return (
    <div className="flex gap-10 justify-center w-5/6">
      {navLinks.map((item, index) => (
        <motion.button
          key={index}
          // transition={{ duration:0.4}}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7 }}
        >
          <Link
            className={`
          ${item.isActive ? "font-bold" : ""}
          text-white
          text-md  
          sm:text-lg
          whitespace-nowrap
          `}
            key={index}
            href={item.link}
          >
            {item.name}
          </Link>
        </motion.button>
      ))}
    </div>
  );
};

export default NavLinks;
