import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import Me from "./Home/Me";

function About() {
  return (
    <div className={styles.about_container}>
      <div className={styles.about_wrapper}>
        <div className="about_details">
          <h4 className="about_title">Welcome!</h4>
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
      <main className={styles.main}>
        <About />
      </main>
    </>
  );
}
