import styles from '../WhatIs.jsx/WhatIs.module.css'
import Card from "../../Commons/card"
export default function WhatIs () {
    return (
       <div className={styles.main}>
        <div className={styles.missionStatement}>
            <h1>Discover</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
        </div>
        <div className={styles.cardContainer}>
            <Card title = "Feature 1" img = "imggg" />
            <Card />
            <Card />
        </div>
       </div> 
    )
}