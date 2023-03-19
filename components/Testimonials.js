import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

const recommendations = [
  {
    name: "Justin Chapman",
    title: "Software Engineering Instructional Associate",
    company: "General Assembly Canada",
    quote:
      "His ability to work well under pressure and manage his time effectively enabled him to complete projects on time and to a high standard. He collaborated well with his teammates, making sure that he took the time to assist and support whenever possible. His strong work ethic and self-motivation, coupled with his communication skills and collaborative efforts, would make Ralph an excellent addition to any team.",
  },
  {
    name: "Martin Nicola",
    title: "Associate Instructor",
    company: "General Assembly Canada",
    quote:
      "As his co-instructor, I can speak with conviction and say Ralph was consistently among the top students in his class and one of the hardest working students that I’ve ever come across. \n Among his attributes, he has strong attention to detail, Ralph is able to work well with others and his analytical skills and productivity are far beyond expectation. Do not pass up on this outstanding candidate!",
  },
];

function SimpleSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [countdown, setCountdown] = useState(7);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((countdown) => countdown - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => {
      setCurrentSlide(index);
      setCountdown(7);
    },
  };
  return (
    <div className="container mx-auto max-w-2xl lg:max-w-4xl lg:py-20">
      <Slider {...settings}>
        {recommendations.map((recommendation) => (
          <figure className="mt-10" key={recommendation.name}>
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>{recommendation.quote}</p>
            </blockquote>
            <figcaption className="mt-10">
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">
                  {recommendation.name}
                </div>

                <div className="text-gray-600">{`${recommendation.title} of ${recommendation.company}`}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </Slider>
      <div className="mt-4 p-5 text-center">Next slide in {countdown}s</div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="recommendations" className="flex justify-center">
      <SimpleSlider />
    </section>
  );
}
