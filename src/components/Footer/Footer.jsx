import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={styles.contactContainer}>
                <div className={styles.contactContent}>
                    <div>

                        <div>
                            <h1>Find Us</h1>
                            <p>Pokhara, Nepal</p>
                        </div>
                    </div>

                    <div>

                        <div>
                            <h1>Call Us</h1>
                            <p>+977 9867795254</p>
                        </div>
                    </div>

                    <div>

                        <div>
                            <h1>Mail Us</h1>
                            <p>nabrajpoudel.28@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.copyRightContainer}>
                <p className={styles.copyRightContent}>
                    Copyright © 2024, All Right Reserved <span>Nab Raj Poudel</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer