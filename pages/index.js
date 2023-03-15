import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import Me from "../components/Me";
import MatrixBackground from "@/components/MatrixBackground";
import Skills from "@/components/Skills";
import ProjectsCollage from "@/components/ProjectsCollage";

function Header() {
  return (
    <div className={styles.header_container}>
      <MatrixBackground />
      <div className={[styles.row, styles.title]}>
        <h3>Ralph Tu&#241;gol</h3>
        <h4>Full-Stack Software Developer</h4>
      </div>
    </div>
  );
}
function About() {
  return (
    <div className={styles.about_container}>
      <div className={styles.about_wrapper}>
        <div className={styles.about_details}>
          <h4 className={styles.about_title}>Welcome!</h4>
          <Image
            src="/profile-picture.jpg"
            alt="profile-picture"
            className={styles.profile_pic}
            width={100}
            height={24}
            priority
          />
        </div>
        <section className={styles.about}>
          <div className={styles.about_card}>
            <Me />
          </div>
        </section>
      </div>
    </div>
  );
}

export default function Home() {
  const router = useRouter();
  return (
    <>
      {/* routes: cv, projects  */}
      <Head>
        <title>Ralph Tungol Portfolio</title>
        <meta name="description" content="Ralph Tungol Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.bg_image}>
        <div className={styles.home_container}>
          <Header />
          <About />
          <Skills/>
          {/* <ProjectsCollage/> */}
        </div>
      </div>
    </>
  );
}
