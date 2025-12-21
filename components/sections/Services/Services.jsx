"use client";

import { useState } from "react";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const ServiceCard = ({ icon, title, index, services }) => (
    <div className="relative border border-black/10 bg-white dark:bg-gray-800 p-6 pt-24 w-70 rounded-md">
      <div className="">
        <i
          className={`uil ${icon} block text-[2rem] text-gray-900 dark:text-white mb-4`}
        ></i>
        <h3 className="text-lg font-medium mb-4">
          {title.split(" ")[0]} <br />{" "}
          {title.split(" ")[1] || title.split(" ")[2]}
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
            Specialized in building robust and scalable solutions with modern
            technologies
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

  const servicesData = [
    {
      icon: "uil-browser",
      title: "Frontend Development",
      services: [
        "Build responsive and interactive user interfaces with React.js and Next.js",
        "Implement state management using Redux, Context API, and Zustand",
        "Create reusable components with modern CSS frameworks (Tailwind CSS, Material-UI)",
        "Optimize performance with code splitting, lazy loading, and SEO best practices",
        "Develop cross-browser compatible applications with pixel-perfect designs",
      ],
    },
    {
      icon: "uil-server",
      title: "Backend Development",
      services: [
        "Design and develop RESTful APIs and GraphQL services with Node.js and Express.js",
        "Implement secure authentication and authorization using JWT and OAuth",
        "Build scalable microservices architecture with proper error handling",
        "Integrate third-party APIs and payment gateways (Stripe, PayPal)",
        "Optimize server performance with caching strategies and load balancing",
      ],
    },
    {
      icon: "uil-database",
      title: "Database  DevOps",
      services: [
        "Design and optimize MongoDB schemas with aggregation pipelines and indexing",
        "Work with SQL databases (PostgreSQL, MySQL) for relational data modeling",
        "Implement database migrations, backups, and disaster recovery strategies",
        "Deploy applications on cloud platforms (AWS, Vercel, Netlify, Heroku)",
        "Set up CI/CD pipelines, Docker containerization, and monitoring tools",
      ],
    },
  ];

  return (
    <section className="py-20" id="service">
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-2">
        Services
      </h2>
      <span className="block text-center text-sm text-gray-600 dark:text-gray-400 mb-16">
        What I Offer as a MERN Stack Developer
      </span>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-items-center max-w-225 mx-auto">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              index={index + 1}
              services={service.services}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
