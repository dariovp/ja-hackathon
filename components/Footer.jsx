import styles from "./Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import logo from '../public/moonyLogo.png'
import { Row } from "react-bootstrap";

export default function Footer() {
    
	return (
		<div className={`justify-content-center w-100 ${styles.footerContainer}`}>
			<footer className={`w-100 ${styles.all}`}>
				<Row className={`p-2 w-100 d-flex justify-content-between align-items-center`}>
					<div className={styles.mail_logo_social}>
						{/* Social Media Icons */}
						<div className={styles.socialMediaIcons}>
							<FontAwesomeIcon icon={faFacebook} className={styles.icon} />
							<FontAwesomeIcon icon={faInstagram} className={styles.icon} />
							<FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
							<FontAwesomeIcon icon={faTwitter} className={styles.icon} />
						</div>

						{/* Logo */}
						<div className={styles.logo}>
							<img src={logo} alt='logo' className={styles.moonyLogo}/>
						</div>

						{/* Mail */}
						<div className={styles.mail}>
							{/*<svg xmlns="http://www.w3.org/2000/svg" className={`bi bi-envelope-fill`} fill="white" width="45" height="45" viewBox="0 0 16 16">
								<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
							</svg>*/}
							<p className={styles.mailText}>team@moonyapp.site</p>
						</div>
					</div>

					{/* Rigth text */}
					<div className={styles.rights}>
						<div>©2021 Moony. All rights reserved</div>
					</div>
				</Row>
			</footer>
		</div>
	);
}