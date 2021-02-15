import styles from "./Intro.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from "react";
import { Button, Collapse } from "react-bootstrap";
import Image from 'next/image';
import smtpImage from "../../../public/smartphone3.gif"
import mailchimp from "../../../pages/api/mailchimp"
import axios from "axios";

export default function Intro(props) {
    let duration = props.duration;
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [open, setOpen] = useState(false);
    const [regSwitch, setregSwitch] = useState('');

    // useEffect(() => {
    //     axios.post("http://localhost:3000/api/mailchimp", {
    //         name: 'Jorge',
    //         email: 'jorge@gmail.com.ar'
    //       })
	// 	.then(response => response.data)
	// 	.then(data => {
	// 		console.log(data)
	// 	})
    // },[]);
    
    function submitRegister(){
        axios.post("http://localhost:3000/api/mailchimp", {
           email,
        }).then(response => {
            console.log("RESPONSE MAILCHIMP", response)
            axios.post(`https://www.moonyapp.site/api/user`, {email})
            .then(response => {
                console.log("RESPONSE DB", response);
            }).catch(response => {
                console.log("ERROR DB", response)
            })
        }).catch(error => {
            console.log("ERROR MAILCHIMP", error)
        })
        setEmail(""); 
    }
    
    return (
        <div className={styles.intro}>
            <div className={styles.description}>
                <div>
                    <h1 className={`${styles.delirio} ${styles.title}`}>
                        Welcome to <label className={styles.moonyTitle}>Moony</label>
                    </h1 >
                    <p className={styles.subtitle}>
                    Somos tu red social de inversiones. 
                    ¿Estás empezando? Seguí y aprendé de los que saben.
                    ¿Sos experto? Generá rendimientos compartiendo tus inversiones y experiencias.                    </p>
                    <div className ={styles.registerStyle}> 
                        <h1>Get Onboard</h1>
                        <div className={`form-group ${styles.registerInput}`}>
                            <input className={`form-control`} value = {email} type="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onInput={(e) => setEmail(e.target.value)} />
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
                width={260}
                height={520}/>            
            </div>
        </div>

    )
}


