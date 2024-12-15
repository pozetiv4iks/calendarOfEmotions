import React, { useContext, useEffect, useState } from 'react';
import styles from './DayQuest.module.css';
import { getEvents, createUser, changeStatus} from '../../../../services/ServerService';
import { UserContext } from '../../../../userContext';

export default function DayQuest({id, description, duration, cost}) {
  const context = useContext(UserContext);
  const userID = context.userId;

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

     switch(true){
      case cost == 0:
        setCost('');
        break;
      case cost < 100:
        setCost('до 100 BYN');
        break;
      case cost > 100:
        setCost('более 100 BYN');
        break;
    }

    const fetchEvents = async () => {
      try {
        const data = await getEvents();
        setEvents(data)
      } catch (error) {
        console.error('Failed to get events:', error);
      }
    };
  
    const handleChangeStatus = (action) => {
      changeStatus({userId:userID, action})
   
  
      fetchEvents()
    }
  })


  return (
    <div className={styles.containerCard}>
      <div className={styles.rightContainer}><div className={styles.tags}>
          <div className={styles.tag}>{durat}</div>
          {costQuest && ( <div className={styles.tag}>{costQuest}</div>)}
        </div>
        <div className={styles.cardTitle}>{description}</div>
        
      </div>
      <div className={styles.container}> 
        <div className={styles.complitedLogo} onClick={()=>{handleChangeStatus('DONE')}}>
        </div>
        <div className={styles.likeLogo} onClick={()=>{handleChangeStatus('UNLIKE')}}>
        </div> 
        <div className={styles.saveLogo} onClick={()=>{handleChangeStatus('LATE')}}>
        </div>
      </div>
    </div>
  )
}
