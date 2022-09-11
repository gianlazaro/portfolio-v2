import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import {useRouter} from 'next/router'

function Navbar() {
  const router = useRouter();
  const pathname = router.pathname.slice(1) || 'index';
  const navStyles = {
    index: {
      '--emailLink-bg': '#EFF6FF',
      '--emailLink-color': '#195ABA',
    },
    vs: {
      '--emailLink-bg': '#FFF1C8',
      '--emailLink-color': '#3C2C00',
    }
  };

  return (
    <nav className={styles.wrapper} style={navStyles[pathname]}>
      <ul className={styles.linkList}>
        <li><Link href="/">Gian Lazaro</Link></li>
        <li>about</li>
        <li><a href="#projects">
        projects</a></li>
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
