import { useState } from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex h-screen flex-col md:max-w-full md:flex-row">
      <div className="flex flex-col justify-center bg-gray-500 p-10 text-center text-white md:w-1/2">
        <h2>Ralph Tu&#241;gol</h2>
        <p>Full-Stack Software Developer</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          sapiente distinctio nisi modi vero officia nulla impedit voluptas
          soluta alias quia rem culpa laboriosam iusto? Nihil temporibus
          deserunt perferendis iusto!
        </p>
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
