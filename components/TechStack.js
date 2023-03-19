import React from "react";

export const skills = [
  {
    type: "Languages",
    subtype: "Markup Language",
    skill: "HTML5",
    img: "https://i.imgur.com/xMMSqAc.png",
    priority: "main",
  },
  {
    type: "Languages",
    subtype: "Programming Language",
    skill: "Typescript",
    img: "https://i.imgur.com/HPlbDDQ.png",
    priority: "alternative",
  },
  {
    type: "Languages",
    subtype: "Programming Language",
    skill: "Java",
    img: "https://i.imgur.com/YJjKbt4.png",
    priority: "alternative",
  },
  {
    type: "Languages",
    subtype: "Styling Language",
    skill: "CSS3",
    img: "https://i.imgur.com/jTNhsgg.png",
    priority: "main",
  },
  {
    type: "Languages",
    subtype: "Styling Framework",
    skill: "Tailwind",
    img: "https://i.imgur.com/0Q0d39h.png",
    priority: "main",
  },
  {
    type: "Languages",
    subtype: "Styling Language",
    skill: "SCSS",
    img: "https://i.imgur.com/jkKieiK.png",
    priority: "alternative",
  },
  {
    type: "Technologies",
    subtype: "Styling Framework",
    skill: "Materialize",
    img: "https://i.imgur.com/kLtV7aP.png",
    priority: "alternative",
  },
  {
    type: "Technologies",
    subtype: "Styling Framework",
    skill: "Material UI",
    img: "https://i.imgur.com/nQneTU6.png",
    priority: "alternative",
  },
  {
    type: "Technologies",
    subtype: "Styling Language",
    skill: "Bootstrap",
    img: "https://i.imgur.com/NsKingN.png",
    priority: "main",
  },
  {
    type: "Technologies",
    subtype: "Framework",
    skill: "Angular",
    img: "https://i.imgur.com/yldqsTl.jpg",
    priority: "alternative",
  },
  {
    type: "Technologies",
    subtype: "Framework",
    skill: "SpringBoot",
    img: "https://i.imgur.com/fozEzEY.png",
    priority: "alternative",
  },
  {
    type: "Technologies",
    subtype: "Framework",
    skill: "jQuery",
    img: "https://i.imgur.com/dltSXkL.png",
    priority: "alternative",
  },
  {
    type: "Technologies",
    subtype: "Framework",
    skill: "React",
    img: "https://i.imgur.com/I9A7c4b.png",
    priority: "main",
  },
  {
    type: "Technologies",
    subtype: "Framework",
    skill: "Redux",
    img: "https://i.imgur.com/B5jiJo7.png",
    priority: "useful",
  },
  {
    type: "Technologies",
    subtype: "Framework",
    skill: "MobX",
    img: "https://i.imgur.com/B5jiJo7.png",
    priority: "useful",
  },
  {
    type: "Technologies",
    subtype: "Framework",
    skill: "Node.js",
    img: "https://i.imgur.com/SqYTp68.png",
    priority: "main",
  },
  {
    type: "Languages",
    subtype: "Programming Language",
    skill: "JavaScript",
    img: "https://i.imgur.com/ckfbsq5.png",
    priority: "main",
  },
  {
    type: "Languages",
    subtype: "Programming Language",
    skill: "SQL",
    img: "https://i.imgur.com/7ImtZip.png",
    priority: "alternative",
  },
  {
    type: "Technologies",
    subtype: "Database",
    skill: "MongoDB",
    img: "https://i.imgur.com/a0RoQoD.png",
    priority: "main",
  },
  {
    type: "Technologies",
    subtype: "Library",
    skill: "Mongoose",
    img: "https://i.imgur.com/BPb25o6.png",
    priority: "main",
  },
  {
    type: "Technologies",
    subtype: "Database",
    skill: "PostgreSQL",
    img: "https://i.imgur.com/kqTfCNX.png",
    priority: "alternative",
  },
  {
    type: "Technologies",
    subtype: "Cloud Platform",
    skill: "Heroku",
    img: "https://i.imgur.com/TQ5qUGp.png",
    priority: "essential",
  },
  {
    type: "Technologies",
    subtype: "Cloud Platform",
    skill: "Vercel",
    img: "https://i.imgur.com/TQ5qUGp.png",
    priority: "essential",
  },
  {
    type: "Technologies",
    subtype: "Version Control Software",
    skill: "Git",
    img: "https://i.imgur.com/P6KIeEm.png",
    priority: "essential",
  },
  {
    type: "Technologies",
    subtype: "Database",
    skill: "AWS S3",
    img: "https://i.imgur.com/n3fTnNv.png",
    priority: "alternative",
  },
  {
    type: "Technologies",
    subtype: "Framework",
    skill: "Django",
    img: "https://i.imgur.com/CTDcDh6.png",
    priority: "alternative",
  },
  {
    type: "Languages",
    subtype: "Programming Language",
    skill: "Python",
    img: "https://i.imgur.com/ofIVvdH.png",
    priority: "alternative",
  },
  {
    type: "Technologies",
    subtype: "Framework",
    skill: "Express",
    img: "https://i.imgur.com/awaqvUm.png",
    priority: "main",
  },
  {
    type: "Technologies",
    subtype: "Framework",
    skill: "Next",
    img: "https://i.imgur.com/awaqvUm.png",
    priority: "main",
  },
  {
    type: "Technologies",
    subtype: "Library",
    skill: "Socket.io",
    img: "https://i.imgur.com/oCCYHpS.png",
    priority: "useful",
  },
  {
    type: "Technologies",
    subtype: "Library",
    skill: "Stripe.io",
    img: "https://i.imgur.com/oCCYHpS.png",
    priority: "useful",
  },
];

const useful = skills.filter((item) => item.priority === "useful");
const main = skills.filter((item) => item.priority === "main");
const alternative = skills.filter((item) => item.priority === "alternative");
const essential = skills.filter((item) => item.priority === "essential");

export default function TechStack() {

  const renderSkillList = (skillList, heading) => (
    <>
      <h3 className="mb-10 text-center text-2xl">{heading}</h3>
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center md:justify-between">
        {skillList.map((skill) => (
          <div
            key={skill.skill}
            className="m-5 flex h-64 w-64 items-center justify-center rounded-full bg-white transition-all duration-300 hover:rotate-180 hover:shadow-lg md:m-3 md:h-56 md:w-56"
          >
            <span className="text-center text-lg md:text-base">
              {skill.skill}
            </span>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="bg-gray-100 py-10">
      <h2 className="mb-10 text-center text-4xl">TechStack</h2>
      {renderSkillList(main, "Main Tech Stack")}
    </div>
  );
}
