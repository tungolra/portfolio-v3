import { skills } from "@/lib/data/seed.js";
import { renderSkillList } from "@/lib/renders/mapData";

const useful = skills.filter((item) => item.priority === "useful");
const main = skills.filter((item) => item.priority === "main");
const alternative = skills.filter((item) => item.priority === "alternative");
const essential = skills.filter((item) => item.priority === "essential");

export default function TechStack() {
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
