import styles from "@/styles/ProjectsCollage.module.css";

export function skillIcons(obj) {
  return (
    <div className={styles.skillsItem}>
      {obj.map((skill, idx) => (
        <img
          key={idx}
          className="techIcons"
          src={skill.img}
          alt={skill.skill}
        />
      ))}
    </div>
  );
}
