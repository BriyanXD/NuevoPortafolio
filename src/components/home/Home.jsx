import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return (
        <section className={styles.container} id='home'>
            <h1 className={styles.title}>BRIYAN BOHTELO</h1>
            <h2 className={styles.subtitle}>FULL STACK DEVELOPER & APP DEVELOPER</h2>
        </section>
    );
}

export default Home;
