import styles from '../WhatIs.jsx/WhatIs.module.css'
import Card from "../../Commons/card"
import smtpImage from "../../../public/smartphone3.gif"

import Image from 'next/image';
import { motion } from "framer-motion"


import { faChartLine, faCommentsDollar,faUser} from '@fortawesome/free-solid-svg-icons';
import { Col, Container, Row } from 'react-bootstrap';


export default function WhatIs () {
	const cardText1 = "Copiá los movimientos de los mejores inversores y ganá como ellos mientras aprendés en el camino"
	const cardText2 = "Descubrí y conectá con gente de la comunidad"
	// Enterate cuáles son las opiniones y últimos hallazgos de los expertos en el mercado. 
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
				<Row className="d-flex justify-content-center align-items-center">
					<Col xl={6} lg={6} md={6}>
						<div className=" w-auto p-1 d-flex justify-content-center align-items-center">
							<Image
								className={styles.imgStyle}
								src={smtpImage}
								alt="Picture of the author"
								width={260}
								height={520} />
						</div>
					</Col>
					<Col xl={6} lg={6} md={6} className="d-flex justify-content-center align-items-center flex-column my-2">
						<Card description={cardText1} icon = {faChartLine} />
						<Card description={cardText2} icon = {faCommentsDollar}/>
						<Card description={cardText3} icon = {faUser}/>
					</Col>
				</Row>
			</Container>
			{/* <motion.div initial="false" animate="visible" variants={variants} className = {styles.cardContainer}>
			</motion.div> */}
		</div> 
	)
}