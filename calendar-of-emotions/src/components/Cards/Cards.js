import React, { useState, useEffect } from 'react';
import { getEvents, createUser, changeStatus} from '../../services/ServerService';
import styles from './Cards.module.css';
import Button from './Button/Button';
import QuestCard from './Cards/questCard/QuestCard';
import DayQuest from './Cards/dayQuestCard/DayQuest';

export default function Cards() {
        const [events, setEvents] = useState([]);
        const [userId, setUserId] = useState(null);
      
        useEffect(() => {
          const fetchEvents = async () => {
            try {
              const data = await getEvents();
              setEvents(data.sort((a, b) => {
                return a.done ? +1 : -1
              }));
            } catch (error) {
              console.error('Failed to get events:', error);
            }
          };
          
          fetchEvents();
        }, []);

        const handleCreateUser = async () => {
            const userData = {
              "adult": true,
              "personality": "INTROVERT",
              "sex": "MAN"
            }; 
            try {
              const user = await createUser(userData);
              setUserId(user.id);
              console.log()
            } catch (error) {
              console.error('Failed to create user:', error);
            }
          };

        const handleChangeStatus = async () => {
            const userId = 2;
            const eventId = 2;
            const action = "DONE";
            try {
              const data = await changeStatus(userId, eventId, action);
              setEvents(data);
            } catch (error) {
              console.error('Failed to create user:', error);
            }
          };
         ;
          
  return (
    <div className={styles.section}>
        <div className={styles.topSection}>
            <div className={styles.containerTitle}>
              <div className={styles.title}>
              Календарь Эмоций
              </div>
              <div className={styles.preTitle}>
              Подборка занятий — каждый день. Настрой под себя и выполняй задания 
              </div>
            </div>
            <div className={styles.btnContainer}>
                <Button onClick={handleCreateUser}>Настроить под себя</Button>
            </div>
        </div>
        <div className={styles.cardsSections}>
    {events.map(event => 
        !event.questDay ? (
            <DayQuest 
                key={event.id} 
                id={event.id} 
                description={event.description} 
                duration={event.duration} 
                cost={event.cost} 
                done={event.done} 
                userId = {userId}
            />
        ) : (
            <QuestCard 
                key={event.id} 
                id={event.id} 
                description={event.description} 
                duration={event.duration} 
                cost={event.cost} 
                questDay={event.questDay} 
                done={event.done} 
            />
        )
    )}
</div>

    </div>
  )
}
