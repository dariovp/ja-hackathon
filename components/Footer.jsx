import styles from "./Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import logo from '../public/moonyLogo.png'

export default function Footer() {
    
	return (
		<div className={`justify-content-center w-100 ${styles.footerContainer}`}>
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
							<div>©2021 Moony. All rights reserved</div>
						</div>
					</div>
					{/* Mail de contacto y redes */}
					<div className={`${styles.contactText}`}>
						<div className={styles.mail}>
							<div className={styles.mailIcon}>
								<svg xmlns="http://www.w3.org/2000/svg" className={`bi bi-envelope-fill`} fill="white" width="16" height="16" viewBox="0 0 16 16">
									<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
								</svg>
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