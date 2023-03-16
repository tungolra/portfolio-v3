import styles from "@/styles/ProjectDetailPage.module.css";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { RxExternalLink } from "react-icons/rx";
import { featured } from "@/seed";
import { techUsed } from "@/utilities/helpers";
import Footer from "@/components/Footer";

function carousel(obj) {
  return (
    <div className={styles.carouselViewport}>
      {obj.pages?.map((page, idx) => (
        <>
          <div
            key={idx}
            id={`carouselSlide${idx + 1}`}
            tabindex="0"
            className={styles.carouselSlide}
          >
            <div className={styles.carouselBtns}>
              <Link
                className={styles.prev}
                href={`#carouselSlide${idx < 1 ? obj.pages.length : idx}`}
              >
                <BsArrowLeftCircle />
              </Link>
              <h3>{obj.name}</h3>
              <Link
                href={`#carouselSlide${
                  idx + 2 > obj.pages.length ? 1 : idx + 2
                }`}
              >
                <BsArrowRightCircle />
              </Link>
            </div>
            <div className={styles.carouselSnapper}>
              <img
                className={styles.img}
                src={!page ? "https://i.imgur.com/I9A7c4b.png" : page}
                alt="project"
              />
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

function projectDetails(obj) {
  return (
    <div className={styles.projectDetails}>
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
export default function ProjectDetailsPage() {
  const router = useRouter();
  const project = router.query.project;

  const selectedProject = featured.find((p) => p?.name === project);
  const navProject = featured.findIndex((p) => p?.name === project);
  const nextProject = featured[navProject + 1]?.name;
  const prevProject = featured[navProject - 1]?.name;

  return (
    <div className={styles.homeContainer}>
      <div className={styles.pageContainer}>
        <div className={styles.projectNav}>
          {navProject === 0 ? (
            ""
          ) : (
            <Link href={`/projects/${prevProject}`}>
              <span>&lt; Prev Project</span>
            </Link>
          )}

          {navProject === featured.length - 1 ? (
            ""
          ) : (
            <Link href={`/projects/${nextProject}`}>
              <span>Next Project &gt;</span>
            </Link>
          )}
        </div>
        <section className={styles.carousel} aria-label="Gallery">
          {carousel(selectedProject)}
        </section>
        <div className={styles.projectDetailContainer}>
          {projectDetails(selectedProject)}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
