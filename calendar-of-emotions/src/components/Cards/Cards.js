import React, { useState, useEffect, useContext } from 'react';
import { getEvents, createUser, changeStatus} from '../../services/ServerService';
import styles from './Cards.module.css';
import Button from './Button/Button';
import QuestCard from './Cards/questCard/QuestCard';
import DayQuest from './Cards/dayQuestCard/DayQuest';
import CompleteCard from './Cards/completCard/CompleteCard';
import { UserContext } from '../../userContext';
import Modal from '../Modal/Modal';

export default function Cards() {
        const [events, setEvents] = useState([]);
        const context = useContext(UserContext);
      
        useEffect(() => {
          const fetchEvents = async () => {
            try {
              const data = await getEvents();
              setEvents(data)
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
              context.setUserId(user.id);
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

          const [isModalOpen, setIsModalOpen] = useState(false);
          const openModal = () => { 
            setIsModalOpen(true); 
            
          }; 
        
          const closeModal = () => { 
            setIsModalOpen(false); 
        
          };
         
          
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
                <Button onClick={openModal}>Настроить под себя</Button>
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
                setEvents = {setEvents}
            />
        )
    )}
</div>
{isModalOpen && (<Modal handleCloseModal={closeModal}/>)}
    </div>
  )
}
