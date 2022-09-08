import styles from '../styles/Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.linkList}>
        <li>Gian Lazaro</li>
        <li>about</li>
        <li>resume</li>
        <li>
          <a className={styles.emailLink} href="mailto:hello@gianlazaro.com">
            hello@gianlazaro.com
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
