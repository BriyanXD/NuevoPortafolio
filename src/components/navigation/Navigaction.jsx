import React, {useContext} from 'react';
import styles from "./Navigation.module.css"
import { Link } from 'react-router-dom';
import ThemeContext from "../../context/ThemeContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';




const Navigaction = () => {

    const {theme, handleTheme} = useContext(ThemeContext);
    return (
            <nav className={styles.container}>
                    <Link className={`${styles.title} ${styles[`title${theme}`]}`} to='/'>Briyan
                    <span className={styles.guion}>_</span>
                    </Link>
                <ul className={styles.list}>
                    <li className={styles.listItem}><a className={`${styles.link} ${styles[`link${theme}`]}`} href="#home">Home</a></li>
                    <li className={styles.listItem}><a className={`${styles.link} ${styles[`link${theme}`]}`} href="#experience">Experience</a></li>
                    <li className={styles.listItem}><a className={`${styles.link} ${styles[`link${theme}`]}`} href="#work">Work</a></li>
                    <li className={styles.listItem}><a className={`${styles.link} ${styles[`link${theme}`]}`} href="#abount">Abount</a></li>
                    <li className={styles.listItem}><a className={`${styles.link} ${styles[`link${theme}`]}`} href="#contact">Contact</a></li>
                    <li className={styles.listItem}>
                        <button className={`${styles.button} ${styles[`link${theme}`]}`} onClick={handleTheme}><FontAwesomeIcon icon={theme === 'light'? faSun: faMoon}/></button>
                    </li>
                </ul>
            </nav>
    );
}

export default Navigaction;
