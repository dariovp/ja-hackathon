import styles from '../WhatIs.jsx/WhatIs.module.css'
import Card from "../../Commons/card"
import { motion } from "framer-motion"


import { faChartLine, faCommentsDollar,faUser} from '@fortawesome/free-solid-svg-icons';
import { Col, Container, Row } from 'react-bootstrap';


export default function WhatIs () {
	const cardText1 = "Copiá los movimientos de los mejores inversores y ganá como ellos mientras aprendés en el camino"
	const cardText2 = "Descubrí y conectá con gente de la comunidad. Enterate cuáles son las opiniones y últimos hallazgos de los expertos en el mercado. "
	const cardText3 = "Si sos trader, compartí y monetiza tus conocimientos y opiniones!"

	const variants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	}

	return (
		<div className={styles.main}>
			
			<Container fluid>
				<div className={styles.missionStatement}>
					<h1>Discover</h1>
					<p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
				</div>
				<Row xl={3} lg={3} md={3} sm={1} xs={1}>
					<Col className="d-flex justify-content-center align-items-center my-2">
						<Card  title = "Feature 1" description={cardText1} icon = {faChartLine} />
					</Col>
					<Col className="d-flex justify-content-center align-items-center my-2">
						<Card title = "Feature 2" description={cardText2} icon = {faCommentsDollar}/>
					</Col>
					<Col className="d-flex justify-content-center align-items-center my-2">
						<Card title = "Feature 3" description={cardText3} icon = {faUser}/>
					</Col>
				</Row>
			</Container>
			{/* <motion.div initial="false" animate="visible" variants={variants} className = {styles.cardContainer}>
			</motion.div> */}
		</div> 
	)
}