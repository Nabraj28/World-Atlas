import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={styles.contactContainer}>
                <div>
                    <h1>Find Us</h1>
                    <p>Pokhara, Nepal</p>
                </div>
                <div>
                    <h1>Call Us</h1>
                    <p>+977 9867795254</p>
                </div>
                <div>
                    <h1>Mail Us</h1>
                    <p>nabrajpoudel.28@gmail.com</p>
                </div>
            </div>
            <div className={styles.copyrightContainer}>
                <p>Copyright © 2024, All Right ReservedNab Raj Poudel</p>
            </div>
        </footer>
    )
}

export default Footer