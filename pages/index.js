import Head from 'next/head'
import NavBar from '../components/NavBar'
import { Section } from '../components/Section'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Head>
        <title>Moony App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Moony</a>
        </h1>

        <Section className="container-fluid">

        </Section>

      </main>
    </div>
  )
}
