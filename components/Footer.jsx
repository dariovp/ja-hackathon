import styles from "./Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    
    return (
        <div className={styles.all}>
            {/*Logo*/}
            <div className={styles.rocketLogo}>🚀</div>

            {/*Mail de contacto y redes*/}
            <div>
                <div className={styles.contactText}>
                    <div className={styles.border}>
                        <div className={styles.mailIcon}>
                            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                        </div>
                        <h3 className={styles.mail}>contacto@moony.com</h3>
                    </div>
                    <div className={styles.socialMediaIcons}>
                        <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
                        <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
                        <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
                        <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
                    </div>
                </div>
            </div>

            {/*Widget de Twitter junto con el texto de arriba*/}
            <div className={styles.twitterWidget}>
                <a class="twitter-timeline" data-width="400" data-height="400" data-theme="ligth" href="https://twitter.com/themoonyapp?ref_src=twsrc%5Etfw">Tweets by themoonyapp</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
        </div>
    );
}