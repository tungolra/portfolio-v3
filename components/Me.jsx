import React, { useState } from "react";
import Image from "next/image";
// import "./Home.css";
import * as seed from "../seed.js";
import styles from "@/styles/Home.module.css";

export default function Me() {
  const [containerDisplay, setContainerDisplay] = useState(aboutMe());

  const sections = ["About Me", "About This Portfolio", "My Education"];

  function chooseDisplay(str) {
    if (str === sections[0]) return aboutMe;
    if (str === sections[1]) return aboutThisPortfolio;
    if (str === sections[2]) return myEducation;
  }

  function aboutMe() {
    return (
      <div className={styles.about_me}>
        <p>
          I&apos;m a junior full stack web developer whose looking for mentorship in
          his next role. I have a strong background using the latest tech
          stacks, specializing in MongoDB, ExpressJS, NodeJS, and ReactJS (MERN)
          as my preferred tech stack.
        </p>
        <p>
          I continue to develop my own projects to learn more technologies and
          understand their applications for various business solutions.
        </p>
      </div>
    );
  }

  function aboutThisPortfolio() {
    return (
      <div className={styles.about_me}>
        <p>
          This is a React app that demonstrates the use of custom components,
          React hooks, and Redux. Rather than using native components or styling
          frameworks, I&apos;ve made it a point to use pure CSS, vanilla JS, and HTML
          to showcase foundational skills.
        </p>
        <p>
          This application is under development to add the following features:
          <ul>
            <li>
              CRUD functions to add new Projects and Skills as I continue
              learning new languages and technologies.
            </li>
            <li>Blog Page to document my learning process.</li>
          </ul>
        </p>
      </div>
    );
  }

  function myEducation() {
    return (
      <div className={styles.my_education}>
        {seed.education.map((e) => (
          <div key={e.img} className={styles.edu_details}>
            <div>
              <img
                width={100}
                height={24}
                className={styles.edu_img}
                src={e.img}
                alt="X"
              />
            </div>
            <div>
              <h4>{e.school}</h4>
              <p>
                {e.subj} | {e.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const section = () => {
    return (
      <>
        {sections.map((s) => (
          <button
            key={s}
            className={[styles.filter_button, styles.section_select]}
            onClick={() => setContainerDisplay(chooseDisplay(s))}
          >
            {s}
          </button>
        ))}
      </>
    );
  };
  return (
    <div className={styles.me_container}>
      <div className={styles.section_container}>{section()}</div>
      <div className={styles.container_display}>{containerDisplay}</div>
    </div>
  );
}
