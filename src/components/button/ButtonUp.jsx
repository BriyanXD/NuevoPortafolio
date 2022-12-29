import React from 'react';
import styles from "./ButtonUp.module.css";

const ButtonUp = () => {

    const handleBut = () => {
        console.log(window.screenY)
    }
    return (
        <div  className={styles.container} onScroll={handleBut}>
        </div>
    );
}

export default ButtonUp;
