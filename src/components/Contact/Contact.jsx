import React from "react";
import {getImageUrl} from '../../utils'
import styles from './Contact.module.css'

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out !</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} 
                    alt="email-icon" />
                    <a href="mailto:abhi.s.17.2002@gmail.com">Email</a>
                </li>

                <li className={styles.link}> 
                    <img src={getImageUrl("contact/githubIcon.png")} 
                    alt="github-icon" />
                    <a href="https://github.com/user1222234">Github</a>
                </li>
            </ul>
        </footer>
    )
}