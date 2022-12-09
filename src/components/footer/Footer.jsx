import React,{useContext} from 'react';
import styles from './Footer.module.css';
import ThemeContext from "../../context/ThemeContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons"
import Tooltip from "../tooltip/Tooltip"


const Footer = () => {


    const {theme} = useContext(ThemeContext);

    const handleClick = () => {
        window.open('/src/assets/pdf/CV.pdf')
    }

    return (
        <footer className={`${styles.container} ${styles[theme]}`}>
            <span className={styles.title}>@Briyan Bohtelo</span>
            <Tooltip  info="Ver Curriculum">
                <FontAwesomeIcon className={styles.icon} icon={faDownload} onClick={handleClick}/>
            </Tooltip>
        </footer>
    );
}

export default Footer;
