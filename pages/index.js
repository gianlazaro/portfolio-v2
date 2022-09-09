import Head from "next/head";

import styles from "../styles/Home.module.css";
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gian Lazaro</title>
        <meta name="description" content="Gian Lazaro - Software Engineer" />
      </Head>

      <header className={styles.headerWrapper}>
        <div className={styles.hero}>
          <h1>Hi, I am a software engineer, part-time sticky note collector</h1>
        </div>
      </header>
      <div className={styles.container}>
        <section className={styles.aboutme}>
            <h2>About</h2>
            <div className={styles.splitAboutContainer}>
              <div className={styles.infoPane}>
                <p>Hello, I'm Gian! I am based in Los Angeles, CA. I am a fast learner and thrive in fast-paced agile work environments. At the moment, I am looking for work or apprenticeship opportunities. I am open to relocate or do remote work.</p>
                <p>In my free time, I like to travel to hike. I have hiked 12 national parks in 9 states so far! I've been listening podcasts more recently (Crime Junkie and Syntax).</p>
              </div>
              <div className={styles.profilePane}>
                PROFILE
              </div>
            </div>
        </section>

        <section className={styles.projectSection} id="projects">
          <h2>Projects</h2>
          <div className={styles.projectsWrapper}>
            <ProjectCard title="Vegetation Station" desc="A plant swapping React Native application" imageUrl="/header-vs-lossless.webp" background="#F2B300" href="/vs"/>
            <ProjectCard title="Soulful" desc="An ecommerce React application" imageUrl="/soulful.webp" background="#D4CCC3"/>
            <ProjectCard title="Atelier" desc="A service-oriented architecture backend" imageUrl="" background="#96DBCE"/>
            <ProjectCard title="Err" desc="A question-and-answer platform for small teams" imageUrl="/err.webp" background="#B4C5D6"/>
            <ProjectCard title="ACFTCalc" desc="A fitness grading calculator used by hundreds of soldiers" imageUrl="/army.webp" background="#F0817B"/>
          </div>
        </section>
      </div>
    </>
  );
}
