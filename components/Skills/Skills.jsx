import React from "react";
import styles from "@/styles/Skill.module.css";
import * as seed from "../../seed.js";
import { skillCards } from "../../library/skillCard";

export default function Skills() {

  return (
    <div className={styles.skills_container}>
      <h3 id={styles.skills}>My Tech Stack</h3>
      <div className={styles.skill_sections}>
        {skillCards("Languages", seed.languages)}
        {skillCards("Technologies", seed.technologies)}
      </div>
    </div>
  );
}
