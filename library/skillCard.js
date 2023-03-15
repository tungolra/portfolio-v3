import styles from "@/styles/Skill.module.css";

export function skillCards(str, obj) {
  return (
    <section className={styles.skills}>
      <h4>{str}</h4>
      <div className={styles.skills_wrapper}>
        {obj.map((skill, idx) => (
          <div key={idx} className={styles.skill_item_container}>
            <div className={styles.skill_item}>
              <img
                className={styles.tech_icons}
                src={skill?.img}
                alt={skill.skill}
              />
            </div>
            <div className={styles.skill_item_details}>
              <div>
                <strong>{skill?.skill}</strong>
              </div>
              {/* <div className={styles.skill_subtype}>#{skill?.subtype}</div> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
