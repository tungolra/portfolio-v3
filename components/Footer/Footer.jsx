import React from "react";
import linkedInIcon from "../../images/LI-In-Bug.png";
import gitHubIcon from "../../images/github-logo.png";
import { Link } from "react-router-dom";
import { TfiEmail } from "react-icons/tfi";
import { CiMail } from "react-icons/ci";
import { CgFileDocument } from "react-icons/cg";

export default function Footer() {
    return (
      <footer id="footer">
        <div className="contact-details">
          <span>Ralph Tu&#241;gol</span>
          <a className="mailto" href="mailto:rarttungol@gmail.com">
            <TfiEmail /> rarrtungol@gmail.com
          </a>
        </div>
        <div className="socials-icons-container">
          <div>
            <a className="mailto" href="mailto:rarttungol@gmail.com">
              <CiMail className="socials-icons" size="45px" />
            </a>
          </div>
          <div>
            <Link to="/cv" target="_blank">
              <CgFileDocument
                title="Ralph Tungol Resume 2022"
                className="socials-icons resume"
              />
            </Link>
          </div>
          <div>
            <a href="https://github.com/tungolra" target="_blank">
              <img
                className="socials-icons"
                src={gitHubIcon}
                alt="github-icon"
                title="GitHub Repo"
              />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/ralph-tungol/" target="_blank">
              <img
                className="socials-icons"
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
  