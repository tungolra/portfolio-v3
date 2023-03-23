import Image from "next/image";
import NextIcon from "@/public/dev-icons/nextjs/nextjs-original.svg";
import ReactIcon from "@/public/dev-icons/react/react-original.svg";
import VercelIcon from "@/public/favicon.ico";
import { Socials } from "@/lib/custom";
import { useForm, ValidationError } from "@formspree/react";

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
          className="focus:shadow-outline rounded bg-indigo-500 py-2 px-4 font-bold uppercase text-white focus:outline-none"
          type="submit"
          disabled={state.submitting}
        >
          Send Message
        </button>
      </div>
    </form>
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
          <h2 className=" my-4 mb-2 w-full rounded-xl text-2xl text-2xl font-bold text-blue-700 md:text-left">
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
