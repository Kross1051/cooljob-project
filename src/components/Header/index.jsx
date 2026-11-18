import HeaderTop from "../HeaderTop";
import SearchBar from "../SearchBar";
import shape from "../../assets/icons/Rectangle 12.svg";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <img src={shape} alt="" className={styles.heroShape} />

      <HeaderTop />

      <section className={styles.hero}>
        <div className="wrapper">
          <h1 className={styles.title}>
            Один клик
            <br />и работа в кармане
          </h1>
          <SearchBar />
        </div>
      </section>
    </header>
  );
}

export default Header;
