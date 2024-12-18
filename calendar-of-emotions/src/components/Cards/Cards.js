import React, { useState, useEffect } from 'react';
import { getEvents, changeStatus } from '../../services/ServerService';
import styles from './Cards.module.css';
import Button from './Button/Button';
import QuestCard from './Cards/questCard/QuestCard';
import DayQuest from './Cards/dayQuestCard/DayQuest';
import Modal from '../Modal/Modal';

export default function Cards() {
    const [events, setEvents] = useState([]);

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


    const handleChangeStatus = async (userId, eventId, action) => {
        try {
            await changeStatus(userId, eventId, action);
            const updatedEvents = await getEvents();
            setEvents(updatedEvents);
        } catch (error) {
            console.error('Failed to change status:', error);
        }
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
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
                {events.map((event) =>
                    !event.questDay ? (
                        <DayQuest
                            key={event.id}
                            id={event.id}
                            description={event.description}
                            duration={event.duration}
                            cost={event.cost}
                            done={event.done}
                            setEvents={setEvents}
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
                            handleChangeStatus={handleChangeStatus}
                        />
                    )
                )}
            </div>
            {isModalOpen && <Modal handleCloseModal={closeModal} />}
        </div>
    );
}
