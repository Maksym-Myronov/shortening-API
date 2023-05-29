import React from 'react'
import styles from '../../components/Main/index.module.css';
import illustration from '../../assets/img/main/illustration-working.svg'

export default function Main() {
    return (
        <>
            <main className={styles.mainPage}>
                <div className={styles.mainContainer}>
                    <div className={styles.mainContent}>
                        <h1 className={styles.mainTextFirst}>More than just <br /> shorter links</h1>
                        <p className={styles.mainTextSecond}>Build your brand’s recognition and get detailed <br /> insights on how your links are performing.</p>
                        <button className={styles.buttonStart} href="#">Get Started</button>
                    </div>
                    <div className={styles.imgWrapper}>
                        <img className={styles.illustrationOne} src={illustration} alt="" />
                    <form className={styles.formSearchBar}>
                        <input className={styles.inputBar} type="url" placeholder="Shorten a link here&hellip;"/>
                        <button className={styles.buttonSearch}>Shorten It!</button>
                    </form>
                    </div>
                </div>
            </main>
        </>
    )
}
