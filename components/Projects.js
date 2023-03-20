import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Badge = ({ children }) => {
  return (
    <span className="mx-1 inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
      {children}
    </span>
  );
};

const projects = [
  {
    name: "E-Commerce Store",
    img: "https://i.imgur.com/o0iFlPj.png",
    pages: [
      "https://i.imgur.com/o0iFlPj.png",
      "https://i.imgur.com/nO3lRwS.png",
      "https://i.imgur.com/MXacxPq.png",
      "https://i.imgur.com/GxaoMBd.png",
      "https://i.imgur.com/7Wq8OMz.png",
    ],
    summary:
      "This is a test e-commerce website that uses Typescript and Angular. Stripe was integrated to process payments. Users can view and filter through a catalogue of products from Fakestore API, add and update their cart of purchases, and process payments.",

    responsibilities: [
      "Handled client-side scripting using Angular components.",
      "Populated pages using Fakestore API.",
      "Styled pages using Tailwind to create responsive UI/UX.",
      "Integrated Stripe to process payments.",
      "Configure server for post requests to Stripe API.",
    ],
    repo: "https://github.com/tungolra/angular-ts-ecommerce-example",
    site: "[offline]",
    skills: ["Tailwind", "Angular", "Typescript", "Node.js", "HTML5"],
    type: "preview",
  },
  {
    name: "Movie Matters",
    img: "https://i.imgur.com/RjWIyoh.png",
    pages: [
      "https://i.imgur.com/RjWIyoh.png",
      "https://i.imgur.com/JSc7139.png",
      "https://i.imgur.com/BqtcDx6.png",
    ],
    summary:
      "Movie Matters is a movie review web application where users can view the latest movies and watch their trailers. Users can input reviews for each movie.",
    responsibilities: [
      "Frontend Development with React",
      "Backend Development with Spring Boot and Java",
    ],
    repo: "https://github.com/tungolra/spring-react-movies",
    site: "[offline]",
    skills: [
      "HTML5",
      "CSS3",
      "Material UI",
      "Bootstrap",
      "MongoDB",
      "SpringBoot",
      "React",
      "Java",
      "Node.js",
      "Javascript",
      "Maven",
    ],
    type: "preview",
  },
  {
    name: "Wealthy-Mi",
    img: "https://i.imgur.com/SWCYvDG.gif",
    pages: [
      "https://i.imgur.com/SWCYvDG.gif",
      "https://i.imgur.com/SWCYvDG.gif",
      "https://i.imgur.com/SWCYvDG.gif",
    ],
    summary:
      "Wealthy Mi is a personal finance application created as development exercise for using a modern MERN-stack (MongoDB, ExpressJS, React, NodeJS) and implementing Agile workflow practices. Users can manage their assets and expenses, create financial goals, and forecast when they can achieve them through their dashboard with our data visualization tools.",
    responsibilities: [
      "Server and database configuration using Mongoose and MongoDB.",
      "Build out RESTful APIs and associated CRUD functions using NodeJS.",
      "Set up Redux store and slicers to make client-side API calls to retrieve user data.",
      "Utilized JSON Web Token (JWT) authorization to validate user credentials.",
      "Contribute to frontend development of UI/UX features using Bootstrap, CSS/SCSS for a responsive, modern web page.",
      "Collaborated to create sensible Agile workflows, weekly SCRUMs, and architect a CI/CD pipeline managed using Git/GitHub.",
    ],
    repo: "https://github.com/tungolra/wealthy-mi",
    site: "https://wealthy-mi.herokuapp.com/",
    skills: [
      "HTML5",
      "CSS3",
      "SCSS",
      "Bootstrap",
      "MongoDB",
      "Express",
      "React",
      "Redux",
      "Node.js",
      "Javascript",
    ],
    type: "project",
  },
  {
    name: "Chatter[Box]",
    img: "https://i.imgur.com/rnFmcto.gif",
    pages: [
      "https://i.imgur.com/tn2KTog.gif",
      "https://i.imgur.com/aXjkvsn.png",
      "https://i.imgur.com/Y0UKqRK.png",
      "https://i.imgur.com/GMz55U4.png",
    ],
    summary:
      "An instant messaging single-page application that features real-time communication between users. Developed using MongoDB, ExpressJS, ReactJS, and NodeJS (MERN) by our team of 4 developers. Taking a mobile-first approach, we utilized HTML, JSX, CSS, and Material UI to create a modern and user-friendly UI/UX.",
    responsibilities: [
      "As project lead, I organized team tasks using a Notion board, established and managed CI/CD pipeline using Github.",
      "Connected websockets using Socket.io and established routing and CRUD function to make API calls to MongoDB.",
      "Decided on schema design and data entity relationships for Mongoose models.",
      "Utilized JSON Web Token (JWT) authorization to validate user credentials.",
      "Handled client-side scripting using React hooks and API calls to populate browser views.",
      "Deployed site to Heroku.",
    ],
    repo: "https://github.com/tungolra/mern-project",
    site: "https://chatterbox-sei-55.herokuapp.com/",
    skills: [
      "HTML5",
      "CSS3",
      "Material UI",
      "Socket.io",
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Javascript",
      "AWS S3",
    ],
    type: "project",
  },
  {
    name: "StudySmart",
    img: "https://i.imgur.com/7zzCl4k.gif",
    pages: [
      "https://i.imgur.com/qlTOdFG.png",
      "https://i.imgur.com/gYS7ySQ.png",
      "https://i.imgur.com/XyFQc7I.png",
      "https://i.imgur.com/eFMEuMT.png",
      "https://i.imgur.com/PHEGXl1.png",
      "https://i.imgur.com/FjwcwzV.png",
      "https://i.imgur.com/oPXKffZ.png",
      "https://i.imgur.com/C0WK9S1.png",
    ],
    summary:
      "An automated flashcard system to provide an online study tool that leverages the power of spaced repetition learning. A personal favourite that combines my interest in game-based learning and programming. Users can create collections of flashcards that automates the intervals for which a card is to be reviewed. Individually developed using MongoDB, ExpressJS, and NodeJS. Taking a mobile-first approach, I utilized HTML and CSS to create a simple and intuitive UI/UX.",
    responsibilities: [
      "Established routing and CRUD functions to make API calls to MongoDB.",
      "Utilized Google OAuth 2.0 to validate user credentials.",
      "Handled client-side scripting to manipulate DOM using Vanilla JavaScript and make API calls to server.",
      "Styled webpage using HTML and CSS.",
      "Configured database and server.",
      "Deployed site to Heroku",
    ],
    repo: "https://github.com/tungolra/StudySmart",
    site: "[offline]",
    skills: ["MongoDB", "Javascript", "Express", "HTML5", "CSS3", "Node.js"],
    type: "project",
  },
  {
    name: "Othello",
    img: "https://i.imgur.com/FEbqK0L.gif",
    pages: [
      "https://i.imgur.com/FEbqK0L.gif",
      "https://i.imgur.com/FEbqK0L.gif",
    ],
    summary:
      "Othello, AKA Reversi, is a multiplayer, strategy board game where players aim to have the most pieces on the board before it is filled. My app features a random-bot that single-player users can play against. Developed using Vanilla JavaScript, this independent project showcases DOM manipulation, functional programming, modularization, and complex game logic. Utilized HTML and pure CSS to style a modern-classic UI/UX.",
    responsibilities: [
      "Established client-side scripting for all event listeners, event handlers, dynamically creating HTML elements, and functional game logic.",
      "Styled webpage using HTML and pure CSS to create a responsive webpage.",
      "Deployed site to GitHub pages",
    ],
    repo: "https://github.com/tungolra/Othello-js-app",
    site: "https://tungolra.github.io/Othello-js-app/",
    skills: ["Javascript", "CSS3", "HTML5"],
    type: "project",
  },
];
const featured = projects.filter((project) => project.type === "project");
const preview = projects.filter((project) => project.type === "preview");

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
    <div className="container mx-auto max-w-2xl lg:max-w-4xl lg:py-20 ">
      <Slider {...settings}>
        <div>
          <h3 className="mb-2 text-2xl font-bold uppercase tracking-widest">About This Project</h3>
          <p className="mb-6 text-lg text-gray-600 text-justify">{project.summary}</p>
          <div className="mb-4">
            {project.skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-2 text-2xl font-bold uppercase tracking-widest">Responsibilities</h3>
          <ul className="mb-6 text-lg text-gray-600">
            {project.responsibilities.map((responsibility, idx) => (
              <li
                key={idx}
                className={`list-disc text-left ${
                  idx % 2 == 1 ? "text-slate-500" : "text-gray-700"
                }`}
              >
                {responsibility}
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
    <div
      key={project.name}
      className="mb-8 rounded-3xl bg-slate-50/50 p-2 md:mx-4 md:p-4  "
    >
      <div className="grid grid-cols-1 gap-x-8 lg:grid-cols-2 xl:gap-x-12">
        <div
          className={`relative flex flex-col items-center justify-center lg:col-span-1 ${
            index % 2 == 0 ? "" : "lg:order-last"
          }`}
        >
          <h3 className="mb-2 font-sans text-2xl font-bold tracking-widest uppercase ">
            {project.name}
          </h3>
          <img
            src={project.img}
            alt={project.name}
            className="aspect-video h-auto max-w-full rounded-2xl border-2 border-solid object-contain p-1"
          />
          <div className="mt-2 grid grid-cols-2 gap-x-2">
            {project.pages.slice(0, 2).map((page) => (
              <div
                key={page}
                className="relative flex flex-col items-center justify-center"
              >
                <img
                  src={page}
                  alt={project.name}
                  className="aspect-[2/1] h-auto max-w-full rounded-2xl border-2 border-solid object-contain p-1"
                />
              </div>
            ))}
          </div>
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
    </div>
  ));

export default function Projects() {
  const [page, setPage] = useState(featured);

  const toggleShowFeatured = () => {
    setPage(!page);
  };

  return (
    <div id="projects" className="py-20 text-center ">
      <div className="mb-8 ">
        <h2 className="mb-4 text-4xl font-bold">Featured Projects</h2>
        <div className="flex items-center justify-center">
          <button
            className={`mr-4 font-medium hover:text-blue-700 ${
              page ? "font-bold text-blue-500" : "text-gray-700"
            }`}
            onClick={toggleShowFeatured}
          >
            Featured
          </button>
          <button
            className={`font-medium hover:text-gray-700 ${
              !page ? "text-gray-700" : "text-gray-400"
            }`}
            onClick={toggleShowFeatured}
          >
            Preview
          </button>
        </div>
      </div>
      {page ? renderProjects(featured) : renderProjects(preview)}
    </div>
  );
}
