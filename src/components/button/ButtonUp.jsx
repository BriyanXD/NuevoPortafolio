import React,{useRef} from 'react';
import styles from "./ButtonUp.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons"

const ButtonUp = () => {

    const buttonRef = useRef();

    return (
            <a ref={buttonRef} className={styles.container} href="#home">
                <FontAwesomeIcon className={styles.icon} icon={faArrowUp}/>
            </a>
    );
}

export default ButtonUp;
