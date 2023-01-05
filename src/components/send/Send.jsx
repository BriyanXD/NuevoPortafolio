import rect,{useEffect, useRef, useContext} from "react";
import ThemeContext from "../../context/ThemeContext";
import styles from "./Send.module.css";


const Send = ({view, setView, status}) => {

    const containerRef = useRef();

    const {theme} = useContext(ThemeContext);

    const handleOk = () => {
        containerRef.current.classList.remove(styles.view)
    }

    useEffect(() => {
        if(view){
            containerRef.current.classList.add(styles.view)
            setTimeout(() => {
                containerRef.current.classList.remove(styles.view)
                setView(false)
            }, 10000)
        }
        else {
            containerRef.current.classList.remove(styles.view)
            setView(false)
        }
    },[view]);

    return(
        <div ref={containerRef} className={`${styles.container} ${styles[theme]}`}>
            <p className={styles.text}>{status === 200 ? "Correo enviado con exito." : "Error al eviar el correo."}</p>
            <div className={styles.containerButton}>
                <button className={`${styles.button} ${styles[`button${theme}`]}`} onClick={handleOk}>OK</button>
            </div>
        </div>
    )
}

export default Send;