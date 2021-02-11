import styles from '../WhatIs.jsx/WhatIs.module.css'
import Card from "../../Commons/card"
import { motion } from "framer-motion"


import { faChartLine, faCommentsDollar,faUser} from '@fortawesome/free-solid-svg-icons';


export default function WhatIs () {
    const cardText1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur"
    const cardText2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur"
    const cardText3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur"

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }

    return (
       <div className={styles.main}>
        <div className={styles.missionStatement}>
            <h1>Discover</h1>
            <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
        </div>
        <motion.div  initial="false" animate="visible" variants={variants} className = {styles.cardContainer}>
            <Card title = "Feature 1" description={cardText1} icon = {faChartLine} />
            <Card title = "Feature 2" description={cardText2} icon = {faCommentsDollar}/>
            <Card title = "Feature 3" description={cardText3} icon = {faUser}/>
        </motion.div>
       </div> 
    )
}