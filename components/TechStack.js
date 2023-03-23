import { skills } from "@/lib/data/seed.js";
import Image from "next/image";
const useful = skills.filter((item) => item.priority === "useful");
const main = skills.filter((item) => item.priority === "main");
const alternative = skills.filter((item) => item.priority === "alternative");
const essential = skills.filter((item) => item.priority === "essential");

const renderSkillList = (skillList, heading) => (
  <div className="mb-5 rounded-3xl bg-slate-50/50 p-2">
    <h3
      className={`mb-2 text-center font-sans text-2xl font-bold uppercase tracking-widest md:pl-5 md:pt-5 md:text-left`}
    >
      {heading}
    </h3>
    <div className="mx-auto mb-10 flex max-w-6xl flex-wrap justify-center">
      {skillList.map((skill) => (
        <div
          key={skill.skill}
          className="mb:m-5 m-1 flex flex-col items-center justify-center  rounded-3xl hover:shadow-2xl md:m-3  md:p-5"
        >
          <Image
            src={skill.img}
            width={100}
            height={100}
            className="h-20 w-20 object-contain transition delay-150 duration-300 ease-in-out hover:-translate-y-1  hover:scale-110"
            alt={skill.skill}
          />
          <span className="text-center text-lg md:text-base ">
            {skill.skill}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default function TechStack() {
  return (
    <div id="skills" className="mx-auto p-3 md:max-w-7xl md:p-10">
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
