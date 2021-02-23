import styles from "../card/card.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Card (props){
	return (
		<div className={styles.main}>
			<div className={styles.leftDiv}>
				<FontAwesomeIcon className={styles.icon} icon={props.icon} className={styles.icon} />
			</div>
			<div className={styles.textBox}>
				{props.description}
			</div>
		</div>
	)
}