import React from 'react';
import styles from './Home.module.css';
import { Helmet } from 'react-helmet';


const Home = () => {
    return (
        <section className={styles.container} id='home'>
            <Helmet>
                <title>Briyan Bohtelo | Portafolio</title>
                <meta name="description" content="Portafolio profesional de Briyan Angel Bohtelo como full stack web developer" />
            </Helmet>
            <h1 className={styles.title}>BRIYAN BOHTELO</h1>
            <h2 className={styles.subtitle}>FULL STACK DEVELOPER & WEB DEVELOPER</h2>
        </section>
    );
}

export default Home;
