import React from 'react'
import styles from './Header.module.css';
import logo from './optilyz_logo.svg';

function Header() {
    return (
        <div className={`${styles.headerContainer} ${styles.headerSticky}`}>
            <img src={logo} alt="Logo optilyz" height="40" ></img>
        </div>
    )
}

export default Header
