import { NavLink } from 'react-router'
import styles from './error.module.css'

const Error = () => {
    return (
        <section className={styles.errorContainer}>
            <div className={styles.contentContainer}>
                <h1 className={styles.contentMediumText}>OOPS!</h1>
                <p className={styles.contentLightText}>PAGE NOT FOUND</p>
                <NavLink to={'/'}>
                    <button className={styles.goHomeButton}>
                        RETURN TO HOME
                    </button>
                </NavLink>
            </div>
        </section>
    )
}

export default Error