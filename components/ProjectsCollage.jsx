import React, { useState } from "react";
import * as seed from "../seed";
// import "./ProjectsCollage.css";
import styles from "@/styles/Projects.module.css";
import {
  allProjects,
  featuredProjects,
  filterProjectsByType,
  filterProjectsBySkill,
} from "../utilities/helpers";

export default function ProjectsCollage() {
  const [projectFilter, setProjectFilter] = useState({
    filter: featuredProjects(),
    header: "Featured",
  });

  const categoryButtonsByType = () => {
    const categories = [
      { category: "Featured", filter: featuredProjects() },
      { category: "All", filter: allProjects() },
      {
        category: "Tooling",
        filter: filterProjectsByType("tooling", seed.projects),
      },
      {
        category: "Lab Work",
        filter: filterProjectsByType("lab", seed.projects),
      },
    ];

    return (
      <div className={styles.category_container}>
        <h4>By Category</h4>
        <div className={styles.options_container}>
          {categories.map((c) => (
            <button
              key={c.category}
              className={styles.filter_button}
              onClick={() =>
                setProjectFilter({ filter: c.filter, header: c.category })
              }
            >
              {c.category}
            </button>
          ))}
        </div>
      </div>
    );
  };
  const categoryButtonsBySkill = () => {
    const categories = [
      { category: "By Language", data: seed.programmingLanguages },
      { category: "By Framework", data: seed.frameworks },
    ];

    return (
      <>
        {categories.map((c) => (
          <div key={c.category} className={styles.category_container}>
            <h4>{c.category}</h4>
            <div className={styles.options_container}>
              {c.data.map((s) => (
                <button
                  key={s.skill}
                  className={styles.filter_button}
                  onClick={() =>
                    setProjectFilter({
                      filter: filterProjectsBySkill(s.skill, c.category),
                      header: s.skill,
                    })
                  }
                >
                  {s.skill}
                </button>
              ))}
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div id={styles.projects} className={styles.projects_page}>
      <h4>What I&apos;ve Worked On</h4>
      {/* <h5>Filter By:</h5> */}
      <div className={styles.filter_container}>
        {categoryButtonsByType()}
        {categoryButtonsBySkill()}
      </div>
      <div className={styles.projects_container}>
        <div className={styles.collage_container}>
          <h5>
            Viewing: {projectFilter.header} ({projectFilter.filter.length}/
            {allProjects().length})
          </h5>
          <div className={styles.card_container}>{projectFilter.filter}</div>
        </div>
      </div>
    </div>
  );
}
