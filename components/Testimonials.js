import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

const recommendations = [
  {
    name: "John Smith",
    title: "CEO",
    company: "ABC Inc.",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Jane Doe",
    title: "CTO",
    company: "XYZ Corp.",
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    name: "David Lee",
    title: "COO",
    company: "123 Co.",
    quote:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
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
    fade: true ,
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
    <div className="mx-auto max-w-2xl lg:max-w-4xl lg:py-20">
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
      <div className="mt-4 text-center p-5">Next slide in {countdown}s</div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="flex justify-center">
      <SimpleSlider />
    </section>
  );
}
