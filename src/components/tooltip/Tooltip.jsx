import React from 'react';
import styles from "./Tooltip.module.css"

const Tooltip = ({children, info}) => {
    return (
        <div className={styles.container}>
            <span className={styles.info}>{info}</span>
            <div className={styles.children}>{children}</div>
        </div>
    );
}

export default Tooltip;
