import React from 'react';
import styles from './Modal.module.css';
import Survey from './Survey/Survey';
import Registration from './Registration/Registration';

export default function Modal() {
  return (
    <div className={styles.container}>
        <div className={styles.leftContainer}>
            {true ? (<Survey />) : (<Registration/>)}
        </div>
    </div>
  )
}
