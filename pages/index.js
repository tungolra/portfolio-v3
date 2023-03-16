import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Welcome from "@/components/Welcome";
import NavBar from "@/components/NavBar";

export default function Home() {

  return (
    <div className="app-container">
      <div className="App">
        {/* routes: cv, projects  */}
        <Head>
          <title>Ralph Tungol Portfolio</title>
          <meta name="description" content="Ralph Tungol Portfolio" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar />
        <Welcome />
      </div>
    </div>
  );
}
