import React, { useContext, useEffect, useRef } from 'react';
import styles from "./Abount.module.css";
import dark from "../../assets/img/Perfildark.jpeg"
import light from "../../assets/img/Perfillight.jpeg"
import { Link } from 'react-router-dom';
import ThemeContext from "../../context/ThemeContext"
import CV from "../../assets/pdf/BriyanBohteloCV.pdf"
import Carrusel from '../carrusel/Carrusel';

const Abount = () => {


    const {theme} = useContext(ThemeContext);

    const refExperience = useRef();

    const handleClick = () => {
        window.open(CV)
    }
    
    useEffect(() => {
        let options = {
            root: null,
            threshold: '0.30'
          };
    
        const handleIntersection = (e) => {
            if(e[0].isIntersecting){
                e[0].target.classList.add(`${styles.animation}`)
                observer.disconnect()
        }
    }
        let observer = new IntersectionObserver(handleIntersection, options);
        observer.observe(refExperience.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section>
        <div id='abount' className={`${styles.container} ${styles[theme]}`}>
            <div className={styles.containerInfo}>
                <h2 className={styles.title}>Briyan<br/>  Bohtelo</h2>
                <h3 className={styles.subtitle}>FULLSTACK DEVELOPER</h3>
                <p className={styles.description}>
                    {"Tienes un proyecto en el que te pueda ayudar ? Estoy disponible para trabajar en proyectos o para formar parte de tu equipo, aportar mis conocimientos y habilidades para crecer juntos. Enviame un correo electronico o un mensaje por Linkedin para que podamos hablar sobre ese proyecto."}
                </p>
                <Link className={`${styles.button} ${styles[`button${theme}`]}`} to='/about'>Ver tecnoligias que manejo</Link>
                <Link className={`${styles.button} ${styles[`button${theme}`]}`} to='/about' onClick={handleClick}>Ver mi curriculum</Link>
            </div>
            <div ref={refExperience} className={styles.containerImage}>
                <img className={styles.image} src={theme === 'dark' ? dark : light} alt="" />
            </div>
        </div>
        <Carrusel/>
        </section>
    );
}

export default Abount;
