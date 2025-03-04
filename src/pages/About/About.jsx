import Card from '../../components/Card/Card'
import styles from './about.module.css'

const About = () => {
    return (
        <section className={styles.aboutContainer}>
            <h1>Intresting Facts About The World</h1>
            <div className={styles.contentContainer}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    )
}

export default About