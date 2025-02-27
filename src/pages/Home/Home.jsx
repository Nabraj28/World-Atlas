import styles from './home.module.css';
import { IoIosArrowRoundForward } from "react-icons/io";

const Home = () => {
    return (

        <section className={styles.mainContainer}>
            <div className={styles.backgroundImageContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.heroHeading}>
                        Explore the World, One
                        <br />
                        Country at a time
                    </h1>
                    <p className={styles.heroContent}>
                        Discover the history, culture and beauty of every nation. Sort, search,
                        <br />
                        and filter through countries to find the details you want.
                    </p>
                    <button className={styles.styledButton}>
                        Start Exploring
                        <IoIosArrowRoundForward size={25} />

                    </button>
                </div>
                <div className={styles.imageContainer}>
                    <img src="/Earth.svg" alt="" className={styles.earthImage} />
                </div>
            </div>
        </section>
    )
}

export default Home