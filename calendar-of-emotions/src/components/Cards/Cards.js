import React, { useState, useEffect, useContext } from 'react';
import { getEvents, acceptStatus } from '../../services/ServerService';
import styles from './Cards.module.css';
import Button from './Button/Button';
import QuestCard from './Cards/questCard/QuestCard';
import DayQuest from './Cards/dayQuestCard/DayQuest';
import CompleteCard from './Cards/completCard/CompleteCard';
import Modal from '../Modal/Modal';
import { UserContext } from '../../userContext';

export default function Cards() {
    const [events, setEvents] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const context = useContext(UserContext);
    const userId = context.userId;

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

    useEffect(() => {
            const fetchIdUser = async () => {
                try{
                    const data = await acceptStatus(userId.id);
                    setEvents(data)
                } catch (error){
                    console.error('Failed ti event')
                }
            };

            fetchIdUser()
    }, [userId])
    
    const handleStatusChange = async (id) => {
        try {
            const response = await acceptStatus(userId.id);
            const updatedEvents = events.map((event) =>
             event.id === id ? {...event, action: response} : event
            );

            const completedEvents = updatedEvents.filter(event => event.action === 'DONE'); 
            const incompleteEvents = updatedEvents.filter(event => event.action !== 'DONE');
            console.log('data', response);
            console.log('id event', id)
            setEvents([...incompleteEvents, ...completedEvents]);
        } catch (error) {
            console.error('Failed to change status:', error);
        }
    }


    
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const removeCard = (id) => {
        setEvents(events.filter((event) => event.id !== id));
    };

    return (
        <div className={styles.section}>
            <div className={styles.topSection}>
                <div className={styles.containerTitle}>
                    <div className={styles.title}>Календарь Эмоций</div>
                    <div className={styles.preTitle}>
                        Подборка занятий — каждый день. Настрой под себя и выполняй задания
                    </div>
                </div>
                <div className={styles.btnContainer}>
                    <Button onClick={openModal}>Настроить под себя</Button>
                </div>
            </div>
            <div className={styles.cardsSections}>
            {events.map((event) => {
                    if (event.action === 'DONE') {
                        return (
                            <CompleteCard
                                key={event.id}
                                id={event.id}
                                description={event.description}
                                duration={event.duration}
                                cost={event.cost}
                                setEvents={setEvents}
                                onRemove={removeCard}
                            />
                        );
                    } else {
                        return !event.questDay ? (
                            <DayQuest
                                key={event.id}
                                id={event.id}
                                description={event.description}
                                duration={event.duration}
                                cost={event.cost}
                                done={event.done}
                                setEvents={setEvents}
                                onRemove={removeCard}
                                changeStatus={() => handleStatusChange(event.id)}
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
                                setEvents={setEvents}
                                onRemove={removeCard}
                                changeStatus={() => handleStatusChange(event.id)}
                            />
                        );
                    }
                })}
            </div>
            {isModalOpen && <Modal handleCloseModal={closeModal} />}
        </div>
    );
}
