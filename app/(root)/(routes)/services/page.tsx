import React from "react";
import Service from "./components/Service";

const ServicesPage = () => {
  const services = [
    {
      name: "Set top box services",
      image: "/service2.png",
      description: "Tata sky set top box and accessories available",
      price: 1000,
    },
    {
      name: "Inverter and batteries",
      image: "/service1.png",
      description: "Get Luminuous invertors and batteries",
      price: 10000,
    },
    {
      name: "New SIM activation and Mobile recharges",
      image: "/telecom-operators.png",
      description: "Get a new SIM activated in 5 minutes!",
      price: 100
    },
    {
      name: "Printout and PhotoCopy",
      image: "/service4.jpg",
      description: "",
    },
  ];
return (
  <div className="flex justify-center items-center flex-col gap-5 py-10 ">
    <h1 className="text-3xl text-neutral-800">
      Explore our Services
    </h1>
    {services.map((service, index) => (
      <Service service={service} key={index} />
    ))}
  </div>
);
};

export default ServicesPage;
