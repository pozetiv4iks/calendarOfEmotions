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
              setEvents(data);
            } catch (error) {
              console.error('Failed to get events:', error);
            }
          };
      
          fetchEvents();
        }, []);

        const handleCreateUser = async () => {
            const userData = { name: 'belysh'}; 
            try {
              const user = await createUser(userData);
              setUserId(user.id);
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
    
  return (
    <div className={styles.section}>
        <div className={styles.topSection}>
            <div className={styles.title}>
                Выполни любое задание
            </div>
            <div className={styles.btnContainer}>
                <Button onClick={handleCreateUser}>Настроить под себя</Button>
            </div>
        </div>
        <div className={styles.cardsSections}>
    {events.map(event => 
        !event.quest ? (
            <DayQuest 
                key={event.id} 
                id={event.id} 
                description={event.description} 
                duration={event.duration} 
                cost={event.cost} 
                done={event.done} 
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
