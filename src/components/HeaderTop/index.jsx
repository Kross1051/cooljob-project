import styles from './HeaderTop.module.css';

function HeaderTop() {
  return (
    <section className={styles.headerTop}>
      <div
        className={`flex-row-space-between wrapper ${styles.headerTop__flexGap}`}
      >
        <a
          className={styles.logo}
          href="#"
        >
          Cooljob
        </a>

        <div className={`flex-row-space-between ${styles.headerTop__flex1}`}>
          <nav
            className={`flex-row-space-between ${styles.headerTop__gapLinks}`}
          >
            <a
              href="#"
              className={styles.headerTop__link}
            >
              Поиск работы
            </a>
            <a
              href="#"
              className={styles.headerTop__link}
            >
              Поиск стартапов
            </a>
          </nav>
          <div
            className={`flex-row-space-between  ${styles.headerTop__gapButtons}`}
          >
            <a className={styles.headerTop__reg}>Регистрация</a>
            <button className={styles.headerTop__login}>Вход</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderTop;
