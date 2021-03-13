import Head from "next/head";
import NavBar from "../components/NavBar";
import { Section } from "../components/Section";
import styles from "../styles/Home.module.css";
import Intro from "../components/Section/Intro";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
import WhatIs from "../components/Section/WhatIs.jsx";
import Footer from "../components/Footer";


export default function Home() {
	const [duration, setDuration] = useState(undefined);

	useEffect(() => {

	}, []);

	return (
		<div className={styles.container}>
			<Head>
				<title>Moony App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />
			<main className={styles.main}>
				<Section className="container-fluid">
					<Intro duration={duration} />
				</Section>
				<Section>
					<WhatIs />
				</Section>
	
					
				<Footer />
			</main>
		</div>
	)

}
