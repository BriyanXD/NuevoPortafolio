import React,{useContext} from 'react';
import styles from "./Contact.module.css";
import ThemeContext from "../../context/ThemeContext";
import Linkedin from '../icons/linkedin';
import GitHub from '../icons/GitHub';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-regular-svg-icons"

const Contact = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <section className={`${styles.container} ${styles[theme]}`} id='contact'>
                <div className={styles.containerInfo}>
                <h2 className={styles.title}>Contacto</h2>
                    <p className={styles.description}>Contactame para participar en tu equipo como desarrolador.</p>
                    <a className={`${styles.email} ${styles[`email${theme}`]}`} href="">briyana1997@gmail.com</a>
                    <div className={styles.containerIcons}>
                        <div className={styles.icon}>
                            <a href="https://www.linkedin.com/in/briyanbohtelo/" className={styles.icon} target='_BLANK'>
                                <Linkedin fill={theme === 'dark'? '#fff': '#242424'} />
                            </a>
                        </div>
                        <div className={styles.icon}>
                            <a href="https://github.com/BriyanXD" target='_BLANK'>
                                <GitHub fill={theme === 'dark'? '#fff': '#242424'}/>
                            </a>
                        </div>
                    </div>
                </div>
                <form className={styles.containerForm} action="">
                    <div className={styles.containerInput}>
                        <input className={`${styles.input} ${styles[`input${theme}`]}`} type="text" name="name" id="name" placeholder='Nombre'/>
                        <input className={`${styles.input} ${styles[`input${theme}`]}`} type="input" name="email" id="email" placeholder='Correo/Telefono'/>
                    </div>
                    <textarea className={`${styles.input} ${styles[`input${theme}`]}`} name="message" id="message" placeholder='Mensaje' cols="30" rows="10"></textarea>
                    <div>
                        <FontAwesomeIcon icon={faPaperPlane} className={`${styles.button} ${styles[`button${theme}`]}`} type="submit"/>
                    </div>
                </form>
        </section>
    );
}

export default Contact;
