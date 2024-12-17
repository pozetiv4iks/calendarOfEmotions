import React, { useContext, useEffect, useState } from 'react';
import styles from './DayQuest.module.css';
import { getEvents, createUser, changeStatus} from '../../../../services/ServerService';
import { UserContext } from '../../../../userContext';

export default function DayQuest({ id, description, duration, cost, questDay, onRemove, setEvents, handleChangeStatus }) {
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

    

  })
  const test = (action) => {
    const userID = 2;
    changeStatus({userId:userID, action})

    fetchEvents()
  };
<<<<<<< HEAD
    const fetchEvents = async () => {
      try {
        const data = await getEvents();
        setEvents(data)
      } catch (error) {
        console.error('Failed to get events:', error);
      }
    };

    const test = (action) => {
      changeStatus({userId:userID, action})


      fetchEvents()
    };
  })
=======

  const handleStatusChange = async (action) => {
    const userID = 2;
    await handleChangeStatus(userID, id, action);
    fetchEvents();
};
>>>>>>> 36409375a0e28cf9fae74a6bfa2c246f71633d68

  const fetchEvents = async () => {
    try {
      const data = await getEvents();
      setEvents(data)
    } catch (error) {
      console.error('Failed to get events:', error);
    }
  };

  return (
    <div className={styles.containerCard}>
      <div className={styles.rightContainer}><div className={styles.tags}>
          <div className={styles.tag}>{durat}</div>
          {costQuest && ( <div className={styles.tag}>{costQuest}</div>)}
        </div>
        <div className={styles.cardTitle}>{description}</div>

      </div>
      <div className={styles.container}> 
        <div className={styles.complitedLogo} onClick={()=>{test('DONE')}}>
        </div>
        <div className={styles.likeLogo} onClick={()=>{test('UNLIKE')}}>
        </div> 
        <div className={styles.saveLogo} onClick={()=>{test('LATE')}}>
        </div>
      </div>
    </div>
  )
}