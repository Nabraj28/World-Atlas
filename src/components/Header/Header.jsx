import { NavLink } from 'react-router';
import styles from './header.module.css';
import { LuEarth } from "react-icons/lu";
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";

const Header = () => {

    const navLinks = [
        { path: "/", label: "Home" },
        { path: "about", label: "About" },
        { path: "country", label: "Country" },
        { path: "contact", label: "Contact" }
    ];

    const [show, setShow] = useState(false);

    const handleToggle = () => {
        return setShow(!show);
    }

    const navLinkClass = ({ isActive }) => isActive ? styles.activeLink : styles.navTag;

    return (
        <header className={styles.navContainer}>
            <div className={styles.navContentContainer}>
                <NavLink to='/' className={styles.logoText}>
                    <h1>
                        WorldAtlas
                    </h1>
                </NavLink>
                <nav>
                    <ul className={show ? styles.mobileMenu : styles.webMenu}>
                        <RxCross2 className={styles.closeButton} onClick={handleToggle} />
                        {navLinks.map(({ path, label }) => (
                            <NavLink className={navLinkClass} onClick={handleToggle} key={path} to={path}>
                                <li>
                                    {label}
                                </li>
                            </NavLink>

                        ))}
                    </ul>
                </nav>
                <button onClick={handleToggle} className={styles.hamburger}>
                    <LuEarth color='#fff' size={25} />
                </button>
            </div>
        </header>
    )
}

export default Header