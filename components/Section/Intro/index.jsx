import styles from "./Intro.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useState } from "react";
import { Button, Col, Collapse, Container, Row } from "react-bootstrap";
import Image from 'next/image';
import smtpImage from "../../../public/smartphone.png"

export default function Intro(props) {
	const [duration, setDuration] = useState(props.duration);
	const [email, setEmail] = useState('');
	const [open, setOpen] = useState(false);

	return (
		<Container className={styles.intro}>
			<Row className="justify-content-md-center align-items-md-center w-100 h-100">
				<div className={styles.description}>
				
					<h1 className={styles.title}>
						Welcome to <label className={styles.moonyTitle}>Moony</label>
					</h1>
					<p className={`${styles.subtitle} w-100`}>
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
		
				
				{/* <Col xs lg="2">
					<div>
						<Image
							className={styles.imgStyle}
							src={smtpImage}
							alt="Picture of the author"
							width={300}
							height={520}/>            
            
					</div>
				</Col> */}
			</Row>
		
		

		</Container>

	)
}


