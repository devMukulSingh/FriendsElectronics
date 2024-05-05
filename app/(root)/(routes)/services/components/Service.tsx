'use client'
import Image from 'next/image';
import React, { FC } from 'react'
import { motion } from "framer-motion"

interface ServiceProps {
  service: {
    image: string;
    name: string;
    description: string;
    price?:number
  };
}

const Service:FC<ServiceProps> = ({
    service
}) => {
  return (


    <motion.div
      whileHover={{ scale:0.95}}
      initial={{ opacity:0, x:-100 }}
      animate={{ opacity:1, x:0 }}
      transition={{ duration:0.3}}
      className="
        w-2/3
        flex 
        gap-5 
        p-5 
        border 
        justify-start 
        bg-white
        shadow-lg
        rounded-md
        hover:opacity-70
        "
    >
      <figure className="relative w-[35rem] h-[13rem] ">
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
        {
            service.price && 
            <h1 className="font-semibold">
          Starting from <span className='font-semibold text-lg'>₹{service.price}</span>
        </h1>
        }
      </div>
          </motion.div>
  );
}

export default Service