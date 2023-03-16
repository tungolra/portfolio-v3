import React, { useState } from "react";
import Image from "next/image";
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
      <div className={styles.aboutMe}>
        <p>
          High-performing Software Developer with a passion for creating
          innovative and robust web applications. With over 3 years of education
          in programming in computer science, both through the University of
          Toronto, completing General Assembly Canada’s Software Engineering
          certification, and ongoing online certifications, I now specialize in
          ReactJS and NodeJS with JavaScript as my main programming language. As
          a former professional within the finance industry with a
          multidisciplinary education, I am confident in my ability to
          collaborate within cross-functional teams to solve complex problems that
          create an impactful and meaningful client experience.
        </p>
      </div>
    );
  }

  function aboutThisPortfolio() {
    return (
      <div className={styles.aboutMe}>
        <p>
          This is a React app that demonstrates the use of custom components,
          React hooks, and Redux. Rather than using native components or styling
          frameworks, I&apos;ve made it a point to use pure CSS, vanilla JS, and
          HTML to showcase foundational skills.
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
      <div className={styles.myEducation}>
        {seed.education.map((e) => (
          <div key={e.img} className={styles.eduDetails}>
            <div>
              <Image
                width={50}
                height={50}
                className={styles.eduImg}
                src={e.img}
                alt="education-eblems"
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
            className={styles.sectionSelect}
            onClick={() => setContainerDisplay(chooseDisplay(s))}
          >
            {s}
          </button>
        ))}
      </>
    );
  };
  return (
    <div className={styles.meContainer}>
      <div className={styles.sectionContainer}>{section()}</div>
      <div className={styles.containerDisplay}>{containerDisplay}</div>
    </div>
  );
}
