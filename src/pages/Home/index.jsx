import { NavLink } from 'react-router';
import styles from './home.module.css';
import { IoIosArrowRoundForward } from "react-icons/io";
import About from '../About';

const Home = () => {
    return (
        <main>
            <section className={styles.mainContainer}>
                <div className={styles.backgroundImageContainer}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.heroHeading}>
                            Explore the World, One
                            <br />
                            Country at a time
                        </h1>
                        <p className={styles.heroContent}>
                            Discover the history, culture, and beauty of every nation. Sort, search,
                            <br />
                            and filter through countries to find the details you want.
                        </p>
                        <NavLink
                            className={styles.navLink}
                            to={'/country'}
                        >
                            <button className={styles.styledButton}>
                                Start Exploring
                                <IoIosArrowRoundForward className={styles.arrowIcon} />
                            </button>
                        </NavLink>
                    </div>
                    <div className={styles.imageContainer}>
                        <img
                            src="/Earth.svg"
                            alt="Earth illustration"
                            className={styles.earthImage}
                        />
                    </div>
                </div>
            </section>
            <About />
        </main>
    );
};

export default Home;
