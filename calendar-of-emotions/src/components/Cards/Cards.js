import React from 'react';
import styles from './Cards.module.css';
import Button from './Button/Button';

export default function Cards() {

    const handleClick = () => { 
        console.log('Button clicked!'); 
    };

  return (
    <div className={styles.section}>
        <div className={styles.topSection}>
            <div className={styles.title}>
                Выполни любое задание
            </div>
            <div className={styles.btnContainer}>
                <Button onClick={handleClick}>Настроить под себя</Button>
            </div>
        </div>
    </div>
  )
}
