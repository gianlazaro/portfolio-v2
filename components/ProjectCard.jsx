import Image from "next/image";
import styles from '../styles/ProjectCard.module.css'

function ProjectCard({title, desc, imageUrl, background}) {
  return (
    <article className={styles.card} style={{background}}>
      {imageUrl &&
      <Image
        src={imageUrl}
        alt={title + ' - ' + desc}
        className={styles.cardImage}
        layout="responsive"
        width={500}
        height={300}
        />
      }
      <div className={styles.infoWrapper}>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </article>
  );
}

export default ProjectCard;
