import React,{useState}from 'react';
import styles from "./Work.module.css";
import works from "../../assets/json/myWorks.json";
import CardWork from "../cardWork/CardWork";
const Work = () => {

    return (
        <div className={styles.container} id='work'>
            <h2 className={styles.title}>My Work</h2>
            <div className={styles.works}>
                {works.map((element) => <CardWork work={element} key={element.name}/>)}
            </div>
        </div>
    );
}

export default Work;
