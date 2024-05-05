import React from "react";
import Service from "./components/Service";

const ServicesPage = () => {
  const services = [
    {
      name: "Inverter and batteries",
      image: "/service1.png",
      description: "Get Luminuous invertors and batteries",
      price: 10000,
    },
    {
      name: "Set top box services",
      image: "/service2.png",
      description: "Tata sky set top box and accessories available",
      price: 1000,
    },
    {
      name: "New SIM activation and Mobile recharges",
      image: "/telecom-operators.png",
      description: "Get a new SIM activated in 5 minutes!",
      price: 100,
    },
    {
      name: "Printout and PhotoCopy",
      image: "/service4.jpg",
      description: "Photocopy of all size papers A3,A4,A5,A6... available",
    },
  ];
  return (
    <div className="flex justify-center items-center flex-col gap-10 py-10 w-full px-10 ">
      <h1 className="drop-shadow-md text-3xl text-neutral-800">Explore our Services</h1>
      {/* <div className="
        grid
        sm:grid-cols-2
        grid-cols-1
      "> */}
      {services.map((service, index) => (
        <Service service={service} key={index} />
      ))}
      {/* </div> */}
    </div>
  );
};

export default ServicesPage;
