import React, { useState } from 'react';
import styles from './Header.module.css';
import logo from '../../images/logo.svg';
import profileLogo from '../../images/account.svg';
import appLogo from '../../images/applogo.svg';
import Modal from '../Modal/Modal';



export default function Header() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => { 
    setIsModalOpen(true); 
    
  }; 

  const closeModal = () => { 
    setIsModalOpen(false); 

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
              <div className={styles.profileLogo} onClick={openModal}>
                <div className={styles.profileTitel} onClick={openModal}>Профиль</div>  
                <img src={profileLogo} className={styles.profileImg} alt='profile'></img>
              </div>
            </div>    
            {isModalOpen && (<Modal handleCloseModal={closeModal}/>)}
        </div>
    </header>
  )
}
