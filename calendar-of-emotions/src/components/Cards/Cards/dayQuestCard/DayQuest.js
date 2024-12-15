import React, { useEffect, useState } from 'react';
import styles from './DayQuest.module.css';
import complitedLogo from '../../../../images/completeOn.svg';
import likeLogo from '../../../../images/likes.svg';
import saveLogo from '../../../../images/save.svg';
export default function DayQuest({id, description, duration, cost, questDay }) {

  // пару часов день пару минут до 100 бун

  const [durat, setDurat] = useState();
  const [costQuest, setCost] = useState();

  useEffect(() => {
    switch (duration){
      case 'ONE_HOUR':
        setDurat('1 час')
        break;
      case 'FEW_HOURS':
        setDurat('Несколько часов')
        break;
      case 'FEW_MINUTES':
        setDurat('Пару минут')
        break;
      case 'DAY':
        setDurat('1 день')
        break;
    }

     switch(0 != cost){
      case cost < 100:
        setCost('до 100 BYN');
        break;
      case cost > 100:
        setCost('');
        break;
      default:
        setCost(false);
        break;
    }

  })


  return (
    <div className={styles.containerCard}>
      <div className={styles.rightContainer}><div className={styles.tags}>
          <div className={styles.tag}>{durat}</div>
          {costQuest !== false ? ( <div className={styles.tag}>{costQuest}</div> ) : null}
        </div>
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
