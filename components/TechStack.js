import React from "react";
import Image from "next/image";
import { skills } from "@/seed.js";
import { bgHeader } from "@/lib/customs/tailwindstyles.js";

const useful = skills.filter((item) => item.priority === "useful");
const main = skills.filter((item) => item.priority === "main");
const alternative = skills.filter((item) => item.priority === "alternative");
const essential = skills.filter((item) => item.priority === "essential");

export default function TechStack() {
  console.log(bgHeader);

  const renderSkillList = (skillList, heading) => (
    <>
      <h3
        className={`mb-2 font-sans text-2xl font-bold uppercase tracking-widest`}
      >
        {heading}
      </h3>
      <div className="mx-auto mb-10 flex max-w-6xl flex-wrap justify-center">
        {skillList.map((skill) => (
          <div
            key={skill.skill}
            className="m-1 mb:m-5 flex flex-col items-center justify-center rounded-3xl p-2 bg-slate-50/50 hover:shadow-2xl md:m-3 md:p-5"
          >
            <Image
              src={skill.img}
              width={100}
              height={100}
              className="h-20 w-20 object-contain transition delay-150 duration-300 ease-in-out hover:-translate-y-1  hover:scale-110"
            />
            <span className="text-center text-lg md:text-base ">
              {skill.skill}
            </span>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div id="skills" className="p-3 md:p-10">
      <h2 className="mb-10 w-full px-4 text-center text-4xl font-bold uppercase tracking-widest text-blue-500">
        My Toolkit &#128187;{" "}
      </h2>
      {renderSkillList(main, "My specialties!")}
      {renderSkillList(alternative, "I also love using...")}
      {renderSkillList(essential, "Can't forget the essentials!")}
      {renderSkillList(useful, "These come in handy!")}
    </div>
  );
}
