import styles from './footer.module.css';
import { MdOutlinePhoneInTalk, MdLocationPin, MdOutlineMail } from "react-icons/md";

const Footer = () => {

    const contactDetails = [
        { Icon: MdLocationPin, title: "Find Us", content: "Pokhara, Nepal" },
        { Icon: MdOutlinePhoneInTalk, title: "Call Us", content: "+977 9867795254" },
        { Icon: MdOutlineMail, title: "Mail Us", content: "nabrajpoudel.28@gmail.com" }
    ];

    return (
        <footer>
            <div className={styles.contactContainer}>
                <div className={styles.contactContent}>
                    {contactDetails.map((detail, index) => (
                        <div key={index} className={styles.contentBox}>
                            <detail.Icon className={styles.icon} />
                            <div>
                                <h1>{detail.title}</h1>
                                <p>{detail.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.copyRightContainer}>
                <p className={styles.copyRightContent}>
                    Copyright © {new Date().getFullYear()}, All Right Reserved <span>Nab Raj Poudel</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer