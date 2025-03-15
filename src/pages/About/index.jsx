import Card from '../../components/Card';
import styles from './about.module.css';
import ContinentsList from '../../data/continents';

const About = () => {
    return (
        <section className={styles.aboutContainer}>
            <h1 className={styles.aboutHeading}>Intresting Facts About The World</h1>
            <div className={styles.contentContainer}>
                {ContinentsList.map(({ name, population, countries, fact }, index) => (
                    <Card key={index}>
                        <h1 className={styles.cardTitle}>{name}</h1>
                        <p className={styles.contentHeading}>Population: <span>{population}</span></p>
                        <p>Countries: <span>{countries}</span></p>
                        <p>Intresting Fact: <span>{fact}</span></p>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default About