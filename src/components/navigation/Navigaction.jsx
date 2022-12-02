import React from 'react';
import styles from "./Navigation.module.css"
import { Link } from 'react-router-dom';

const Navigaction = () => {
    return (
            <div className={styles.container}>
                    <Link className={styles.title} to='/'>Briyan
                    <span className={styles.guion}>_</span>
                    </Link>
                <ul className={styles.list}>
                    <li className={styles.listItem}><a className={styles.aLink} href="#home">Home</a></li>
                    <li className={styles.listItem}><a className={styles.aLink} href="#experience">Experience</a></li>
                    <li className={styles.listItem}><a className={styles.aLink} href="#work">Work</a></li>
                    <li className={styles.listItem}><a className={styles.aLink} href="#abount">Abount</a></li>
                    <li className={styles.listItem}><a className={styles.aLink} href="#contact">Contact</a></li>
                </ul>
            </div>
    );
}

export default Navigaction;
