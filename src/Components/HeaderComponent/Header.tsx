import React from 'react'
import styles from './Header.module.css';
import logo from './optilyz_logo.svg';

const Header = () => {
    return (
        <header className={`${styles.headerContainer} ${styles.headerSticky}`}>
            <img className={styles.logoImage} src={logo} alt="Logo optilyz"></img>
        </header>
    )
}

export default Header
