import React, { useState } from "react";
import * as seed from "@/seed";
import styles from "@/styles/ProjectsCollage.module.css";
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
      <div className={styles.categoryContainer}>
        <h4>By Category</h4>
        <div className={styles.optionsContainer}>
          {categories.map((c) => (
            <button
              key={c.category}
              className={styles.filterButton}
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
          <div key={c.category} className={styles.categoryContainer}>
            <h4>{c.category}</h4>
            <div className={styles.optionsContainer}>
              {c.data.map((s) => (
                <button
                  key={s.skill}
                  className={styles.filterButton}
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
    <div id="projects" className={styles.projectsPage}>
      <h4>What I&apos;ve Worked On</h4>
      {/* <h5>Filter By:</h5> */}
      <div className={styles.filterContainer}>
        {categoryButtonsByType()}
        {categoryButtonsBySkill()}
      </div>
      <div className={styles.projectsContainer}>
        <div className={styles.collageContainer}>
          <h5>
            Viewing: {projectFilter.header} ({projectFilter.filter.length}/
            {allProjects().length})
          </h5>
          <div className={styles.cardContainer}>{projectFilter.filter}</div>
        </div>
      </div>
    </div>
  );
}
