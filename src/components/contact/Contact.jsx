import React,{useContext} from 'react';
import styles from "./Contact.module.css";
import ThemeContext from "../../context/ThemeContext";
import Linkedin from '../icons/linkedin';
import GitHub from '../icons/GitHub';

const Contact = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <section className={`${styles.container} ${styles[theme]}`} id='contact'>
                <div className={styles.containerInfo}>
                <h2 className={styles.title}>Contacto</h2>
                    <p className={styles.description}>Contactame para participar en tu equipo como desarrolador.</p>
                    <p className={styles.email}>briyana1997@gmail.com</p>
                    <div className={styles.containerIcons}>
                        <div className={styles.icon}><Linkedin fill={theme === 'dark'? '#fff': '#000'} /></div>
                        <div className={styles.icon}><GitHub fill={theme === 'dark'? '#fff': '#000'} /></div>
                    </div>
                </div>
                <form className={styles.containerForm} action="">
                    <div className={styles.containerInput}>
                        <input className={`${styles.input} ${styles[`input${theme}`]}`} type="text" name="name" id="name" placeholder='Nombre'/>
                        <input className={`${styles.input} ${styles[`input${theme}`]}`} type="text" name="email" id="email" placeholder='Correo'/>
                    </div>
                    <textarea className={`${styles.input} ${styles[`input${theme}`]}`} name="message" id="message" placeholder='Mensaje' cols="30" rows="10"></textarea>
                    <div>
                        <input className={`${styles.button} ${styles[`button${theme}`]}`} type="submit" value='Enviar' />
                    </div>
                </form>
        </section>
    );
}

export default Contact;
