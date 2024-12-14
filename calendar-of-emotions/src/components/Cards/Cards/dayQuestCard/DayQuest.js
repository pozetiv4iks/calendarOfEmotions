import React from 'react';
import styles from './DayQuest.module.css';
import complitedLogo from '../../../../images/completeOn.svg';
import likeLogo from '../../../../images/completeOn.svg';
import saveLogo from '../../../../images/completeOn.svg';
export default function DayQuest({id, description, duration, cost, questDay }) {
  return (
    <div className={styles.containerCard}>
      <div className={styles.rightContainer}>
        <div className={styles.cardTitle}>{description}</div>
      </div>
      <div className={styles.container}> 
        <div className={styles.item}>
          <img src={complitedLogo} alt='completed' className={styles.complitedLogo}></img>
        </div> 
        <div className={styles.item}>
          <img src={likeLogo} alt='Not like' className={styles.likeLogo}></img>
        </div> 
        <div className={styles.item}>
          <img src={saveLogo} alt='Save' className={styles.saveLogo}></img>
        </div> 
      </div>
    </div>
  )
}
