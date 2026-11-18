import styles from './CategoryCardList.module.css';
import financeIcon from '../../assets/icons/finance.svg';
import arrowIcon from '../../assets/icons/arrow-right.svg';
import CategoryCard from '../CategoryCard';

import autoIcon from '../../assets/icons/auto-transportation.svg';
import desingIcon from '../../assets/icons/design.svg';
import managementIcon from '../../assets/icons/management.svg';
import medicineIcon from '../../assets/icons/medicine.svg';
import multimediaIcon from '../../assets/icons/multimedia.svg';
import restaurauntIcon from '../../assets/icons/restaurant.svg';
import salesIcon from '../../assets/icons/sales.svg';
import supportIcon from '../../assets/icons/support.svg';

function CategoryCardList() {
  const categoriesData = [
    {
      id: 1,
      name: 'Финансы',
      url: financeIcon,
    },
    {
      id: 2,
      name: 'Грузоперевозки',
      url: autoIcon,
    },
    {
      id: 3,
      name: 'Дизайн',
      url: desingIcon,
    },
    {
      id: 4,
      name: 'Ресторанный бизнес',
      url: restaurauntIcon,
    },
    {
      id: 5,
      name: 'Медицина',
      url: medicineIcon,
    },
    {
      id: 6,
      name: 'Мультимедия',
      url: multimediaIcon,
    },
    {
      id: 7,
      name: 'Служба поддержки',
      url: supportIcon,
    },
    {
      id: 8,
      name: 'Менеджмент',
      url: managementIcon,
    },
    {
      id: 9,
      name: 'Продажи',
      url: salesIcon,
    },
  ];

  return (
    <section className={` ${styles.category_section}`}>
      <div className={`wrapper flex-column ${styles.wrapper_section}`}>
        <h2 className={styles.titleCategory}>
          Работа <br></br> по категориям
        </h2>
        <div className={styles.categories_container}>
          {categoriesData.map((category) => (
            <CategoryCard
              key={category.id}
              cardInfo={category}
            />
          ))}
          <article className={styles.category_card}>
            <a href="#">
              <img
                src={arrowIcon}
                alt="arrow-icon"
              />
              <p>Больше категорий</p>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
export default CategoryCardList;
