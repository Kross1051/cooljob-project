import styles from './VacationCard.module.css';
import locationIcon from '../../assets/icons/location.svg';
import colaIcon from '../../assets/icons/cola.svg';
import facebookIcon from '../../assets/icons/facebook.svg';

function VacationCard({ vacation }) {
  return (
    <article className={styles.card}>
      <div className={styles.category}>
        <span
          style={{ backgroundColor: vacation.categoryColor }}
          className={styles.circle}
        ></span>
        <span className={styles.categoryText}>{vacation.category}</span>
      </div>

      <h3 className={styles.title}>{vacation.title}</h3>

      <div className={styles.location}>
        <img
          className={styles.icon}
          src={locationIcon}
          alt="location-icon"
        />
        <span>
          {vacation.location.city}, {vacation.location.country}
        </span>
      </div>
      <div className={styles.company}>
        <img
          className={styles.companyLogo}
          src={vacation.companyLogo}
          alt="company-logo"
        />
        <span className={styles.companyText}>
          {vacation.company}, {vacation.published}
        </span>
      </div>
    </article>
  );
}
export default VacationCard;
