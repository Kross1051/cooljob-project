import VacationCard from '../VacationCard';
import sonyLogo from '../../assets/icons/sony.svg';
import facebookLogo from '../../assets/icons/facebook.svg';
import colaLogo from '../../assets/icons/cola.svg';
import styles from './Vacations.module.css';

function Vacations() {
  const VacationsData = [
    {
      id: 1,
      category: 'Финансы',
      categoryColor: '#5182FF',
      title: 'Менеджер по управлению финансами в крупной компании',
      location: {
        city: 'Осака',
        country: 'Япония',
      },
      companyLogo: sonyLogo,
      company: 'Sony',
      published: '3 дня назад',
    },
    {
      id: 2,
      category: 'Продажи',
      categoryColor: '#FF51EE',
      title: 'Специалист по продажам',
      location: {
        city: 'Коясан',
        country: 'Япония',
      },
      companyLogo: facebookLogo,
      company: 'Facebook',
      published: '7  дней назад',
    },
    {
      id: 3,
      category: 'Служба поддержки',
      categoryColor: '#58D94D',
      title: 'Оператор колл центра',
      location: {
        city: 'Томаму',
        country: 'Япония',
      },
      companyLogo: colaLogo,
      company: 'CocaCola',
      published: '3 дня назад',
    },
    {
      id: 4,
      category: 'Мультимедия',
      categoryColor: '#FF9051',
      title: 'Системный администратор',
      location: {
        city: 'Токио',
        country: 'Япония',
      },
      companyLogo: sonyLogo,
      company: 'Sony',
      published: '3 дня назад',
    },
    {
      id: 5,
      category: 'Дизайн',
      categoryColor: '#F84242',
      title: 'Дизайнер интерьера в профессиональную студию в центре города',
      location: {
        city: 'Йокогама',
        country: 'Япония',
      },
      companyLogo: facebookLogo,
      company: 'Facebook',
      published: '7 дней назад',
    },
    {
      id: 6,
      category: 'Грузоперевозки',
      categoryColor: '#383838',
      title: 'Водитель на дальние дистанции',
      location: {
        city: 'Кобэ',
        country: 'Япония',
      },
      companyLogo: colaLogo,
      company: 'CocaCola',
      published: '1 день назад',
    },
  ];

  return (
    <section className={styles.category_section}>
      <div className={`wrapper ${styles.container}`}>
        <h2 className={styles.title}>Новые вакансии</h2>

        <p className={styles.subtitle}>Найди работу своей мечты прямо сейчас</p>

        <div className={styles.grid}>
          {VacationsData.map((vacation) => (
            <VacationCard
              key={vacation.id}
              vacation={vacation}
            />
          ))}
        </div>
        <button className={styles.btnVacation}>Все вакансии</button>
      </div>
    </section>
  );
}
export default Vacations;
