import React from 'react';
import styles from "./Abount.module.css";
import myPhotograpy from "../../assets/img/Perfil.jpeg"
import { Link } from 'react-router-dom';

const Abount = () => {
    return (
        <div id='abount' className={styles.container}>
            <div className={styles.containerInfo}>
                <h2 className={styles.title}>Briyan<br/>  Bohtelo</h2>
                <p className={styles.subtitle}>FULLSTACK DEVELOPER</p>
                <p className={styles.description}>
                    Tienes un proyecto interesante en el que te pueda ayudar ?
                    Estoy disponible para proyectos o para formar parte de tu equipo para aportar mi experiencia y crecer juntos.
                    Enviame un correo electronico o enviame un mensaje por Linkedin.
                </p>
                <Link className={styles.button} to='/about'>Mas sobre mis conocimientos</Link>
            </div>
            <div className={styles.containerImage}>
                <img className={styles.image} src={myPhotograpy} alt="" />
            </div>
        </div>
    );
}

export default Abount;
