import styles from "./Intro.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { useState } from "react";


export default function Intro({ duration }) {
return (
    <div className={styles.intro}>
    <div className={styles.description}>
        <div>
            <h1 className={styles.title}>
                Welcome to <label className={styles.moonyTitle}>Moony</label>
            </h1 >
            <p className={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className={styles.socialMediaIcons}>
                <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
                <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
                <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
                <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
            </div>
        </div>
    </div>
    <div className={styles.rocketSection}>
        <div className={styles.rocketLogo}>🚀</div>
        {
                duration && <div className={styles.counter}>

           
                <div className={styles.timebox}>{duration['_data']['days']}</div>
                <div className={styles.timebox}>{duration['_data']['hours']}</div>
                <div className={styles.timebox}>{duration['_data']['minutes']}</div>
                <div className={styles.timebox}>{duration['_data']['seconds']}</div>
            </div>
        }
        
        <div>
            <div></div>
        </div>
    </div>
</div>

)}


