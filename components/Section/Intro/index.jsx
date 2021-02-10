import styles from "./Intro.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import Image from 'next/image';
import smtpImage from "../../../public/smartphone.png"

export default function Intro(props) {
    let duration = props.duration;
    const [email, setEmail] = useState('');
    const [open, setOpen] = useState(false);

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
                    <div className ={styles.registerStyle}> 
                        <h1>Get Onboard</h1>
                        <div className={`form-group ${styles.registerInput}`}>
                            <input className={`form-control`} type="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onInput={(e) => setEmail(e.target.value)} />
                            <button type="submit" className={`btn btn-primary ${styles.inputButton}`} onClick={(e) => submitRegister()}>Join</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className={styles.rocketSection}>
                <div className={styles.rocketLogo}>🚀</div>
                {duration && <div className={styles.counter}>
                    <div><div className={styles.timebox}>{duration['_data']['days']}</div><span className={styles.dateInfo}>Days</span></div>
                    <div><div className={styles.timebox}>{duration['_data']['hours']}</div><span className={styles.dateInfo}>Hours</span></div>
                    <div><div className={styles.timebox}>{duration['_data']['minutes']}</div><span className={styles.dateInfo}>Minutes</span></div>
                    <div><div className={styles.timebox}>{duration['_data']['seconds']}</div><span className={styles.dateInfo}>Seconds</span></div>
                </div>}
            </div> */}

            <div>
                <Image
                className={styles.imgStyle}
                src={smtpImage}
                alt="Picture of the author"
                width={300}
                height={520}/>            
            
            </div>

        </div>

    )
}


