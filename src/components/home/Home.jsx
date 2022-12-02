import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.container} id='home'>
            <h1 className={styles.title}>BRIYAN BOHTELO</h1>
            <p className={styles.subtitle}>FULL STACK DEVELOPER & APP DEVELOPER</p>
        </div>
    );
}

export default Home;
