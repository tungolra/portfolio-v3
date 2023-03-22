import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { education } from "@/lib/data/seed";
import BlobI from "@/public/blob-scene-haikei.svg";
import { Socials } from "@/lib/renders/mapData";

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
    <div className="mb-10 md:mb-2">
      <Slider {...settings}>
        <div className="flex items-center ">
          <p className="mb-3 rounded-2xl bg-slate-50/50 p-3 text-left  shadow-lg">
            Thanks for stopping by! I&apos;m Ralph, a{" "}
            <span className="font-bold text-blue-500">software developer</span>{" "}
            with a background in the{" "}
            <span className="font-bold text-blue-500">
              social sciences and finance industry
            </span>
            !
          </p>
          <p className="mb-3 rounded-2xl bg-slate-50/50 p-3 text-left  shadow-lg">
            I&apos;m passionate about building{" "}
            <span className="font-bold text-blue-500">web applications</span>{" "}
            that are fast, responsive, and accessible.
          </p>
          <p className="mb-3 rounded-2xl bg-slate-50/50 p-3 text-left  shadow-lg">
            I&apos;m based in the{" "}
            <span className="font-bold text-blue-500">Toronto, Canada 🇨🇦</span>{" "}
            and always down for a quick coffee &#9749; or beer &#127867;!
          </p>
          <p className="mb-3 rounded-2xl bg-slate-50/50 p-3 text-left  shadow-lg">
            I love sports &#127938; &#127936; &#127952; &#127947;, travelling
            &#128745;, and hiking &#127956; &#127957; - to name a few!
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
      <div className="my-10 flex flex-col justify-center  px-10 text-center md:w-1/2 ">
        <h2 className="w-full px-4 text-5xl font-bold uppercase tracking-widest text-blue-900 md:text-left">
          Ralph Tu&#241;gol
        </h2>
        <h3 className=" w-full px-4 text-2xl font-bold uppercase text-blue-700 md:text-left">
          Full-Stack Software Developer
        </h3>
        <div className="container mx-auto max-w-2xl lg:max-w-4xl lg:py-20">
          <SimpleSlider />
        </div>
        <div className="rounded-3xl bg-slate-50/50 ">
          <span className=" font-bold text-blue-700 ">Let&apos;s Connect!</span>
          <div className="flex justify-center p-3 ">
            <Socials />
          </div>
        </div>
      </div>
      <div className="flex h-1/2 items-end justify-end md:h-full md:w-1/2">
        <Image
          src={BlobI}
          className="absolute -z-40 hidden h-full w-full object-cover md:block"
        />
        <Image
          src="/profile-picture-nobgd.png"
          alt="profile-picture"
          width={500}
          height={500}
          className="absolute -z-30 object-scale-down object-right-bottom "
        />
      </div>
    </header>
  );
}
