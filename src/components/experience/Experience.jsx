import React,{useContext, useRef, useEffect} from 'react';
import styles from "./Experience.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faDesktop, faDatabase } from '@fortawesome/free-solid-svg-icons';
import ThemeContext from '../../context/ThemeContext';


const Experience = () => {

    const {theme} = useContext(ThemeContext);

    const refExperience = useRef();

    let options = {
        root: null,
        threshold: '0.30'
      };

    const handleIntersection = (e) => {
        if(e[0].isIntersecting){
            e[0].target.classList.add(`${styles.animation}`)
    }
}

    useEffect(() => {
        let observer = new IntersectionObserver(handleIntersection, options);
        observer.observe(refExperience.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className={`${styles.container} ` + `${styles[theme]}`} id='experience'>
            <h2 className={styles.titlePrincipal}>My Experience</h2>
            <div ref={refExperience} className={styles.cardContainer}>
                <section className={`${styles.card} ${styles.cardFinal}`}>
                    <FontAwesomeIcon className={`${styles.icon} ${styles[`icon${theme}`]}`} icon={faDesktop}/>
                    <h3 className={styles.title}> FRONTEND</h3>
                    <p className={styles.description}>Tengo experiencia desarrollando en React, React Native, CSS & HTML.</p>
                </section>
                <section className={styles.card}>
                    <FontAwesomeIcon className={`${styles.icon} ${styles[`icon${theme}`]}`} icon={ faServer } />
                    <h3 className={styles.title}> BACKEND</h3>
                    <p className={styles.description}>Domino NodeJS & ExpressJS tambien manejo GraphQL.</p>
                </section>
                <section className={styles.card}>
                    <FontAwesomeIcon className={`${styles.icon} ${styles[`icon${theme}`]}`} icon={ faDatabase } />
                    <h3 className={styles.title}> DATABASE</h3>
                    <p className={styles.description}>Tengo buenas habilidades en PostgresSQL & MySQL con el ORM Sequelize tambien manejo MongoDB.</p>
                </section>
            </div>
            <div>
                <p className={`${styles.titlePrincipal} ${styles.titleStack}`}>STACK PERN</p>
            </div>
        </section>
    );
}

export default Experience;
