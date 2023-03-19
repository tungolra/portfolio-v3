// import styles from "@/styles/ProjectDetailPage.module.css";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { featured } from "@/seed";
// import Footer from "@/components/Footer";
// import { carousel } from "@/library/carouselSection";
// import { projectDetails } from "@/library/projectDetailsSection";
import NavBar from "@/components/NavBar";

export default function ProjectDetailsPage() {
  // console.log(window)
  const router = useRouter();
  const project = router.query.project;
  const selectedProject = featured.find((p) => p?.name === project);
  const navProject = featured.findIndex((p) => p?.name === project);
  const nextProject = featured[navProject + 1]?.name;
  const prevProject = featured[navProject - 1]?.name;

  return (
    <div className={styles.homeContainer}>
    <NavBar/>
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
      {/* <Footer /> */}
    </div>
  );
}

export async function getStaticPaths() {
  const paths = featured.map((project) => ({
    params: { project: project.name },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const selectedProject = featured.find((p) => p?.name === params.project);

  return {
    props: { selectedProject },
  };
}
