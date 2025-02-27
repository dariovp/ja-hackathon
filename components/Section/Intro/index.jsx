import styles from "./Intro.module.css";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from 'next/image';
import draw from "../../../public/rocket.svg"
import rotbtc from "../../../public/tenor.gif"
import networkIcon from "../../../public/networkIcon.png"
import rocketIcon from "../../../public/rocketIcon.png"
import mailchimp from "../../../pages/api/mailchimp"
import axios from "axios";
import { useRouter } from "next/router"


export default function Intro(props) {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [open, setOpen] = useState(false);
	const [regSwitch, setregSwitch] = useState(0);
	const [user, setUser] = useState({});
	const [validEmail, setValidEmail] = useState(false);

	const router = useRouter();
	const { rc } = router.query;

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

	function copyText() {
		/* Get the text field */
		var copyText = document.getElementById("referralUrl");

		/* Select the text field */
		copyText.select();
		copyText.setSelectionRange(0, 99999); /* For mobile devices */

		/* Copy the text inside the text field */
		document.execCommand("copy");

		/* Alert the copied text */
	}

	function checkReg() {
		axios.post(`../../../api/user`, { email }).then(response => {
			if (response.status != 204) {
				console.log("USER", response["data"])
				setUser({
					id: response["data"]["id"],
					name: response["data"]["firstName"],
					points: response["data"]["points"],
					ref: response["data"]["ref"],
				})
				setregSwitch(3)
			} else {
				setregSwitch(2)
			}
		})
	}

	function submitRegister(e) {
		e.preventDefault();
		axios.post("../../../api/mailchimp", {
			email,
			name,
		}).then(response => {
			console.log("RESPONSE MAILCHIMP", response)
			axios.post(`../../../api/user`, { email, name, rc })
			.then(response => {
				console.log("RESPONSE DB", response["data"]);
				setEmail("");
				setregSwitch(3);
				setUser({
					id: response["data"]["id"],
					name: response["data"]["firstName"],
					points: response["data"]["points"],
					ref: response["data"]["ref"],
				})
			}).catch(response => {
				console.log("ERROR DB", response)
			})
		}).catch(error => {
			console.log("ERROR MAILCHIMP", error)
		})
	}

	function inputEmail(value) {
		setEmail(value);
		const re = /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
		setValidEmail(re.test(String(email).toLowerCase()))
	}

	function registerButton(){
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
			setregSwitch(1);
			window.scroll({
				top: 318,
				behavior: 'smooth'
			  });
		} else {
			setregSwitch(1);
		}
	}

	function hideText() {
		var x = document.getElementById("questionText");
		if (x.style.display === "none") {
		  x.style.display = "block";
		} else {
		  x.style.display = "none";
		}
	}

	return (
		<Container fluid className={`${styles.intro}`}>
			<Row xl={4} lg={4} md={2} sm={2} xs={1} className="py-2 justify-content-md-center align-items-md-center w-100">
				<Col xl={1} className="d-flex justify-content-center align-items-center">
					<img src={draw} className={styles.imgStyle2}></img>
				</Col>
				<Col xl={4} >
					<div className={styles.description}>
						<p className={`${styles.title} ${styles.delirio}`}>
							Bienvenido a <label className={styles.moonyTitle}>Moony</label>
						</p>
						<p className={styles.subtitle}>
							Somos tu red social de <label className={styles.moonyTitle}>inversiones</label>
						</p>
						<div className={styles.questionsText} id="questionText">
							<label className={styles.questions}>¿Estas empezando?</label> 
							<p> Seguí y aprende de los que saben.</p>
							
							<label className={styles.questions}>¿Sos experto?</label>
							<p>Genera rendimientos compartiendo tus inversiones y experiencias.</p>
						</div>
						{regSwitch == 0 && <button type="button" className={`btn btn-primary ${styles.regButton}`} onClick={() => registerButton() & hideText() }>Unite</button>}

						{regSwitch != 0 && <div className={styles.registerStyle}>
							{(regSwitch == 1 || regSwitch == 2) && <div>

								<h2 className={styles.regTitle}>Proximamente... <img className={styles.rotbtc} src={rotbtc} width="40px"></img></h2>
								<p className={styles.regText}>Dejanos tus datos y revisa tu mail para sumarte al pre-release (acordate de chequear spam o promociones!)</p>

								{regSwitch == 1 && <div className={`form-group ${styles.registerInput}`}>
									<input className={`form-control ${styles.inputForm}`} type="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa tu email" onChange={(e) => inputEmail(e.target.value)} />
									<button type="submit" disabled={!validEmail} className={`btn btn-primary ${styles.inputButton}`} onClick={(e) => checkReg(e)}>Siguiente</button>
								</div>}

								{regSwitch == 2 && <div className={`form-group ${styles.registerInput}`}>
									<input className={`form-control ${styles.inputForm}`} type="text" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Ingresa tu nombre" onInput={(e) => setName(e.target.value)} />
									<button type="submit" disabled={name.length < 2} className={`btn btn-primary ${styles.inputButton}`} onClick={(e) => submitRegister(e)}>Despegar</button>
								</div>}
							</div>}
							{regSwitch == 3 && <div>
								<div className={styles.refHeader}>
									<h2>Hola <label className={styles.refName}>{user.name}</label></h2>
									<h4 className={styles.regTitle}>¡Referi y gana!</h4>
								</div>
								<div >
									<Row className={styles.registerRow}>
										<div className="input-group mb-3">
											<input type="text" id="referralUrl" className={`form-control ${styles.inputForm}`} placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" value={`https://www.moonyapp.site/?rc=${user.id}`} />
											<div className="input-group-append">
												<label className={`input-group-text ${styles.inputForm} ${styles.shareStyle}`} onClick={() => copyText()} >Copiar</label>
											</div>
										</div>
									</Row>
									<Row className={styles.registerRow}>
										<Col className={styles.registerRow}>
											<div className={styles.registerBox}>
												<div><img src={networkIcon} width="50px"></img></div>
												<div className={styles.registerBoxCol}>
													<div className={styles.refTitle}>Referidos</div>
													<div className={styles.refNum}>{user.ref}</div>
												</div>
											</div>
										</Col>
										<Col className={styles.registerRow}>
											<div className={styles.registerBox}>
												<div><img src={rocketIcon} width="50px"></img></div>
												<div className={styles.registerBoxCol}>
													<div className={styles.refTitle}>Moony´s</div>
													<div className={styles.refNum}>{user.points}</div>
												</div>
											</div>
										</Col>
									</Row>
								</div>
							</div>}
						</div>}
					</div>
				</Col>
				<Col xl={7} className={`d-flex align-items-end justify-content-center`}>
					<img src={draw} className={styles.imgStyle}></img>
				</Col>
			</Row>
		</Container>
	)
}


