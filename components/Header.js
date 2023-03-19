import { useEffect, useState } from "react";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { education } from "@/seed";

function SimpleSlider() {
  var settings = {
    dots: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container mx-auto max-w-2xl lg:max-w-4xl lg:py-20">
      <Slider {...settings}>
        <div>
          <p>
            High-performing Software Developer with a passion for creating
            innovative and robust web applications. As a former professional
            within the finance industry and a multidisciplinary degree, I have
            5+ years of professional experience collaborating within
            cross-functional teams and 4+ years of rigorous, research-driven,
            human-centric academic experiences.
          </p>
        </div>
        <div>
          <ul>
            {education.map((item) => (
              <li key={item.id}>
                <span>{item.school}</span>
                <span>{item.subj}</span>
                <span>{item.date}</span>
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
    <header className="flex h-screen flex-col md:max-w-full md:flex-row">
      <div className="flex flex-col justify-center bg-gray-500 p-10 text-center text-white md:w-1/2">
        <h2>Ralph Tu&#241;gol</h2>
        <p>Full-Stack Software Developer</p>
        <SimpleSlider />
        <div>
          <button className="rounded-full border px-4 py-1 text-sm font-semibold hover:border-transparent hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Get in touch!
          </button>
        </div>
      </div>
      <div className="flex items-end justify-end bg-black md:w-1/2">
        <Image
          src="/profile-picture-nobgd.png"
          alt="profile-picture"
          width={350}
          height={350}
        />
      </div>
    </header>
  );
}
