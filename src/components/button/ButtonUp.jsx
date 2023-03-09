import React,{useContext, useEffect, useRef} from 'react';
import styles from "./ButtonUp.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons"
import ThemeContext from "../../context/ThemeContext"
const ButtonUp = () => {

    const buttonRef = useRef();
    const { theme } = useContext(ThemeContext)
    
    useEffect(() => {
            const calculateScroll = () => {
                if(window.scrollY < 100){
                    buttonRef.current.classList.add(styles.disable)
                }else{
                    buttonRef.current.classList.remove(styles.disable)
                }
            }
        window.addEventListener("scroll" , calculateScroll)
        return () => window.removeEventListener("scroll", calculateScroll)
    })


    return (
            <a ref={buttonRef} className={`${styles.container} ${styles[theme]}`} href="#home">
                <FontAwesomeIcon className={styles.icon} icon={faArrowUp}/>
            </a>
    );
}

export default ButtonUp;
