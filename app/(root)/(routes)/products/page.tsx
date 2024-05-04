import React from "react";
import ProductCard from "./components/ProductCard";

const ProductPage = () => {
  const products = [
    {
      name: "Feature phones",
      price: 1000,
      image: "/featurePhone.jpg",
    },
    {
      name: "Earphones and Headphones",
      price: 100,
      image: "/earphones.jpg",
    },
    {
      name: "Data cables",
      price: 50,
      image: "/datacables.jpg",
    },
    {
      name: "LED bulbs",
      price: 100,
      image: "/led.jpg",
    },
    {
      name: "Chargers",
      price: 100,
      image: "/chargers.jpg",
    },
  ];
  return (
    <div className="flex p-5 flex-col items-center gap-5 ">
      <h1 className="font-semibold text-xl sm:text-2xl text-neutral-700 ">
        Explore our Products
      </h1>
      <div
        className="
          w-2/3
          grid
          gap-10
          lg:grid-cols-3
          md:grid-cols-2
          grid-cols-1
        "
      >
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  ); 
};

export default ProductPage;
