import React from 'react';
import styles from "./CardWork.module.css";
import { Link } from "react-router-dom";


const CardWork = ({work}) => {

    return (
        <div className={styles.container}>
            <img className={styles.image} src={work.image} alt={work.name} />
            <h3 className={styles.title}>{work.name}</h3>
            <p className={styles.rol}>{work.rol}</p>
            <Link className={styles.button} to={`/project/${work.name}`}>{">_"}</Link>
        </div>
    );
}

export default CardWork;
