import Head from 'next/head'
import NavBar from '../components/NavBar'
import { Section } from '../components/Section'
import styles from '../styles/Home.module.css'
import Intro from "../components/Section/Intro"
import axios from 'axios';
import { useEffect, useState } from 'react';
import moment from 'moment';



export default function Home() {

  const [duration, setDuration] = useState(undefined);


	useEffect(() => {
		axios.get("http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires")
		.then(response => response.data)
		.then(data => {
			console.log(data)
			const now = moment.utc(data['datetime'], moment.ISO_8601);
			const lanzamiento = moment.utc("2021-03-01T00:00:00.151826-03:00", moment.ISO_8601);

			let timeDiff = lanzamiento - now;

			let dur = moment.duration(timeDiff);
			setDuration(dur)

		})

	}, []);

	useEffect(() => {
		let timer;
		if(duration) {
			timer = setInterval(() => {
				console.log("Cambiando", duration)
				setDuration(duration.clone().subtract(1, 'seconds'));
		  }, 1000);
		}
		

	  return () => clearInterval(timer);
	})

  return (
    <div className={styles.container}>
      <NavBar />
      <Head>
        <title>Moony App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Section className="container-fluid">
          <Intro duration={duration} className={styles.intro}></Intro>
        </Section>

      </main>
    </div>
  )
}
