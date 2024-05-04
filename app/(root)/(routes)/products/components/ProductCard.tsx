import Image from 'next/image';
import React, { FC } from 'react'

interface ProductCardProps{
    product:{
        name:string,
        price:number,
        image:string
    }
}

const ProductCard:FC<ProductCardProps> = ({ product }) => {
  return (
    <div
      className="h-[18rem]
    cursor-pointer
    hover:opacity-60
    transition
     flex 
     flex-col 
     gap-5 
     p-5 
     items-center
     bg-white rounded-md
     shadow-xl
     "
    >
      <h1 className="text-lg font-semibold">{product.name}</h1>
      <figure
        className="
            relative 
            w-[10rem]
            h-[12rem]
            "
      >
        <Image
          src={product.image}
          alt="productImg"
          className="object-contain"
          fill
        />
      </figure>
      <h1>
        Starting from <span className='text-lg font-semibold'>₹{product.price}</span>
      </h1>
    </div>
  );
};

export default ProductCard