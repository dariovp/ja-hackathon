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


export default function Home(props) {
	const [duration, setDuration] = useState(undefined);

	useEffect(() => {
		// axios.get("https://moony-chi.vercel.app/api/users?name=hernan&email=asdasdas")
		// .then(response => response.data)
		// .then(data => {
		// 	console.log(data)
		// })

		console.log("Props ", JSON.parse(props.env))

		axios
		.get(
			"https://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires"
		)
		.then((response) => response.data)
		.then((data) => {
			console.log(data);
			console.log("Props -> ", JSON.parse(props.env))
			const now = moment.utc(data["datetime"], moment.ISO_8601);
			const lanzamiento = moment.utc(
				"2021-03-01T00:00:00.151826-03:00",
				moment.ISO_8601
			);

			let timeDiff = lanzamiento - now;

			let dur = moment.duration(timeDiff);
			setDuration(dur);
		});
	}, []);

	useEffect(() => {
		let timer;
		if (duration) {
			timer = setInterval(() => {
				// console.log("Cambiando", duration);
				setDuration(duration.clone().subtract(1, "seconds"));
			}, 1000);
		}

		return () => clearInterval(timer);
	});

	return (
		<div className={styles.container}>
			<Head>
				<title>Moony App</title>
				<link rel="icon" href="/favicon.ico" />
				{/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script> */}
			</Head>
			<NavBar />
			<main className={styles.main}>
				<Section className="container-fluid">
					<Intro duration={duration}></Intro>
				</Section>
				<Section>
					<WhatIs></WhatIs>
				</Section>
				<div className={styles.footerP}>
					<Footer></Footer>
				</div>
			</main>
		</div>
	)

}

export async function getStaticProps(context) {
	
	return {
		props: {
			env: JSON.stringify(process.env)
		}, // will be passed to the page component as props
	}
}