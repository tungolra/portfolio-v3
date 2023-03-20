import React from "react";

const services = [
  "Full Stack Development",
  "Scaling Applications",
  "Responsive Web & UI/UX Design",
  "Debugging",
  "Building Web Apps",
  "System Design/Architecture",
];

const colours = [
  "bg-gradient-to-r from-red-300 to-red-700",
  "bg-gradient-to-r from-orange-300 to-orange-700",
  "bg-gradient-to-r from-yellow-300 to-yellow-700",
  "bg-gradient-to-r from-green-300 to-green-700",
  "bg-gradient-to-r from-blue-300 to-blue-700",
  "bg-gradient-to-r from-indigo-300 to-indigo-700",
  "bg-gradient-to-r from-purple-300 to-purple-700",
];

export default function Services() {
  return (
    <div id="services" className=" py-10">
      <h2 className="mb-10 w-full px-4 text-4xl font-bold uppercase text-blue-500 text-center tracking-widest">Services</h2>
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center">
        {services.map((service, idx) => (
          <div
            key={service}
            className={`${colours[idx]} my-5 mx-2 p-5 flex mb:h-64 mb:w-64 items-center justify-center rounded-full border-2 border-solid hover:shadow-lg md:m-3 md:h-56 md:w-56`}
          >
            <span className="font-bold text-white text-center text-lg md:text-base">{service}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
