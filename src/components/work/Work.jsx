import React,{useContext}from 'react';
import styles from "./Work.module.css";
import works from "../../assets/json/myWorks.json";
import CardWork from "../cardWork/CardWork";
import ThemeContext from "../../context/ThemeContext"


const Work = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <div className={`${styles.container} ${styles[theme]}`} id='work'>
            <h2 className={`${styles.title} ${styles[`title${theme}`]}`}>My Work</h2>
            <div className={styles.works}>
                {works.map((element) => <CardWork work={element} key={element.name}/>)}
            </div>
        </div>
    );
}

export default Work;
