import styles from "../card/card.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Card (props){
	return (
		<div className={styles.main}>
			<FontAwesomeIcon className={styles.icon} icon={props.icon} className={styles.icon} />
			<div className={styles.textBox}>
				<h2>{props.title}</h2>
				<p className={styles.description}>{props.description}</p>
			</div>
		</div>
	)
}