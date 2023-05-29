import React from 'react'
import styles from '../../components/Header/index.module.css';
import logo from '../../assets/img/main/logo.svg';
import { NavLink } from 'react-router-dom';


export default function Header() {
    return (
        <>
        <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <img className={styles.logoFirst} src={logo} alt='logo'/>
                    <nav className={styles.headerMenu}>
                        <ul className={styles.menuList}>
                            <NavLink className={styles.menuItem}><button className={styles.menuLink}>Features</button></NavLink>
                            <NavLink className={styles.menuItem}><button className={styles.menuLink}>Pricing</button></NavLink>
                            <NavLink className={styles.menuItem}><button className={styles.menuLink}>Resourses</button></NavLink>
                        </ul>
                    </nav>
                    <ul className={styles.headerButtons}>
                        <li><button>Login</button></li>
                        <li><button className={styles.buttonSecond}>Sign Up</button></li>
                    </ul>
                </div>
            </header>
        </>
    )
}




// 
// <div className={styles.wrapperHeader}>
//      <header className={styles.header}>
//             <nav className={styles.nav}>
//                 <ul>
//                     <li>Главная</li>
//                     <li>Каталог работ</li>
//                     <li>Услуги</li>
//                     <li>Галерея</li>
//                     <li>Отзывы</li>
//                     <li>Контакты</li>
//                 </ul>
//             </nav>
//             <div className={styles.burgerBtn}>
//                 <button />
//             </div>
//         </header> 
//                 </div>