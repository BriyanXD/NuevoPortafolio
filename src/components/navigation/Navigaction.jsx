import React, {useContext, useRef, useState} from 'react';
import styles from "./Navigation.module.css"
import { Link } from 'react-router-dom';
import ThemeContext from "../../context/ThemeContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faBars,faXmark } from '@fortawesome/free-solid-svg-icons';




const Navigaction = () => {

    const refButton = useRef()

    const [view, setView] = useState(true);

    const {theme, handleTheme} = useContext(ThemeContext);

    const handleButton = async() => {
        await setView(!view);
        if(view){
            refButton.current.classList.add(styles.listView)
    }
        else {
            refButton.current.classList.remove(styles.listView)
        }
    }
    const handleClose = () => {
        handleButton();
        handleTheme();
    }

    return (
            <nav className={styles.container}>
                    <FontAwesomeIcon className={`${styles.buttonOpenCloseR} ${styles[`button${theme}`]}`} icon={view ? faBars : faXmark} onClick={handleButton}/>
                    <Link className={`${styles.title} ${styles[`title${theme}`]}`} to='/'>Briyan
                        <span className={styles.guion}>_</span>
                    </Link>
                <ul className={`${styles.list} ${styles[`list${theme}`]}`}  ref={refButton}>
                    <li className={styles.listItem}><a onClick={handleButton} className={`${styles.link} ${styles[`link${theme}`]}`} href="#home">Inicio</a></li>
                    <li className={styles.listItem}><a onClick={handleButton} className={`${styles.link} ${styles[`link${theme}`]}`} href="#experience">Experiencia</a></li>
                    <li className={styles.listItem}><a onClick={handleButton} className={`${styles.link} ${styles[`link${theme}`]}`} href="#work">Trabajo</a></li>
                    <li className={styles.listItem}><a onClick={handleButton} className={`${styles.link} ${styles[`link${theme}`]}`} href="#abount">Sobre mi</a></li>
                    <li className={styles.listItem}><a onClick={handleButton} className={`${styles.link} ${styles[`link${theme}`]}`} href="#contact">Contacto</a></li>
                    <li className={styles.listItem}>
                        <button className={`${styles.button} ${styles[`link${theme}`]}`} onClick={handleClose}><FontAwesomeIcon onClick={handleButton} icon={theme === 'light'? faSun: faMoon}/></button>
                    </li>
                </ul>
            </nav>
    );
}

export default Navigaction;
