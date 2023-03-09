import React,{useContext, useRef, useState} from 'react';
import styles from "./Contact.module.css";
import ThemeContext from "../../context/ThemeContext";
import Linkedin from '../icons/Linkedin';
import GitHub from '../icons/GitHub';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-regular-svg-icons";
import emailjs from "@emailjs/browser";
import Send from '../send/Send';
import Tooltip from "../../components/tooltip/Tooltip"

const Contact = () => {

    const [view, setView] = useState(false);

    const [status, setStatus] = useState(0);

    const emailRef = useRef(null);

    const {VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY} = import.meta.env;
    
    const [data, setData] = useState({user_name:"",user_email:"",user_message:""});
    const [errors, setErros] = useState({});
    const [loading, setLoading] = useState(false);
    const {theme} = useContext(ThemeContext);

    const validateForm = () => {
        const errors = {};
        if(data.user_name === "")errors.user_name = "El campo 'Nombre' es requerido.";
        if(data.user_email === "")errors.user_email = "El campo 'Correro' es requerido.";
        if(data.user_message === "")errors.user_message = "El campo 'Mensaje' es requerido.";
        return errors;
    }

    const sendEmail = async(e) => {
        e.preventDefault();
        setErros(validateForm())
        if(Object.keys(errors).length === 0){
            setLoading(true);
            emailjs.sendForm(VITE_SERVICE_ID,VITE_TEMPLATE_ID,e.target,VITE_PUBLIC_KEY)
            .then(response =>{
                setLoading(false);
                setStatus(response.status)
                setView(true)
                clearForm();
            })
            .catch(error =>{
                setLoading(false);
                setStatus(error.status)
                setView(true)
            });
        }else{
            return
        }
    }

    const saveData = e => {
        setData({...data, [e.target.name]:e.target.value})
    }
    const handleBlur = (e) => {
        saveData(e);
        setErros(validateForm());
    }

    const clearForm = () => {
        let stateReseted = {};
        for(let key in data) stateReseted = {...stateReseted, [key]:""}
        setData(stateReseted)
    }

    const copyText = () => {
        emailRef.current.select();
        document.execCommand("copy");
    }

    return (
        <section className={`${styles.container} ${styles[theme]}`} id='contact'>
                <Send view={view} setView={setView} status={status}/>
                <div className={styles.containerInfo}>
                <h2 className={styles.title}>Contacto</h2>
                    <p className={styles.description}>Contactame para participar en tu equipo como desarrolador.</p>
                    <Tooltip info="Click para copiar mi correo">
                    <input className={`${styles.email} ${styles[`email${theme}`]}`} ref={emailRef} onClick={copyText} value="briyan.bohtelo@gmail.com"/>
                    </Tooltip>
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
                        <input className={`${styles.input} ${styles[`input${theme}`]}`} type="text" name="user_name" id="name" placeholder='Nombre' onChange={saveData} value={data.user_name} onBlur={handleBlur} required/>
                        <input className={`${styles.input} ${styles[`input${theme}`]}`} type="input" name="user_email" id="email" placeholder='Correo' value={data.user_email} onChange={saveData} onBlur={handleBlur} required/>
                    </div>
                    <div className={styles.containerInput}>
                    {errors.user_name && <span className={styles.error}>{errors.user_name}</span>}
                    {errors.user_email && <span className={styles.error}>{errors.user_email}</span>}
                    </div>
                    <textarea className={`${styles.textarea} ${styles[`input${theme}`]}`} name="user_message" id="message" placeholder='Mensaje' cols="30" rows="10" value={data.user_message} onChange={saveData} onBlur={handleBlur} required></textarea>
                    {errors.user_message && <span className={styles.error}>{errors.user_message}</span>}
                    <div>
                        <button className={styles.buttonSend} type="submit" disabled={loading}><FontAwesomeIcon icon={faPaperPlane} className={`${styles.button} ${styles[`button${theme}`]}`}/></button>
                    </div>
                </form>
        </section>
    );
}

export default Contact;
