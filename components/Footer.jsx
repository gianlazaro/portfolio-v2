import styles from '../styles/Footer.module.css'

function Footer() {
  return (
    <footer>
      <div className={styles.wrapper}>
        <ul className={styles.chatList}>
          <li>You're at the end of the page!</li>
          <li>Are you enjoying my work? 🤩</li>
          <li>
            Reach out at hello@gianlazaro.com. Let's also connect on LinkedIn! And
            while you're at it, have a read at my resume. 🎉🎉
          </li>
          <svg width="35" height="35" viewBox="-50 -50 300 300" className={styles.triangleWrapper}>
            <polygon
              className={styles.triangle}
              stroke-linejoin="round"
              points="95,0 0,185 185,185"
            />
          </svg>
        </ul>
        <div className={styles.avatarPane}>
          <img src="https://i.imgur.com/TC2MZU5.jpg" />
        </div>
      </div>
      <div className={styles.credit}>
        Made with a lot of help from energy drinks by Gian
      </div>
    </footer>
  );
}

export default Footer;
