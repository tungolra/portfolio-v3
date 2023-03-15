import React from "react";
import linkedInIcon from "../public/LI-In-Bug.png";
import gitHubIcon from "../public/github-logo.png";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { TfiEmail } from "react-icons/tfi";
import { CiMail } from "react-icons/ci";
import { CgFileDocument } from "react-icons/cg";

export default function Footer() {
    return (
      <footer id={styles.footer}>
        <div className={styles.contactDetails}>
          <span>Ralph Tu&#241;gol</span>
          <a className={styles.mailto} href="mailto:rarttungol@gmail.com">
            <TfiEmail /> rarrtungol@gmail.com
          </a>
        </div>
        <div className={styles.socialsIconsContainer}>
          <div>
            <a className={styles.mailto} href="mailto:rarttungol@gmail.com">
              <CiMail className={styles.socialsIcons} size="45px" />
            </a>
          </div>
          <div>
            <Link href="/cv" target="_blank">
              <CgFileDocument
                title="Ralph Tungol Resume 2022"
                className={`${styles.socialsIcons} ${styles.resume}`}
              />
            </Link>
          </div>
          <div>
            <a href="https://github.com/tungolra" target="_blank">
              <img
                className={styles.socialsIcons}
                src={gitHubIcon}
                alt="github-icon"
                title="GitHub Repo"
              />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/ralph-tungol/" target="_blank">
              <img
                className={styles.socialsIcons}
                src={linkedInIcon}
                alt="linkedin-icon"
                title="LinkedIn"
              />
            </a>
          </div>
        </div>
      </footer>
    );
  }
  