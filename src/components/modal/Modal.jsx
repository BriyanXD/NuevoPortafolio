import React,{Children, useEffect, useState} from 'react';
import styles from "./Modal.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faCode } from '@fortawesome/free-solid-svg-icons';
import myWork from "../../assets/json/myWorks.json";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Modal = () => {

    const {name} = useParams();
    const [work, setWork] = useState(myWork[0]);

    useEffect(() => {
        const currentWork = myWork.filter(element => element.name === name);
        setWork(currentWork[0] ? currentWork[0] :myWork[0]);
    },[work])


    return (
        <div className={ styles.containerOn}>
            <div className={styles.containerButton}>
                <Link className={styles.closeButton} to="/">{"<"}</Link>
            </div>
            <div className={styles.info}>
                <h2 className={styles.title}>{work.name}</h2>
                <div className={styles.containerDescription}>
                    <p className={styles.description}>{work.description}</p>
                    <ul className={styles.table}>
                        <li>
                            <h3 className={styles.subtitle}>Tecnologias</h3>
                            <p className={styles.tech}>{work.tech}</p>
                        </li>
                        <li>
                            <h3 className={styles.subtitle}>Cliente</h3>
                            <p className={styles.tech}>{work.client}</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.containerLinks}>
                    <a href={work.web} target='_BLANK'><FontAwesomeIcon className={styles.icon} icon={ faGlobe } /></a>
                    <a href={work.repo}target='_BLANK'><FontAwesomeIcon className={styles.icon} icon={ faCode } /></a>
                </div>
                <div className={styles.containerImages}>
                    {work.images.map((image, index) => <img className={styles.image} src={image} key={index} /> )}
                </div>
                <p className={styles.footer}>Desarrolado por @Briyan Bohtelo</p>
            </div>
        </div>
    );
}

export default Modal;
