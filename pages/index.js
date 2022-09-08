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
          <p>Nunc a augue faucibus, vulputate neque vel, ultrices tortor. Sed a aliquet sapien, vitae vulputate libero. Sed nibh justo, tempor euismod luctus nec, vehicula id diam. Sed cursus convallis sem eu elementum. Praesent scelerisque vehicula quam a tempor. Proin bibendum ligula mi, quis dignissim nibh accumsan in. Mauris laoreet tellus sed erat egestas, ultricies interdum quam vulputate.</p>
        </section>

        <section className={styles.projectSection}>
          <h2>Projects</h2>
          <div className={styles.projectsWrapper}>
            <ProjectCard title="Vegetation Station" desc="A plant swapping React Native application" imageUrl="/header-vs-lossless.webp" background="#F2B300"/>
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
