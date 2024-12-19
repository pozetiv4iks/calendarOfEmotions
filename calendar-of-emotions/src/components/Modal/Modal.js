import React, { useContext } from 'react';
import styles from './Modal.module.css';
import Survey from './Survey/Survey';
import Registration from './Registration/Registration';
import exitLogo from '../../images/exit.svg'
import { UserContext } from '../../userContext';

export default function Modal({handleCloseModal}) {

  const context = useContext(UserContext);
  const userId = context.userId;
  return (
    <div className={styles.container}>
        <div className={styles.leftContainer}>
            <div className={styles.exit}>
                <img className={styles.exitIcon} src={exitLogo} alt='exit' onClick={handleCloseModal}></img>
            </div>
            <div className={styles.global}>
                {userId ? (<Survey handler = {handleCloseModal}/>) : (<Registration />)}
            </div>
        </div>
    </div>
  )
}
