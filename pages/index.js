import Head from "next/head";

import Navbar from "../components/Navbar";
import Headline from "../components/Headline";
import Experiences from "../components/Experiences";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="p-2">
      <Head>
        <title>Mehr Sahebsara - Software Developer</title>
        <meta
          name="description"
          content="My Personal Software Developer Website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-7xl m-auto">
        <Navbar />
        <Headline />
        <Experiences />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
