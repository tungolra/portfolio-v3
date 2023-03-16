import styles from "@/styles/ProjectsCollage.module.css";
import Image from "next/image";

export function skillIcons(obj) {
  return (
    <div className={styles.skillsItem}>
      {obj.map((skill, idx) => (
        <Image
          style={{
            objectFit: "contain",
            aspectRatio: "1/1",
            borderRadius: "50%",
            margin: "1vmin",
            border: "1px solid white",
          }}
          height={50}
          width={50}
          key={idx}
          className="techIcons"
          src={skill.img}
          alt={skill.skill}
        />
      ))}
    </div>
  );
}
