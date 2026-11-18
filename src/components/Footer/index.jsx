import styles from './Footer.module.css';
import linkedInIcon from '../../assets/icons/linkedln.svg';
import googleIcon from '../../assets/icons/google.svg';
import twitterIcon from '../../assets/icons/twitter.svg';
import facebookIcon from '../../assets/icons/facebook_icon.svg';

function Footer() {
  return (
    <footer>
      <section className={styles.category_section}>
        <div className={`wrapper ${styles.container}`}>
          <h2>Популярные города</h2>

          <ul className={styles.cities}>
            <li>Осака</li>
            <li>Коясан</li>
            <li>Токио</li>
            <li>Хаконэ</li>
            <li>Наэба</li>
            <li>Томаму</li>
            <li>Йокогама</li>
            <li>Нагоя</li>
            <li>Саппоро</li>
            <li>Кобе</li>
          </ul>

          <div className={styles.footerDivider}></div>

          <div className={styles.iconsFooter}>
            <div className={styles.logo}>Cooljob</div>

            <p className={styles.copyright}>
              © 2026 IT Career Hub. All rights reserved
            </p>

            <div className={styles.socialIcons}>
              <img
                src={linkedInIcon}
                alt="LinkedIn"
              />
              <img
                src={googleIcon}
                alt="Google"
              />
              <img
                src={twitterIcon}
                alt="Twitter"
              />
              <img
                src={facebookIcon}
                alt="Facebook"
              />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
