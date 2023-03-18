import { useState } from "react";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Image
                src="/profile-picture.jpg"
                alt="profile-picture"
                width={100}
                height={100}
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Ralph Tu&#241;gol
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Full-Stack Software Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
