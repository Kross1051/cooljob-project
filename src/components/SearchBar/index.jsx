import styles from './SearchBar.module.css';

import searchIcon from '../../assets/icons/search.svg';
import locationIcon from '../../assets/icons/location.svg';

function SearchBar() {
  return (
    <div className={styles.container}>
      <form className={styles.searchForm}>
        <div className={styles.inputGroup}>
          <img
            src={searchIcon}
            alt="search"
          />
          <input
            type="text"
            placeholder="Должность или компания"
          />
        </div>
        <div className={styles.divider}></div>
        <div className={styles.inputGroup}>
          <img
            src={locationIcon}
            alt="Location"
          />
          <input
            type="text"
            placeholder="Город, Страна"
          />
        </div>
        <button type="submit">Поиск</button>
      </form>
    </div>
  );
}

export default SearchBar;
