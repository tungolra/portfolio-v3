import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Me from "../components/Me";
import MatrixBackground from "@/components/MatrixBackground";
import Skills from "@/components/Skills";
import ProjectsCollage from "@/components/ProjectsCollage";

import React from "react";
import Footer from "./Footer";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <MatrixBackground />
      <div className={styles.title}>
        <h3>Ralph Tu&#241;gol</h3>
        <h4>Full-Stack Software Developer</h4>
      </div>
    </div>
  );
}
function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutDetails}>
          <h4 className={styles.aboutTitle}>Welcome!</h4>
          <Image
            src="/profile-picture.jpg"
            alt="profile-picture"
            className={styles.profilePic}
            width={100}
            height={100}
            priority
            style={{
              // aspectRatio: "1/1",
              objectFit: "contain",
              height: "50vmin",
              width: "auto",
            }}
          />
        </div>
        <section className={styles.about}>
          <div className={styles.aboutCard}>
            <Me />
          </div>
        </section>
      </div>
    </div>
  );
}

export default function Welcome() {
  return (
    <>
      <div className={styles.homeContainer}>
        <Header />
        <About />
        <Skills />
        <ProjectsCollage/>

      </div>
      <Footer/>
    </>
  );
}
