import Link from "next/link";
import { RxExternalLink } from "react-icons/rx";
import { techIcons } from "../utilities/helpers";
import styles from "@/styles/Projects.module.css";

export function projectCard(name, img, repo, site, summary, pages, p) {
  return (
    <div className={styles.flip_card}>
      <div className={styles.flip_card_inner}>
        <div className={styles.card_front}>
          <div className={styles.card_front_details}>
            <h4>{name}</h4>
            {techIcons(p)}
          </div>
        </div>
        <div className={styles.card_back}>
          <h4>{name}</h4>
          <p>{summary}</p>
          <div className={styles.card_links}>
            <a className={styles.project_links} target="_blank" href={repo}>
              Repo
              <RxExternalLink />
            </a>
            {site === "[offline]" ? (
              <span className={styles.project_links}>
                {" "}
                Site: &lt;Offline&gt;
              </span>
            ) : (
              <a className={styles.project_links} target="_blank" href={site}>
                Site
                <RxExternalLink />
              </a>
            )}
            {pages.length === 0 ? null : (
              <Link
                className={styles.carousel__link}
                href={`/projects/${name}`}
              >
                <div className={styles.carousel__link}>Details</div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
