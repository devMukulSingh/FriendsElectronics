"use client";
import Image from "next/image";
import React, { FC, useRef } from "react";
import { motion, useScroll } from "framer-motion";

interface ServiceProps {
  service: {
    image: string;
    name: string;
    description: string;
    price?: number;
  };
}

const Service: FC<ServiceProps> = ({ service }) => {
  return (
      <motion.div
        viewport={{ margin:'-130px', once:true}}
        initial={{ opacity: 0, x: -200,  }}
        whileInView={{  opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="
      p-5
      border-2
      hover:shadow-md     
        w-full
        flex 
        gap-5 
        justify-center 
        bg-white
        rounded-xl
        hover:opacity-70
        "
      >
        <figure
          className="relative 
        w-[50rem] 
        h-[20rem] 
        "
        >
          <Image
            className="object-contain object-left"
            fill
            src={service.image}
            alt="serviceimg"
          />
        </figure>
        <div className="flex flex-col gap-5 items-center justify-center">
          <h1
            className="
          text-center 
          sm:text-3xl
          text-2xl
          font-semibold 
          text-neutral-800
          "
          >
            {service.name}
          </h1>
          <h1 className="text-lg text-neutral-500 text-center">
            {service.description}
          </h1>
          {service.price && (
            <h1 className="font-semibold">
              Starting from{" "}
              <span className="font-semibold text-lg">₹{service.price}</span>
            </h1>
          )}
        </div>
      </motion.div>
  );
};

export default Service;
