import styles from "./Intro.module.css";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import mailchimp from "../../../pages/api/mailchimp"
import axios from "axios";
import { useRouter } from "next/router"


export default function Intro(props) {
	let duration = props.duration;
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [open, setOpen] = useState(false);
	const [regSwitch, setregSwitch] = useState(1);
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
				setregSwitch(2);
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
				<Col xl={4}>
					<div className={styles.description}>
						<h1 className={`${styles.title} ${styles.delirio}`}>
							Welcome to <label className={styles.moonyTitle}>Moony</label>
						</h1>
						<p className={`${styles.subtitle}`}>
							Somos tu red social de inversiones. 
							Estás empezando? Seguí y aprendé de los que saben.
							Sos experto? Generá rendimientos compartiendo tus inversiones y experiencias.
						</p>
						<div className={styles.registerStyle}>
							{regSwitch == 1 && <div>
								<h1>Get Onboard</h1>
								<div className={`form-group ${styles.registerInput}`}>
									<input className={`form-control`} type="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onInput={(e) => setEmail(e.target.value)} />
									<input className={`form-control`} type="text" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter name" onInput={(e) => setName(e.target.value)} />
									<button type="submit" className={`btn btn-primary ${styles.inputButton}`} onClick={(e) => submitRegister(e)}>Join</button>
								</div>
							</div>}

							{regSwitch == 2 && <div className={`form-group ${styles.registerInput}`}>
								<h1>Bienvenido {user.name}</h1>
								<div >
									<Row className={styles.registerRow}>
										<div className={styles.referralCode}><p>Referal Link: https://www.moonyapp.site/?rc={user.id}</p></div>
									</Row>
									<Row className={styles.registerRow}>
										<Col>
											<div className={styles.registerBox}>Referidos {user.ref} </div>
										</Col>
										<Col>
											<div className={styles.registerBox}>Coins {user.points}</div>
										</Col>
									</Row>
								</div>
							</div>}
						</div>
					</div>
				</Col>
				<Col xl={4} className="d-flex align-items-center justify-content-center">
					
				</Col>				
			</Row>
		</Container>
	)}


