import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import About from "@/components/Header";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <div className="bg-white">
      {/* routes: cv, projects  */}
      <Head>
        <title>Ralph Tungol Portfolio</title>
        <meta name="description" content="Ralph Tungol Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
      <Navbar />
      <Services />
      <TechStack />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
}
