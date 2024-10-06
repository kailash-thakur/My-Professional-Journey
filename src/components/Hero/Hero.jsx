import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Kailash </h1>
                <p className={styles.description}>
                    I am a software developer with 5 years of Experience. Reach out if you would like to know more!
                </p>
                <a href="mailto:kailashthakur0703@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/myImage.png")} className={styles.heroImg} alt = "Image of me"></img>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlue}></div>
        </section>
    );
};