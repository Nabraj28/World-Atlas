import styles from './card.module.css'

const Card = () => {
    return (
        <div className={styles.cardContainer}>
            <h1>Asia</h1>
            <p>Population: <span>12 Million</span></p>
            <p>Countries: <span>12</span></p>
            <p>Intresting Fact: <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sapiente eveniet libero, nemo, ipsa facere debitis necessitatibus obcaecati eum, nihil placeat voluptas fugit deleniti voluptatem!</span></p>
        </div>
    )
}

export default Card