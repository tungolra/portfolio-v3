import Link from "next/link";
import { RxExternalLink } from "react-icons/rx";
import { techIcons } from "../utilities/helpers";
import styles from "@/styles/ProjectsCollage.module.css";

export function projectCard(name, img, repo, site, summary, pages, p) {
  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.cardFront}>
          <div className={styles.cardFrontDetails}>
            <h4>{name}</h4>
            {/* {techIcons(p)} */}
          </div>
        </div>
        <div className={styles.cardBack}>
          <h4>{name}</h4>
          <p>{summary}</p>
          <div className={styles.cardLinks}>
            <a className={styles.projectLinks} target="_blank" href={repo}>
              Repo
              <RxExternalLink />
            </a>
            {site === "[offline]" ? (
              <span className={styles.projectLinks}>
                {" "}
                Site: &lt;Offline&gt;
              </span>
            ) : (
              <a className={styles.projectLinks} target="_blank" href={site}>
                Site
                <RxExternalLink />
              </a>
            )}
            {pages.length === 0 ? null : (
              <Link
                className={styles.carouselLink}
                href={`/projects/${name}`}
              >
                <div className={styles.carouselLink}>Details</div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
