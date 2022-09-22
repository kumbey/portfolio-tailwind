import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Kumurbek's portfolio</title>
      </Head>

      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="hero" className="snap-center">
        <About />
      </section>
      {/* 
    Hero

    About

    Experience

    Skills

    Projects

    Contacts */}
    </div>
  );
};

export default Home;
