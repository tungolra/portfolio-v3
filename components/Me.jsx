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
          innovative and robust web applications. As a former professional
          within the finance industry and a multidisciplinary degree, I have 5+
          years of professional experience collaborating within cross-functional
          teams and 4+ years of rigorous, research-driven, human-centric
          academic experiences.
        </p>
        <p>
          Took a career break after 2017 to travel overseas and broaden my skill
          set through post-secondary education, completing General Assembly
          Canada’s Software Engineering certification, and ongoing online
          certifications in programming. I excel in fast-paced, mission-driven
          environments where I can solve complex problems and create supportive
          networks.
        </p>
      </div>
    );
  }

  function aboutThisPortfolio() {
    return (
      <div className={styles.aboutMe}>
        <p>
          This portfolio is powered by NextJS where I demonstrate the use of
          custom components, React hooks, Dynamic routing with Next, pure CSS,
          vanilla JS, and HTML to showcase foundational skills in Frontend
          development. I've chosen NextJS to build this portfolio to leverage
          its server-side rendering for rapid page loads and SEO optimization.
        </p>
        <p>
          I've created a responsive webpage that uses advanced CSS techniques
          while employing best software architecture and design practices. Under
          the hood, I've extensively used functional and object-oriented
          programming to create dynamically-rendered components that minimizes
          repetitive code.
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

  function section() {
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
  }
  return (
    <div className={styles.meContainer}>
      <div className={styles.sectionContainer}>{section()}</div>
      <div className={`${styles.containerDisplay}`}>{containerDisplay}</div>
    </div>
  );
}
