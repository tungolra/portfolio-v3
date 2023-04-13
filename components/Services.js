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
  
  "bg-gradient-to-r from-blue-400 to-teal-700",
  "bg-gradient-to-r from-teal-400 to-indigo-700",
  "bg-gradient-to-r from-purple-400 to-blue-700",
];

export default function Services() {
  return (
    <div id="services" className=" py-10 ">
      <h2 className="fontTwo mb-10 w-full px-4 text-center text-4xl font-bold uppercase tracking-widest text-blue-500">
        Services
      </h2>
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center rounded-3xl bg-slate-50/50 p-2">
        {services.map((service, idx) => (
          <div
            key={service}
            className={`${colours[idx % 3]} mb:h-64 mb:w-64 my-5 mx-2 flex transform items-center justify-center rounded-full border-2 border-solid p-5 transition hover:scale-110 hover:shadow-lg md:m-3 md:h-56 md:w-56`}
          >
            <span className="fontFour text-center text-lg font-bold text-white md:text-base">
              {service}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
