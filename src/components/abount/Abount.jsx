import React, { useContext } from 'react';
import styles from "./Abount.module.css";
import dark from "../../assets/img/Perfildark.jpeg"
import light from "../../assets/img/Perfillight.jpeg"
import { Link } from 'react-router-dom';
import ThemeContext from "../../context/ThemeContext"

const Abount = () => {


    const {theme} = useContext(ThemeContext);
    return (
        <section id='abount' className={`${styles.container} ${styles[theme]}`}>
            <div className={styles.containerInfo}>
                <h2 className={styles.title}>Briyan<br/>  Bohtelo</h2>
                <h3 className={styles.subtitle}>FULLSTACK DEVELOPER</h3>
                <p className={styles.description}>
                    Tienes un proyecto interesante en el que te pueda ayudar ?
                    Estoy disponible para proyectos o para formar parte de tu equipo para aportar mi experiencia y crecer juntos.
                    Enviame un correo electronico o enviame un mensaje por Linkedin.
                </p>
                <Link className={`${styles.button} ${styles[`button${theme}`]}`} to='/about'>Mas sobre mis conocimientos</Link>
            </div>
            <div className={styles.containerImage}>
                <img className={styles.image} src={theme === 'dark' ? dark : light} alt="" />
            </div>
        </section>
    );
}

export default Abount;
