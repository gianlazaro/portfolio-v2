import styles from "../styles/vs.module.css";
import Image from 'next/image'

function vs() {
  return (
    <>
      <header className={styles.headerWrapper}>
        <div className={styles.hero}>
          <Image src="/ss1.png" width="600" height="600"/>
          <Image src="/ss2.png" width="600" height="600"/>
        </div>
      </header>
      <div className={styles.container}>
        <h2>Features</h2>

        <h2>My Challenges</h2>
        <p>
          Pellentesque nunc diam, sagittis non mattis a, rutrum vitae lectus.
          Suspendisse a efficitur nibh, a ultricies augue. Praesent nisl magna,
          ultrices eget orci sit amet, congue accumsan ex. Nullam risus nunc,
          tempor malesuada orci a, hendrerit semper mi. Ut mattis bibendum erat
          a condimentum. Nullam cursus maximus dui, eget iaculis sem sodales ut.
          Duis id laoreet odio, eu tincidunt ipsum. Pellentesque nec eros
          tempor, gravida odio in, rhoncus tortor. Proin ut urna ipsum. Nullam
          vitae convallis felis, et cursus metus. Integer sem purus, bibendum
          quis tempor eu, molestie eget libero. Nullam at ipsum fermentum,
          blandit tortor facilisis, imperdiet est. Vestibulum ullamcorper
          commodo elit, eget luctus purus auctor et. Donec finibus venenatis
          vestibulum.
        </p>
        <img src="https://i.imgur.com/RbQqQeM.png" width="300"/>
        <p>
          Suspendisse pharetra porttitor lorem, vel hendrerit mi aliquet sed. Ut
          commodo lorem id dui efficitur ultricies. Vestibulum lacinia blandit
          facilisis. Morbi a sapien vel quam viverra molestie in quis turpis.
          Pellentesque vel mauris et mi luctus pretium. Maecenas euismod quis
          neque id hendrerit. Curabitur euismod, nibh quis elementum volutpat,
          libero mi dapibus est, vitae fermentum nulla lacus at quam. In rhoncus
          viverra dictum. Duis scelerisque dictum orci, id tincidunt augue
          scelerisque et. Phasellus nec lectus massa.
        </p>
        <h2>Demo</h2>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/oGxyzJ-z5JI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </>
  );
}

export default vs;
