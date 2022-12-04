import React from 'react';
import styles from './Load.module.css'
import loadImage from "../../assets/img/load.png"


const Load = () => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={loadImage} alt="" />
        </div>
    );
}

export default Load;
