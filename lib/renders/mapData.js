import Link from "next/link";
import Image from "next/image";
import GitHubIcon from "@/public/social-icons/github/github-original.svg";
import LinkedInIcon from "@/public/social-icons/linkedin/linkedin-original.svg";
import EmailIcon from "@/public/social-icons/gmail/gmail.svg";
import NextIcon from "@/public/dev-icons/nextjs/nextjs-original.svg";
import ReactIcon from "@/public/dev-icons/react/react-original.svg";
import VercelIcon from "@/public/favicon.ico";
import { useForm, ValidationError } from "@formspree/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from "@/lib/data/seed";

export const Socials = () => {
  return (
    <>
      <Link
        href="https://www.linkedin.com/in/ralph-tungol/"
        target="_blank"
        className="mx-3 transition delay-150 duration-300 ease-in-out hover:-translate-y-1  hover:scale-110"
        rel="noopener noreferrer"
      >
        <Image src={LinkedInIcon} width={50} />
      </Link>
      <Link
        href="mailto:rarttungol@gmail.com"
        target="_blank"
        className="hover:scale-120 mx-3 transition delay-150 duration-300 ease-in-out  hover:-translate-y-1"
        rel="noopener noreferrer"
      >
        <Image src={EmailIcon} width={50} />
      </Link>
      <Link
        href="https://github.com/tungolra"
        target="_blank"
        className="mx-3  transition delay-150 duration-300 ease-in-out hover:-translate-y-1  hover:scale-110"
        rel="noopener noreferrer"
      >
        <Image src={GitHubIcon} width={50} />
      </Link>
    </>
  );
};

export const PoweredBy = () => {
  return (
    <>
      <p>This portfolio is powered by:</p>
      <div className="ml-2 flex flex-row items-center">
        <Image
          width={100}
          height={100}
          className="mr-1 h-10 w-10"
          src={NextIcon}
          alt="NextIcon"
        />
        <Image
          width={100}
          height={100}
          className="mr-1 h-10 w-10"
          src={ReactIcon}
          alt="ReactIcon"
        />
        <Image
          width={100}
          height={100}
          className="mr-1 h-10 w-10"
          src={VercelIcon}
          alt="VercelIcon"
        />
      </div>
    </>
  );
};

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("mlekwnjg");
  if (state.succeeded) {
    return (
      <p className=" my-4 mb-2 w-full rounded-xl text-2xl text-2xl font-bold text-blue-700 md:text-left">
        Thanks for your email! I&apos;ll get back to you as soon as I can.
      </p>
    );
  }

  return (
    <form className="md:w-1/2" onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          id="name"
          type="text"
          placeholder="Name"
        />
      </div>
      <div className="mb-4">
        <input
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          id="email"
          type="email"
          placeholder="Email"
        />
      </div>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <div className="mb-4">
        <textarea
          className="block w-full resize-y rounded-md border border-gray-300 p-2 text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 md:resize"
          id="message"
          name="message"
          rows="5"
          placeholder="Your message"
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className={`focus:shadow-outline rounded bg-indigo-500 py-2 px-4 font-bold uppercase text-white focus:outline-none
                `}
          type="submit"
          disabled={state.submitting}
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export const renderSkillList = (skillList, heading) => (
  <div className="mb-5 rounded-3xl bg-slate-50/50 p-2">
    <h3 className="mb-2 pl-10 text-center text-2xl font-bold uppercase tracking-widest md:text-left">
      {heading}
    </h3>
    <div className="mx-auto mb-10 flex max-w-6xl flex-wrap justify-center">
      {skillList.map((skill) => (
        <div
          key={skill.skill}
          className="mb:m-5 m-1 flex flex-col items-center justify-center  hover:shadow-2xl md:m-3 md:p-5"
        >
          <Image
            src={skill.img}
            width={100}
            height={100}
            className="h-20 w-20 object-contain transition delay-150 duration-300 ease-in-out hover:-translate-y-1  hover:scale-110"
          />
          <span className="text-center text-lg md:text-base ">
            {skill.skill}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export const renderEducation = (data) => {
  return (
    <ul>
      {data.map((item) => (
        <li
          key={item.id}
          className="m-1 flex justify-between rounded-3xl bg-slate-50/50 px-4 py-1 align-middle"
        >
          <Image
            src={item.img}
            width={50}
            height={50}
            className="rounded-full object-contain "
          />

          <div className="flex flex-col text-right ">
            <span className="font-bold">{item.school}</span>
            <span className="text-sm">{item.subj}</span>
            <span className="text-xs italic">{item.date}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export const Badge = ({ children }) => {
  return (
    <span className="mx-1 inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
      {children}
    </span>
  );
};

export function ProjectSlider({ project }) {
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

export const projectButton = (url, text) => {
  return (
    <Link
      isDisabled={url === "[offline]"} // hardcoded based on data file
      target="_blank"
      rel="noopener noreferrer"
      href={url}
      className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 "
    >
      {text}
    </Link>
  );
};

export const renderProjects = (data) =>
  data.map((project, index) => (
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
          <h3 className="mb-2 text-2xl font-bold uppercase tracking-widest">
            {project.name}
          </h3>
          <Image
            width={500}
            height={500}
            src={project.img}
            alt={project.name}
            className=" aspect-video w-full rounded-2xl border-2 border-solid border-gray-400 object-cover" // take out borders
          />
          <div className="absolute z-10 hidden h-full w-full items-center justify-center bg-black bg-opacity-70">
            {projectButton(project.repo, "View Code")}
            {projectButton(project.repo, "View Site")}
          </div>
        </div>
        <div className="flex flex-col justify-between lg:col-span-1">
          <ProjectSlider project={project} />
          <div className="flex justify-between md:justify-around">
            {projectButton(project.repo, "View Code")}
            {projectButton(project.repo, "View Site")}
          </div>
        </div>
      </div>
    </>
  ));

export function TestimonialSlider({ data }) {
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
    <div className="container mx-auto max-w-2xl lg:max-w-4xl">
      <Slider {...settings}>
        {data.map((recommendation) => (
          <figure
            className="mb-8 rounded-3xl bg-slate-50/50 p-2 md:mx-4 md:p-4"
            key={recommendation.name}
          >
            <blockquote className="text-center text-xl leading-8 text-gray-900 sm:text-xl sm:leading-9">
              <p className="italic">&quot;{recommendation.quote}&quot;</p>
            </blockquote>
            <figcaption className="mt-10">
              <div className="mt-4 flex flex-col items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">
                  {recommendation.name}
                </div>

                <div className="text-gray-600">{`${recommendation.title} of ${recommendation.company}`}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </Slider>
    </div>
  );
}
