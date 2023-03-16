import React from "react";
import styles from "@/styles/NavBar.module.css";
import Link from "next/link";
import { BiMessageDetail } from "react-icons/bi";
import { AiOutlineAppstore, AiOutlineHome } from "react-icons/ai";
import { BsLightning } from "react-icons/bs";

export default function NavBar() {
  const handleScroll = (id) => {
    const element = document.querySelector(`#${id}`);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.navBar}>
      <Link href="/" className={styles.homeNav} title="Home">
        <AiOutlineHome />
      </Link>
      <a
        className={styles.projectsNav}
        title="Projects"
        onClick={() => handleScroll("projects")}
      >
        <AiOutlineAppstore />
      </a>
      <a
        className={styles.skillsNav}
        title="Skills"
        onClick={() => handleScroll("skills")}
      >
        <BsLightning />
      </a>
      <a
        className={styles.contactNav}
        title="Contact"
        onClick={() => handleScroll("footer")}
      >
        <BiMessageDetail />
      </a>
    </div>
  );
}
