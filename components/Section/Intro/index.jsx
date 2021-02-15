import styles from "./Intro.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useState } from "react";
import { Button, Col, Collapse, Container, Row } from "react-bootstrap";
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



    function submitRegister() {
        axios.post("../../../api/mailchimp", {
            email,
        }).then(response => {
            console.log("RESPONSE MAILCHIMP", response)
            axios.post(`../../../api/user`, { email })
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
        <Container fluid className={`${styles.intro}`}>
            <Row className="justify-content-md-center align-items-md-center w-100 h-100">

                <Col>
                    <div className={styles.description}>

                        <h1 className={styles.title}>
                            Welcome to <label className={styles.moonyTitle}>Moony</label>
                        </h1>
                        <p className={`${styles.subtitle} w-80`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
                        <div className={styles.registerStyle}>
                            <h1>Get Onboard</h1>
                            <div className={`form-group ${styles.registerInput}`}>
                                <input className={`form-control`} type="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onInput={(e) => setEmail(e.target.value)} />
                                <button type="submit" className={`btn btn-primary ${styles.inputButton}`} onClick={(e) => submitRegister()}>Join</button>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div>
                        <Image
                            className={styles.imgStyle}
                            src={smtpImage}
                            alt="Picture of the author"
                            width={260}
                            height={520} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


