import { RxExternalLink } from "react-icons/rx";
import styles from "@/styles/ProjectDetailPage.module.css";
import { techUsed } from "@/utilities/helpers";

export function projectDetails(obj) {
    return (
      <div key={obj.name} className={styles.projectDetails}>
        <h4> Summary</h4>
        <div className={styles.projectSummary}>{obj.summary}</div>
        {techUsed(obj)}
        <h4> Responsibilities</h4>
        {obj.responsibilities.map((r, idx) => (
          <div key={idx} className={styles.projectResponsibilities}>
            <div>- {r}</div>
          </div>
        ))}
        <a className={styles.projectLinks} target="_blank" href={obj.repo}>
          Repo
          <RxExternalLink />
        </a>
        {obj.site === "[offline]" ? (
          <span className={styles.projectLinks}> Site: &lt;Offline&gt;</span>
        ) : (
          <a className={styles.projectLinks} target="_blank" href={obj.site}>
            Site
            <RxExternalLink />
          </a>
        )}
      </div>
    );
  }
  