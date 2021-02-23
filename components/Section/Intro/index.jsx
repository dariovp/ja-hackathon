import styles from "./Intro.module.css";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from 'next/image';
import draw from "../../../public/rocket.svg"
import rotbtc from "../../../public/tenor.gif"
import mailchimp from "../../../pages/api/mailchimp"
import axios from "axios";
import { useRouter } from "next/router"


export default function Intro(props) {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [open, setOpen] = useState(false);
	const [regSwitch, setregSwitch] = useState(0);
	const [user, setUser] = useState({});

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

	function checkReg() {
		axios.post(`../../../api/user`, {email}).then(response => {
			if(response.status != 204){
				setUser(response["data"]) //["dataValues"]
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

	return (
		<Container fluid className={`${styles.intro}`}>
			<Row lg={2} md={2} sm={2} xs={1} className="py-2 justify-content-md-center align-items-md-center w-100 h-100">
				<Col xl={4} >
					<div className={styles.description}>
						<h1 className={styles.title, styles.delirio}>
							Bienvenido a <label className={styles.moonyTitle}>Moony</label>
						</h1>
						<p className={styles.subtitle}>
							Somos tu red social de inversiones. 
							Estás empezando? Seguí y aprendé de los que saben.
						</p>
						{regSwitch == 0 && <button type="button" className={`btn btn-primary ${styles.regButton}`} onClick = {() => setregSwitch(1)}>Unite</button>}

						{regSwitch != 0 && <div className={styles.registerStyle}>
							{(regSwitch == 1 || regSwitch == 2) && <div>
								<h2 className={styles.regTitle}>Sumate <img className={styles.rotbtc} src={rotbtc} width="40px"></img></h2>
								<p>Queremos que seas parte de la experiencia Moony, dejanos tus datos y se parte del pre-release.</p>
								{regSwitch == 1 && <div className={`form-group ${styles.registerInput}`}>
									<input className={`form-control ${styles.inputForm}` } type="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa tu email" onInput={(e) => setEmail(e.target.value)} />
									<button type="submit" className={`btn btn-primary ${styles.inputButton}`} onClick={(e) => checkReg(e)}>Siguiente</button>
								</div>}

								{regSwitch == 2 && <div className={`form-group ${styles.registerInput}`}>
									<input className={`form-control`} type="text" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter name" onInput={(e) => setName(e.target.value)} />
									<button type="submit" className={`btn btn-primary ${styles.inputButton}`} onClick={(e) => submitRegister(e)}>Despegar</button>
								</div>}
							</div>}

							
							{regSwitch == 3 && <div className={`form-group ${styles.registerStyle}`}>
								<h1>Bienvenido {user.name}</h1>
								<div >
									<Row className={styles.registerRow}>
										<div className={styles.referralCode}><p>Referal Link: https://www.moonyapp.site/?rc={user.id}</p></div>
									</Row>
									<Row className={styles.registerRow}>
										<Col className={styles.registerRow}>
											<div className={styles.registerBox}>Referidos {user.ref} </div>
										</Col>
										<Col className={styles.registerRow}>
											<div className={styles.registerBox}>Coins {user.points}</div>
										</Col>
									</Row>
								</div>
							</div>}
						</div>}
					</div>
				</Col>
				<Col xl={6} className={`d-flex align-items-center justify-content-center`}>
					<Image
						src={draw}
						alt="Picture of the author"
						width={500}
						height={600} />
				</Col>				
			</Row>
		</Container>
	)}


