import styles from "@/styles/Skill.module.css";

export function skillIcons(obj) {
  return (
    <div className={styles.skills_item}>
      {obj.map((skill, idx) => (
        <img
          key={idx}
          className="tech-icons"
          src={skill.img}
          alt={skill.skill}
        />
      ))}
    </div>
  );
}
