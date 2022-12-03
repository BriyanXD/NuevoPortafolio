import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import styles from "./AboutMe.module.css"
import technologies from "../../assets/json/technologies.json";
import Tooltip from '../tooltip/Tooltip';
import ThemeContext from "../../context/ThemeContext"

const AboutMe = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <div className={`${styles.container} ${styles[theme]}`}>
            <h1 className={styles.title}>About Me</h1>
            <Link className={`${styles.button} ${styles[`button${theme}`]}`} to='/'>Briyan<span className={styles.guion}>_</span></Link>
            <div className={styles.containerInfo}>
                <div className={styles.containerSubtitle}><h2 className={styles.subtitle}>FRONT-END</h2></div>
                <div className={`${styles.containerImages} ${styles[`container${theme}`]}`}>
                    {technologies.frontend.map(element => <Tooltip key={element.name} info={element.name}><img className={styles.image} src={element.image} alt={element.name} /></Tooltip> )}
                </div>
                <div className={styles.containerSubtitle}><h2 className={styles.subtitle}>BACK-END</h2></div>
                <div className={`${styles.containerImages} ${styles[`container${theme}`]}`}>
                    {technologies.backend.map(element => <Tooltip key={element.name} info={element.name}><img className={styles.image} src={element.image} alt={element.name} /></Tooltip> )}
                </div>
                <div className={styles.containerSubtitle}><h2 className={styles.subtitle}>DATABASE</h2></div>
                <div className={`${styles.containerImages} ${styles[`container${theme}`]}`}>
                    {technologies.database.map(element => <Tooltip key={element.name} info={element.name}><img className={styles.image} src={element.image} alt={element.name} /></Tooltip> )}
                </div>
                <div className={styles.containerSubtitle}><h2 className={styles.subtitle}>OTHERS</h2></div>
                <div className={`${styles.containerImages} ${styles[`container${theme}`]}`}>
                    {technologies.others.map(element => <Tooltip key={element.name} info={element.name}><img className={styles.image} src={element.image} alt={element.name} /></Tooltip> )}
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
