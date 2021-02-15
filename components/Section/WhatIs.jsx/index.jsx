import styles from '../WhatIs.jsx/WhatIs.module.css'
import Card from "../../Commons/card"
import { motion } from "framer-motion"


import { faChartLine, faCommentsDollar,faUser} from '@fortawesome/free-solid-svg-icons';


export default function WhatIs () {
    const cardText1 = "Copiá los movimientos de los mejores inversores y ganá como ellos mientras aprendés en el camino"
    const cardText2 = "Descubrí y conectá con gente de la comunidad. Enterate cuáles son las opiniones y últimos hallazgos de los expertos en el mercado. "
    const cardText3 = "Si sos trader, compartí y monetiza tus conocimientos y opiniones!"

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }

    return (
       <div className={styles.main}>
        <div className={styles.missionStatement}>
            <h1>Discover</h1>
            <p className={styles.description}>Si estás empezando, aprendé a invertir acompañado de expertos en el mercado. Si sos experto, hacé rendir tus conocimientos compartiendo tus inversiones. 
</p>
        </div>
        <motion.div  initial="false" animate="visible" variants={variants} className = {styles.cardContainer}>
            <Card title = "Feature 1" description={cardText1} icon = {faChartLine} />
            <Card title = "Feature 2" description={cardText2} icon = {faCommentsDollar}/>
            <Card title = "Feature 3" description={cardText3} icon = {faUser}/>
        </motion.div>
       </div> 
    )
}