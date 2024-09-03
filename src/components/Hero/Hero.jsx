import React from "react";
import {getImageUrl} from '../../utils'
import styles from "./Hero.module.css"
export const Hero = () =>{
    return (
    <section className={styles.container}>
        <div className={styles.content}> 
            <h1 className={styles.title}>Hi, I'm Abhijith S</h1>
            <p className={styles.description}>
            I am an Electronics and Communication Engineering student with hands-on experience in electronics. While skilled in
 circuit design and signal processing, my passion is web development. I have strong coding skills and experience in
 both front-end and back-end development, and I’m eager to contribute to innovative projects in a dynamic team.
            </p>
            <a href="mailto:abhi.s.17.2002@gmail.com" 
            className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} 
        alt="Image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
    )
} 