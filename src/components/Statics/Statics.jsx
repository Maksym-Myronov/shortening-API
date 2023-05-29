import React from 'react'
import styles from '../Statics/index.module.css'

export default function Statics(props) {
    return (
        <div className={styles.statsContainer}>
            <div className={styles.statsInfoFirst}>
                <img className={styles.firstImage} src={props.src} alt="" />
                <h6 className={styles.statsTitleFirst}>{props.text}</h6>
                <p className={styles.textByFirst}>{props.mainText}</p>
            </div>
        </div>
    )
}
