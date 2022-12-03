import React,{useContext} from 'react';
import styles from "./Experience.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faDesktop, faDatabase } from '@fortawesome/free-solid-svg-icons';
import ThemeContext from '../../context/ThemeContext';

const Experience = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <div className={`${styles.container} ` + `${styles[theme]}`} id='experience'>
            <h2 className={styles.titlePrincipal}>My Experience</h2>
            <section className={styles.cardContainer}>
                <article className={`${styles.card} ${styles.cardFinal}`}>
                    <FontAwesomeIcon className={`${styles.icon} ${styles[`icon${theme}`]}`} icon={faDesktop}/>
                    <h3 className={styles.title}> FRONTEND</h3>
                    <p className={styles.description}>Tengo experiencia desarrollando en React, React Native, CSS & HTML.</p>
                </article>
                <article className={styles.card}>
                    <FontAwesomeIcon className={`${styles.icon} ${styles[`icon${theme}`]}`} icon={ faServer } />
                    <h3 className={styles.title}> BACKEND</h3>
                    <p className={styles.description}>Domino NodeJS & ExpressJS tambien manejo GraphQL.</p>
                </article>
                <article className={styles.card}>
                    <FontAwesomeIcon className={`${styles.icon} ${styles[`icon${theme}`]}`} icon={ faDatabase } />
                    <h3 className={styles.title}> DATABASE</h3>
                    <p className={styles.description}>Tengo buenas habilidades en PostgresSQL & MySQL con el ORM Sequelize tambien manejo MongoDB.</p>
                </article>
            </section>
            <section>
                <p className={`${styles.titlePrincipal} ${styles.titleStack}`}>STACK PERN</p>
            </section>
        </div>
    );
}

export default Experience;
