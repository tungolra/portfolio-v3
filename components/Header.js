import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { education } from "@/seed";
import GitHubIcon from "@/public/social-icons/github/github-original.svg";
import LinkedInIcon from "@/public/social-icons/linkedin/linkedin-original.svg";
import EmailIcon from "@/public/email.svg";
function SimpleSlider() {
  var settings = {
    dots: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "align-middle",
    arrows: false,
  };
  return (
    <div className="container  m-3 mx-auto max-w-2xl lg:max-w-4xl lg:py-20">
      <Slider {...settings}>
        <div className="flex items-center">
          <p className="rounded-2xl bg-slate-50/50 p-3 text-justify shadow-lg">
            High-performing Software Developer with a passion for creating
            innovative and robust web applications. <br /> As a former
            professional within the finance industry and a multidisciplinary
            degree, I have 5+ years of professional experience collaborating
            within cross-functional teams and 4+ years of rigorous,
            research-driven, human-centric academic experiences.
          </p>
        </div>
        <div>
          <ul>
            {education.map((item) => (
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
        </div>
      </Slider>
    </div>
  );
}

export default function Header() {
  return (
    <header className="z-10 flex h-screen flex-col md:max-w-full md:flex-row">
      <div className="flex flex-col justify-center  p-10 text-center md:w-1/2 ">
        <h2 className="w-full text-5xl font-bold uppercase tracking-widest md:text-left">
          Ralph Tu&#241;gol
        </h2>
        <h3 className="w-full text-2xl font-bold uppercase md:text-left">
          Full-Stack Software Developer
        </h3>
        <SimpleSlider />
        <div className="mt-5 rounded-3xl bg-slate-50/50">
          <span className=" font-bold ">Let&apos;s Connect!</span>
          <div className="flex justify-center p-3 ">
            <Link
              href="https://www.linkedin.com/in/ralph-tungol/"
              target="_blank"
              className="mx-3"
              rel="noopener noreferrer"
            >
              <Image src={LinkedInIcon} width={50} />
            </Link>
            <Link
              href="mailto:rarttungol@gmail.com"
              target="_blank"
              className="mx-3"
              rel="noopener noreferrer"
            >
              <Image src={EmailIcon} width={50} />
            </Link>
            <Link
              href="https://github.com/tungolra"
              target="_blank"
              className="mx-3"
              rel="noopener noreferrer"
            >
              <Image src={GitHubIcon} width={50} />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex h-1/2 items-end justify-end md:h-full md:w-1/2">
        <Image
          src="/profile-picture-nobgd.png"
          alt="profile-picture"
          width={350}
          height={350}
          className="absolute -z-10 object-contain object-scale-down object-right-bottom"
        />
      </div>
    </header>
  );
}
