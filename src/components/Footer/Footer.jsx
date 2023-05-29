import React from 'react'
import styles from '../../components/Footer/index.module.css'
import facebook from '../../assets/img/main/icon-facebook.svg'
import twitter from '../../assets/img/main/icon-twitter.svg'
import printerest from '../../assets/img/main/icon-pinterest.svg'
import instagram from '../../assets/img/main/icon-instagram.svg'

export default function Footer() {
    return (
        <footer className={styles.footerPart}>
            <div className={styles.row}>
                <div className={styles.footerContainer}>
                    <h6 className={styles.footerShortly}>Shortly</h6>
                    <div className={styles.footerName}>
                        <h4>Features</h4>
                        <ul className={styles.menuList}>
                            <li className={styles.menuItem}><button className={styles.menuLink}>Link Shortening</button></li>
                            <li className={styles.menuItem}><button className={styles.menuLink}>Branded Links</button></li>
                            <li className={styles.menuItem}><button className={styles.menuLink}>Analytics</button></li>
                        </ul>
                    </div>
                    <div className={styles.footerName}>
                        <h4>Resources</h4>
                        <ul className={styles.menuList}>
                            <li className={styles.menuItem}><button className={styles.menuLink}>Blog</button></li>
                            <li className={styles.menuItem}><button className={styles.menuLink}>Developers</button></li>
                            <li className={styles.menuItem}><button className={styles.menuLink}>Support</button></li>
                        </ul>
                    </div>
                    <div className={styles.footerName}>
                        <h4>Company</h4>
                        <ul className={styles.menuList}>
                            <li className={styles.menuItem}><button className={styles.menuLink}>About</button></li>
                            <li className={styles.menuItem}><button className={styles.menuLink}>Our Team</button></li>
                            <li className={styles.menuItem}><button className={styles.menuLink}>Careers</button></li>
                            <li className={styles.menuItem}><button className={styles.menuLink}>Contact</button></li>
                        </ul>
                        <div className={styles.socialLinks}>
                            <img src={facebook} alt="" />
                            <img src={twitter} alt="" />
                            <img src={printerest} alt="" />
                            <img src={instagram} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
