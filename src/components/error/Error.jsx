import React,{useContext} from 'react';
import styles from "./Error.module.css";
import ThemeContext from "../../context/ThemeContext"
import errordark from "../../assets/img/errordark.svg"
import errorlight from "../../assets/img/errorlight.svg"
import { Link } from 'react-router-dom';



const Error = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <section className={`${styles.container} ${styles[theme]}`}>
            <div className={styles.containerInfo}>
                <h2 className={styles.title}>ERROR 404</h2>
                <p className={styles.message}>La ruta a la que accediste no existe <Link className={`${styles.link} ${styles[`link${theme}`]}`} to='/'> visita el inico de la pagina</Link> </p>
            </div>
            <div>
                <div className={styles.containerImage}>
                    <img className={styles.image} src={theme === 'dark'? errordark : errorlight} alt="Error-404" />
                </div>
            </div>
        </section>
    );
}

export default Error;
