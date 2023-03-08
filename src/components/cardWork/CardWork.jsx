import React,{useContext} from 'react';
import styles from "./CardWork.module.css";
import { Link } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Tooltip from '../tooltip/Tooltip';

const CardWork = ({work}) => {

    const {theme} = useContext(ThemeContext);

    return (
        <article className={`${styles.container} ${styles[theme]}`}>
            <div className={styles.containerImage}>
            <img className={styles.image} src={work.image} alt={work.name} />
            </div>
            <h3 className={`${styles.title} ${styles[`title${theme}`]}`}>{work.name}</h3>
            <p className={`${styles.rol} ${styles[`rol${theme}`]}`}>{work.rol}</p>
            <Link className={styles.button} to={`/project/${work.name}`}><FontAwesomeIcon className={`${styles.icon} ${styles[`icon${theme}`]}`} icon={faEye}/></Link>
        </article>
    );
}

export default CardWork;
