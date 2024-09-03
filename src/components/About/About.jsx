import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css"

export const About = () =>{
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")} 
                alt="me sitting with a laptop" 
                className={styles.aboutImage}/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} 
                        alt="cursor" />
                        <div className={styles.aboutItemText}>
                            <h3>frontend developer</h3>
                            <p>As a front-end developer, I specialize in crafting responsive, user-friendly interfaces that bring designs to life. With expertise in HTML, CSS, and JavaScript, I create seamless and engaging web experiences. My passion lies in combining aesthetic design with clean, efficient code to deliver exceptional user experiences across all devices.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} 
                        alt="server"  />
                        <div className={styles.aboutItemText}>
                            <h3>Backend developer</h3>
                            <p>As a back-end developer, I build robust and scalable server-side applications that power seamless user experiences. With a deep understanding of databases, APIs, and server management, I ensure data integrity, security, and efficient communication between the front end and back end. My focus is on creating reliable, high-performance systems that support modern web applications</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} 
                        alt="UI icon"  />
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>As a UI developer, I transform design concepts into interactive, visually appealing user interfaces. With a keen eye for detail and a strong grasp of design principles, I ensure that every pixel serves a purpose. I focus on creating intuitive, accessible, and engaging interfaces that enhance user experience while maintaining the integrity of the design vision.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}