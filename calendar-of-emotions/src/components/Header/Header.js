import React from 'react';
import styles from './Header.module.css';
import logo from '../../images/logo.svg';
import profileLogo from '../../images/account.svg';


export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.headerContainer}>
            <div className={styles.logo}>
                <img src={logo} alt='logo'></img>
            </div>
            <div className={styles.profileLogo}>
                <img src={profileLogo} alt='profile'></img>
            </div>
        </div>
    </header>
  )
}
