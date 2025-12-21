"use client";

import { useState } from "react";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const ServiceCard = ({ icon, title, index, services }) => (
    <div className="relative border border-black/10 bg-white dark:bg-gray-800 p-6 pt-24">
      <div>
        <i
          className={`uil ${icon} block text-[2rem] text-gray-900 dark:text-white mb-4`}
        ></i>
        <h3 className="text-lg font-medium mb-4">
          {title.split(" ")[0]} <br /> {title.split(" ")[1]}
        </h3>
      </div>

      <span
        className="text-gray-900 dark:text-white text-sm inline-flex items-center gap-1 cursor-pointer group"
        onClick={() => toggleTab(index)}
      >
        View More
        <i className="uil uil-arrow-right text-base transition-transform duration-300 group-hover:translate-x-1"></i>
      </span>

      <div
        className={`fixed inset-0 bg-black/50 z-1000 flex justify-center items-center px-4 transition-all duration-300 ${
          toggleState === index ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="w-full max-w-125 relative bg-white dark:bg-gray-800 py-18 px-10 rounded-3xl">
          <i
            className="uil uil-times absolute top-6 right-6 text-2xl text-gray-900 dark:text-white cursor-pointer"
            onClick={() => toggleTab(0)}
          ></i>

          <h3 className="text-center text-lg font-medium mb-4">{title}</h3>
          <p className="text-center text-sm px-14 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            dolorem laboriosam minima vero?
          </p>

          <ul className="grid gap-3">
            {services.map((service, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <i className="uil uil-check-circle text-gray-900 dark:text-white text-[1.1rem]"></i>
                <p className="text-sm">{service}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  const servicesList = [
    "I develop the User Interface",
    "I develop the Web page",
    "I develop the User UX elemet",
    "I desgin mockup",
    "I position your comapny mockup",
  ];

  return (
    <section className="py-20" id="service">
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-2">
        Services
      </h2>
      <span className="block text-center text-sm text-gray-600 dark:text-gray-400 mb-16">
        What i offers
      </span>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-items-center max-w-225 mx-auto">
          <ServiceCard
            icon="uil-web-grid"
            title="Product Designer"
            index={1}
            services={servicesList}
          />

          <ServiceCard
            icon="uil-arrow"
            title="UI/UX Designer"
            index={2}
            services={servicesList}
          />

          <ServiceCard
            icon="uil-edit"
            title="Visual Designer"
            index={3}
            services={servicesList}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
