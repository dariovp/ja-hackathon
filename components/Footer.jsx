import styles from "./Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import logo from '../public/moonyLogo.jpg'

export default function Footer() {
    
	return (
		<div className="justify-content-center w-100 h-100 ">
			<footer className={`w-100 ${styles.all}`}>

				<div className={styles.twitterWidget}>
					<a className="twitter-timeline" data-width="100%" data-height="100%" data-theme="ligth" href="https://twitter.com/themoonyapp?ref_src=twsrc%5Etfw">Tweets by themoonyapp</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
				</div>

				<div className={`p-2 w-100 d-flex justify-content-between align-items-center`}>
					<div className={styles.logoANDrights}>
						{/* Logo */}
						<div className={styles.logo}>
							<img src={logo} alt='logo' className={styles.moonyLogo}/>
						</div>

						{/* Rigth text */}
						<div className={styles.rights}>
							<p>©2021 Moony. All rights reserved</p>
						</div>
					</div>
					{/* Mail de contacto y redes */}
					<div className={`${styles.contactText}`}>
						<div className={styles.mail}>
							<div className={styles.mailIcon}>
								<FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>
							</div>
							<div className={styles.mailText}>
								<div>team@moonyapp.site</div>
							</div>
						</div>
						<div className={styles.socialMediaIcons}>
							<FontAwesomeIcon icon={faFacebook} className={styles.icon} />
							<FontAwesomeIcon icon={faInstagram} className={styles.icon} />
							<FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
							<FontAwesomeIcon icon={faTwitter} className={styles.icon} />
						</div>
					</div>

					

				</div>
				{/* <div className={styles.all}>
				<div className="">
					
				</div>
				
				Widget Twitter
				
			</div> */}
			</footer>
		</div>
	);
}