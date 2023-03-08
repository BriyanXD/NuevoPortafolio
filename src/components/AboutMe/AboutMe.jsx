import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import styles from "./AboutMe.module.css"
import technologies from "../../assets/json/technologies.json";
import Tooltip from '../tooltip/Tooltip';
import ThemeContext from "../../context/ThemeContext"
import { Helmet } from 'react-helmet';

const AboutMe = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <section className={`${styles.container} ${styles[theme]}`}>
            <Helmet>
                <title>Briyan Bohtelo | Habilidades</title>
            </Helmet>
            <h2 className={styles.title}>Sobre mi</h2>
            <div className={styles.containerButton}>
                <input type="button" className={`${styles.closeButton} ${styles[`close${theme}`]}`} value="<" onClick={() => window.history.back()}/>
            </div>
            <Link className={`${styles.button} ${styles[`button${theme}`]}`} to='/'>Briyan<span className={styles.guion}>_</span></Link>
            <div className={styles.containerInfo}>
                <div className={styles.containerSubtitle}><h3 className={styles.subtitle}>HABILIDADES BLANDAS</h3></div>
                <div className={`${styles.containerImages} ${styles[`container${theme}`]}`}>
                    {technologies.habilidades.map(element => <p className={styles.habilidad}>{element}</p>)}
                </div>
                <div className={styles.containerSubtitle}><h3 className={styles.subtitle}>FRONT-END</h3></div>
                <div className={`${styles.containerImages} ${styles[`container${theme}`]}`}>
                    {technologies.frontend.map(element => <Tooltip key={element.name} info={element.name}><img className={styles.image} src={element.image} alt={element.name} /></Tooltip> )}
                </div>
                <div className={styles.containerSubtitle}><h3 className={styles.subtitle}>BACK-END</h3></div>
                <div className={`${styles.containerImages} ${styles[`container${theme}`]}`}>
                    {technologies.backend.map(element => <Tooltip key={element.name} info={element.name}><img className={styles.image} src={element.image} alt={element.name} /></Tooltip> )}
                </div>
                <div className={styles.containerSubtitle}><h3 className={styles.subtitle}>DATABASE</h3></div>
                <div className={`${styles.containerImages} ${styles[`container${theme}`]}`}>
                    {technologies.database.map(element => <Tooltip key={element.name} info={element.name}><img className={styles.image} src={element.image} alt={element.name} /></Tooltip> )}
                </div>
                <div className={styles.containerSubtitle}><h3 className={styles.subtitle}>OTHERS</h3></div>
                <div className={`${styles.containerImages} ${styles[`container${theme}`]}`}>
                    {technologies.others.map(element => <Tooltip key={element.name} info={element.name}><img className={styles.image} src={element.image} alt={element.name} /></Tooltip> )}
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
