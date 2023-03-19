import React from "react";

const services = [
  "Full Stack Development",
  "Scaling Applications",
  "Responsive Web & UI/UX Design",
  "Object-oriented & Functional Programming",
  "Project Management",
  "Full Stack Development",
  "Scaling Applications",
  "Responsive Web & UI/UX Design",

];

export default function Services() {
  return (
    <div className="bg-gray-100 py-10">
      <h2 className="mb-10 text-center text-4xl">Services</h2>
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center md:justify-between">
        {services.map((service) => (
          <div
            key={service}
            className="m-5 flex h-64 w-64 items-center justify-center rounded-full bg-white transition-all duration-300 hover:rotate-180 hover:shadow-lg md:m-3 md:h-56 md:w-56"
          >
            <span className="text-center text-lg md:text-base">{service}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
