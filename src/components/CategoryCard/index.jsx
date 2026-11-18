import styles from './CategoryCard.module.css'

function CategoryCard({ cardInfo }) {
  return (
    <article className={styles.category_card}>
      <a href="#">
        <img src={cardInfo.url} alt={cardInfo.name} />
        <p>{cardInfo.name}</p>
      </a>
    </article>
  )
}
export default CategoryCard
