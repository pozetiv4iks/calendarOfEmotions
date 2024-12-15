import React from 'react';
import styles from './Modal.module.css';
import Survey from './Survey/Survey';
import Registration from './Registration/Registration';
import exitLogo from '../../images/exit.svg'

export default function Modal({handleCloseModal}) {

    function name(params) {
        
    }

  return (
    <div className={styles.container}>
        <div className={styles.leftContainer}>
            <div className={styles.exit}>
                <img className={styles.exitIcon} src={exitLogo} alt='exit' onClick={handleCloseModal}></img>
            </div>
            <div className={styles.global}>
                {true ? (<Survey handler = {handlerCloseModal}/>) : (<Registration/>)}
            </div>
        </div>
    </div>
  )
}
