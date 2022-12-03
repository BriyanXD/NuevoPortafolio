import React,{useContext}from 'react';
import styles from "./Work.module.css";
import works from "../../assets/json/myWorks.json";
import CardWork from "../cardWork/CardWork";
import ThemeContext from "../../context/ThemeContext"


const Work = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <section className={`${styles.container} ${styles[theme]}`} id='work'>
            <h2 className={`${styles.title} ${styles[`title${theme}`]}`}>My Work</h2>
            <section className={styles.works}>
                {works.map((element) => <CardWork work={element} key={element.name}/>)}
            </section>
        </section>
    );
}

export default Work;
