import React,{useContext, useEffect, useState} from 'react';
import styles from "./Modal.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faCode } from '@fortawesome/free-solid-svg-icons';
import myWork from "../../assets/json/myWorks.json";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ThemeContext from "../../context/ThemeContext";
import { Helmet } from 'react-helmet';

const Modal = () => {

    const {theme} = useContext(ThemeContext);

    const {name} = useParams();
    const [work, setWork] = useState(myWork[0]);

    useEffect(() => {
        const currentWork = myWork.filter(element => element.name === name);
        setWork(currentWork[0] ? currentWork[0] :myWork[0]);
    },[work])


    return (
        <section className={`${styles.container} ${styles[theme]}`}>
            <Helmet>
                <title>Briyan Bohtelo | {work.name}</title>
            </Helmet>
            <div className={styles.containerButton}>{/* 
                <Link className={`${styles.closeButton} ${styles[`close${theme}`]}`} to="/">{"<"}</Link> */}
                <input type="button" className={`${styles.closeButton} ${styles[`close${theme}`]}`} value="<" onClick={() => window.history.back()}/>
            </div>
            <article className={styles.info}>
                <h2 className={styles.title}>{work.name}</h2>
                <div className={styles.containerDescription}>
                    <p className={styles.description}>{work.description}</p>
                    <ul className={styles.table}>
                        <li>
                            <h3 className={`${styles.subtitle} ${styles[`subtitle${theme}`]}`}>Tecnologias</h3>
                            <p className={styles.tech}>{work.tech}</p>
                        </li>
                        <li>
                            <h3 className={`${styles.subtitle} ${styles[`subtitle${theme}`]}`}>Cliente</h3>
                            <p className={styles.tech}>{work.client}</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.containerLinks}>
                    <a href={work.web} target='_BLANK'><FontAwesomeIcon className={`${styles.icon} ${styles[`icon${theme}`]}`} icon={ faGlobe } /></a>
                    <a href={work.repo}target='_BLANK'><FontAwesomeIcon className={`${styles.icon} ${styles[`icon${theme}`]}`} icon={ faCode } /></a>
                </div>
                <div className={styles.containerImages}>
                    {work.images.map((image, index) => <img className={styles.image} src={image} key={index} /> )}
                </div>
                <p className={styles.footer}>Desarrolado por @Briyan Bohtelo</p>
            </article>
        </section>
    );
}

export default Modal;
