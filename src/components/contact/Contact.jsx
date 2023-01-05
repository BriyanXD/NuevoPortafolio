import React,{useContext, useState} from 'react';
import styles from "./Contact.module.css";
import ThemeContext from "../../context/ThemeContext";
import Linkedin from '../icons/linkedin';
import GitHub from '../icons/GitHub';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-regular-svg-icons";
import emailjs from "@emailjs/browser";
import Send from '../send/Send';

const Contact = () => {

    const [view, setView] = useState(false);
    const [status, setStatus] = useState(0);

    const {VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY} = import.meta.env;
    
    const [data, setData] = useState({user_name:"",user_email:"",user_message:""});

    const {theme} = useContext(ThemeContext);


    const sendEmail = e => {
        e.preventDefault();
        emailjs.sendForm(VITE_SERVICE_ID,VITE_TEMPLATE_ID,e.target,VITE_PUBLIC_KEY)
        .then(response =>{
            setStatus(response.status)
            setView(true)
        })
        .catch(error =>{
            setStatus(error.status)
            setView(true)
        });
    }
    const saveData = e => {

        setData({...data, [e.target.name]:e.target.value})
    }

    return (
        <section className={`${styles.container} ${styles[theme]}`} id='contact'>
                <Send view={view} setView={setView} status={status}/>
                <div className={styles.containerInfo}>
                <h2 className={styles.title}>Contacto</h2>
                    <p className={styles.description}>Contactame para participar en tu equipo como desarrolador.</p>
                    <a className={`${styles.email} ${styles[`email${theme}`]}`} href="">briyan.bohtelo@gmail.com</a>
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
                <form className={styles.containerForm} onSubmit={sendEmail}>
                    <div className={styles.containerInput}>
                        <input className={`${styles.input} ${styles[`input${theme}`]}`} type="text" name="user_name" id="name" placeholder='Nombre' onChange={saveData}/>
                        <input className={`${styles.input} ${styles[`input${theme}`]}`} type="input" name="user_email" id="email" placeholder='Correo/Telefono' onChange={saveData}/>
                    </div>
                    <textarea className={`${styles.textarea} ${styles[`input${theme}`]}`} name="user_message" id="message" placeholder='Mensaje' cols="30" rows="10" onChange={saveData}></textarea>
                    <div>
                        <button className={styles.buttonSend} type="submit" disabled={view}><FontAwesomeIcon icon={faPaperPlane} className={`${styles.button} ${styles[`button${theme}`]}`}/></button>
                    </div>
                </form>
        </section>
    );
}

export default Contact;
