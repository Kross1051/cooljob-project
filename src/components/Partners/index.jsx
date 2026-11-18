import styles from './Partners.module.css';
import disneyIcon from '../../assets/logo/disney.svg';
import facebookIcon from '../../assets/logo/facebook.svg';
import microsoftIcon from '../../assets/logo/microsoft.svg';
import sonyIcon from '../../assets/logo/sony.svg';
import colaIcon from '../../assets/logo/cola.svg';

function Partners() {
  return (
    <section className={styles.category_section}>
      <div className={`wrapper ${styles.container}`}>
        <div className={styles.partners}>
          <div>
            <h3 className={styles.titlePartners}>Помогаем найти работу:</h3>
          </div>
          <div className={styles.partnersIcons}>
            <img
              src={disneyIcon}
              alt="Disney"
            />
            <img
              src={facebookIcon}
              alt="Facebook"
            />
            <img
              src={microsoftIcon}
              alt="Microsoft"
            />
            <img
              src={sonyIcon}
              alt="Sony"
            />
            <img
              src={colaIcon}
              alt="Cola"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
