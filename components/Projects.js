import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from "@/lib/data/seed";
import Image from "next/image";

const featured = projects.filter((project) => project.type === "project");
const preview = projects.filter((project) => project.type === "preview");

const Badge = ({ children }) => {
  return (
    <span className="mx-1 inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
      {children}
    </span>
  );
};

function SimpleSlider({ project }) {
  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="max-w-2xl lg:max-w-4xl ">
      <Slider {...settings}>
        <div className="px-5">
          <h3 className="mb-2 text-2xl font-bold uppercase tracking-widest">
            About This Project
          </h3>
          <p className="mb-6 text-justify text-lg text-gray-600 ">
            {project.summary}
          </p>
          <div className="mb-4">
            {project.skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </div>
        <div className="px-5">
          <h3 className="mb-2 text-2xl font-bold uppercase tracking-widest">
            Responsibilities
          </h3>
          <ul className="mb-6 text-lg text-gray-600">
            {project.responsibilities.map((responsibility, idx) => (
              <li
                key={idx}
                className={`text-left ${
                  idx % 2 == 1 ? "text-slate-500" : "text-gray-700"
                }`}
              >
                - {responsibility}
              </li>
            ))}
          </ul>
        </div>
      </Slider>
    </div>
  );
}

const renderProjects = (projectList) =>
  projectList.map((project, index) => (
    <>
      <div
        key={project.name}
        className="mb-10 grid grid-cols-1 rounded-3xl bg-slate-50/50 p-5 lg:grid-cols-2 xl:gap-x-12"
      >
        <div
          className={`relative mb-5 flex flex-col items-center justify-center lg:col-span-1 ${
            index % 2 == 0 ? "" : "lg:order-last"
          }`}
        >
          <h3 className="mb-2 font-sans text-2xl font-bold uppercase tracking-widest">
            {project.name}
          </h3>
          <Image
            width={500}
            height={500}
            src={project.img}
            alt={project.name}
            className="aspect-video w-full rounded-2xl border-2 border-solid border-gray-400 object-cover" // take out borders
          />
          <div className="absolute z-10 hidden h-full w-full items-center justify-center bg-black bg-opacity-70">
            <a
              isDisabled={project.site === "[offline]"}
              target="_blank"
              rel="noopener noreferrer"
              href={project.site}
              className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            >
              Visit Site
            </a>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            >
              View Code
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between lg:col-span-1">
          <SimpleSlider project={project} />
          <div className="flex justify-between md:justify-around">
            <a
              href={project.site}
              isDisabled={project.site === "[offline]"}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            >
              Visit Site
            </a>

            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </>
  ));

export default function Projects() {
  const [page, setPage] = useState(featured);

  const toggleShowFeatured = () => {
    setPage(!page);
  };

  return (
    <div id="projects" className=" text-center ">
      <div className="mb-8 ">
        <h2 className="mb-10 w-full px-4 text-center text-4xl font-bold uppercase tracking-widest text-blue-500">
          Featured Projects
        </h2>
        <div className="flex items-center justify-center ">
          <button
            className={`mr-4 text-xl font-bold hover:text-blue-700 ${
              page ? "font-bold text-blue-500" : "text-gray-400"
            }`}
            onClick={toggleShowFeatured}
          >
            Featured
          </button>
          <button
            className={`text-xl font-bold hover:text-gray-700 ${
              !page ? "text-gray-700" : "text-gray-400"
            }`}
            onClick={toggleShowFeatured}
          >
            Preview
          </button>
        </div>
      </div>
      <div className="mb-8  p-2 md:mx-4 md:p-4 ">
        {page ? renderProjects(featured) : renderProjects(preview)}
      </div>
    </div>
  );
}
