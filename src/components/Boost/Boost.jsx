import React from 'react'
import styles from '../Boost/index.module.css'

export default function Boost() {
    return (
        <div className={styles.boostContainer}>
            <div className={styles.bosstPart}>
                <h1 className={styles.bostedText}>Boost your links today</h1>
                <button className={styles.boostButton}>Get Started</button>
            </div>
        </div>
    )
}
