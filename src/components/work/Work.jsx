import React,{useContext, useRef, useEffect}from 'react';
import styles from "./Work.module.css";
import works from "../../assets/json/myWorks.json";
import CardWork from "../cardWork/CardWork";
import ThemeContext from "../../context/ThemeContext"


const Work = () => {

    const {theme} = useContext(ThemeContext);

    const refExperience = useRef();

    
    useEffect(() => {
        let options = {
            root: null,
            threshold: '0.30'
          };
    
        const handleIntersection = (e) => {
            if(e[0].isIntersecting){
                e[0].target.classList.add(`${styles.animation}`)
                observer.disconnect()
        }
    }
        let observer = new IntersectionObserver(handleIntersection, options);
        observer.observe(refExperience.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className={`${styles.container} ${styles[theme]}`} id='work'>
            <h2 className={`${styles.title} ${styles[`title${theme}`]}`}>Mi trabajo</h2>
            <section ref={refExperience} className={styles.works}>
                {works.map((element) => <CardWork work={element} key={element.name}/>)}
            </section>
        </section>
    );
}

export default Work;
