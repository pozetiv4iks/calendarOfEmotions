import React, { useState } from 'react';
import styles from './Header.module.css';
import logo from '../../images/logo.svg';
import profileLogo from '../../images/account.svg';
import appLogo from '../../images/applogo.svg';



export default function Header(onValueChanges) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => { 
    setIsModalOpen(true); 
    onValueChanges(isModalOpen);
  }; 

  const closeModal = () => { 
    setIsModalOpen(false); 
    onValueChanges(isModalOpen);
  };

  return (
    <header className={styles.header}>
        <div className={styles.headerContainer}>
            <div className={styles.logo}>
                <img src={logo} alt='logo'></img>
            </div>
            <div className={styles.navigation}>
              <div className={styles.downloadApp}>
                <div className={styles.profileTitel}>Скачать приложение</div>  
                <img src={appLogo} alt='download app' className={styles.appLogo}></img>
              </div>
              <div className={styles.profileLogo}>
                <div className={styles.profileTitel} onClick={openModal}>Профиль</div>  
                <img src={profileLogo} className={styles.profileImg} alt='profile'></img>
              </div>
            </div>    
        </div>
    </header>
  )
}
