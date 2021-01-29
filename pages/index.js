import Head from 'next/head'
import NavBar from '../components/NavBar'
import { Section } from '../components/Section'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram,faLinkedin,faTwitter} from '@fortawesome/free-brands-svg-icons'


export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Head>
        <title>Moony App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <Section className="container-fluid">
          <div className={styles.intro}>
            <div className={styles.description}>
              <div>
                <h1 className={styles.title}>
                  Welcome to <label className = {styles.moonyTitle}>Moony</label>
                </h1 >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className = {styles.socialMediaIcons}>
                  <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
                  <FontAwesomeIcon icon={faInstagram} className={styles.icon}/>
                  <FontAwesomeIcon icon={faLinkedin} className={styles.icon}/>
                  <FontAwesomeIcon icon={faTwitter} className={styles.icon}/>

                </div>
              </div>
            </div>

            <div className={styles.rocketLogo}>
              🚀
          </div>
          </div>
        </Section>

      </main>
    </div>
  )
}
