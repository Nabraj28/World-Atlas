import styles from './contact.module.css'

const Contact = () => {
    return (
        <section className={styles.contactContainer}>
            <h1 className={styles.containerTitle}>Contact Us</h1>
            <div className={styles.formWrapper}>
                <form>
                    <input type="text" placeholder='Enter your name' />
                    <input type="email" placeholder='Enter your email' />
                    <textarea name="" id="" placeholder='Enter your message' />
                    <button>Send</button>
                </form>
            </div>
        </section>
    )
}

export default Contact