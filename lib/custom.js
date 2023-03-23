import Link from "next/link";
import Image from "next/image";
import GitHubIcon from "@/public/social-icons/github/github-original.svg";
import LinkedInIcon from "@/public/social-icons/linkedin/linkedin-original.svg";
import EmailIcon from "@/public/social-icons/gmail/gmail.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Socials = () => {
  return (
    <>
      <Link
        href="https://www.linkedin.com/in/ralph-tungol/"
        target="_blank"
        className="mx-3 transition delay-150 duration-300 ease-in-out hover:-translate-y-1  hover:scale-110"
        rel="noopener noreferrer"
      >
        <Image src={LinkedInIcon} width={50} alt="LinkedIn" />
      </Link>
      <Link
        href="mailto:rarttungol@gmail.com"
        target="_blank"
        className="mx-3 transition delay-150 duration-300 ease-in-out hover:-translate-y-1  hover:scale-110"
        rel="noopener noreferrer"
      >
        <Image src={EmailIcon} width={50} alt="Email" />
      </Link>
      <Link
        href="https://github.com/tungolra"
        target="_blank"
        className="mx-3 transition delay-150 duration-300 ease-in-out hover:-translate-y-1  hover:scale-110"
        rel="noopener noreferrer"
      >
        <Image src={GitHubIcon} width={50} alt="GitHub" />
      </Link>
    </>
  );
};

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
