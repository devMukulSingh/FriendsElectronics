import Image from 'next/image';
import React, { FC } from 'react'

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
    <div
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
        transition
        hover:scale-95
        "
    >
      <figure className="relative w-[35rem] h-[15rem] ">
        <Image
          className="object-contain object-left-center"
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
    </div>
  );
}

export default Service