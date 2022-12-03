import React,{useContext} from 'react';
import styles from "./Tooltip.module.css"
import ThemeContext from "../../context/ThemeContext"

const Tooltip = ({children, info}) => {

    const {theme} = useContext(ThemeContext);

    return (
        <div className={styles.container}>
            <span className={`${styles.info} ${styles[theme]}`}>{info}</span>
            <div className={styles.children}>{children}</div>
        </div>
    );
}

export default Tooltip;
