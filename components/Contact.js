import { useState } from "react";
import Link from "next/link";
import GitHubIcon from "@/public/social-icons/github/github-original.svg";
import LinkedInIcon from "@/public/social-icons/linkedin/linkedin-original.svg";
import EmailIcon from "@/public/email.svg";
import Image from "next/image";
import NextIcon from "@/public/dev-icons/nextjs/nextjs-original.svg";
import ReactIcon from "@/public/dev-icons/react/react-original.svg";
import VercelIcon from "@/public/favicon.ico";
import BlobI from "@/public/blob-scene-haikei.svg";

const Socials = () => {
  return (
    <>
      <Link
        href="https://www.linkedin.com/in/ralph-tungol/"
        target="_blank"
        className="mx-3  transition delay-150 duration-300 ease-in-out hover:-translate-y-1  hover:scale-110"
        rel="noopener noreferrer"
      >
        <Image src={LinkedInIcon} width={50} />
      </Link>
      <Link
        href="mailto:rarttungol@gmail.com"
        target="_blank"
        className="hover:scale-120  mx-3 transition delay-150 duration-300 ease-in-out  hover:-translate-y-1"
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

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("pending");

    try {
      const response = await fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("success");
        setForm({
          name: "",
          subject: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  // const isFormValid =
  //   name && subject && email && message && email.includes("@");
  return (
    <form className="md:w-1/2" onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          id="name"
          type="text"
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <input
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          id="subject"
          type="text"
          placeholder="Subject"
          name="subject"
          value={form.subject}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <input
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          id="email"
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <textarea
          className="block w-full resize-none rounded-md border border-gray-300 p-2 text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          id="message"
          name="message"
          rows="5"
          placeholder="Your message"
          value={form.message}
          onChange={handleInputChange}
          required
          style={{ resize: "vertical" }}
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <button
          className={`focus:shadow-outline rounded bg-indigo-500 py-2 px-4 font-bold uppercase text-white focus:outline-none
                `}
          // ${isFormValid ? "" : "cursor-not-allowed opacity-50"}
          type="submit"
          // disabled={!isFormValid || status === "pending"}
        >
          {status === "pending" ? "Sending..." : "Send Message"}
        </button>
        {status === "error" && (
          <p className="text-sm italic text-red-500">Something went wrong.</p>
        )}
        {status === "success" && (
          <p className="text-sm italic text-green-500">
            Message sent successfully.
          </p>
        )}
      </div>
    </form>
  );
};

const PoweredBy = () => {
  return (
    <>
      <p>This portfolio is powered by:</p>
      <div className="ml-2 flex flex-row items-center">
        <Image
          width={100}
          height={100}
          className="mr-1 h-10 w-10"
          src={NextIcon}
          alt="placeholder1"
        />
        <Image
          width={100}
          height={100}
          className="mr-1 h-10 w-10"
          src={ReactIcon}
          alt="placeholder2"
        />
        <Image
          width={100}
          height={100}
          className="mr-1 h-10 w-10"
          src={VercelIcon}
          alt="placeholder3"
        />
      </div>
    </>
  );
};

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col bg-gradient-to-r from-green-400 to-blue-500"
    >
          
      <div className="grid-flow-row grid-cols-3 md:grid ">
        <div className="col-span-1 p-10 ">
          <h2 className=" my-4 mb-2 rounded-xl text-2xl font-bold">
            Get in Touch!
          </h2>
          <p className="my-4">
            If you ever want to talk about all things tech, or share each
            other&apos;s experiences getting into software development, or just
            want to say hi - hit me up! &darr;
          </p>
          <div className="flex justify-center py-5">
            <Socials />
          </div>
        </div>
        <div className="col-span-2 px-10 pb-10 md:my-4 md:pt-10">
          <ContactForm />
        </div>
      </div>

      <div className="flex flex-col justify-between bg-gradient-to-r from-green-400 to-blue-500 p-4 drop-shadow-2xl md:flex-row">
        <div className="font-bold uppercase">
          <p>Ralph Tu&#241;gol {new Date().getFullYear()}</p>
        </div>
        <div className="flex flex-row items-center font-bold uppercase">
          <PoweredBy />
        </div>
      </div>
    </div>
  );
}
