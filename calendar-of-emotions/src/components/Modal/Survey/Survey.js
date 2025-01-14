import React, { useContext, useState } from 'react';
import styles from './Survey.module.css';
import { UserContext } from '../../../userContext';
import { updateDataUser } from '../../../services/ServerService';

export default function Survey({ handler }) {
    const context = useContext(UserContext);
    const userId = context.userId.id;

    const handleSetUserId = () => {
        context.setUserId(null);
    };

    const [isAdult, setIsAdult] = useState(context.userId.adult || false);
    const [personality, setPersonality] = useState(context.userId.personality  || 'EXTROVERT');
    const [sex, setSex] = useState(context.userId.sex || 'MAN');

    const handleToggleChange = (event) => {
        const newValue = event.target.checked;
        setIsAdult(newValue);
        context.userId.adult = newValue;
        console.log('Чекбокс включен:', newValue);
    };

    const handlePersonalityChange = (newPersonality) => {
        setPersonality(newPersonality);
        context.userId.personality = newPersonality;
        console.log('Personality изменен на:', newPersonality);
    };

    const handleSexChange = (newSex) => {
        setSex(newSex);
        context.userId.sex = newSex;
        console.log('Sex изменен на:', newSex);
    };

    const handleDataSend = () => {
        updateDataUser(isAdult, personality, sex, userId)
        handler()
    }

    return (
        <div>
            <form className={styles.profileForm}>
                <div className={styles.questionsContainer}>
                    <div className={styles.profileHeader}>Настройте задания под себя</div>
                    <div className={styles.profileRow}>
                        <label htmlFor="userId" className={styles.profileLabel}>Ваш ID</label>
                        <span id="userId" className={styles.profileValue}>{userId ? userId : 'Error'}</span>
                    </div>
                    <div className={styles.toggleRow}>
                        <label htmlFor="ageToggle" className={styles.toggleLabel}>Вам есть 18 лет?</label>
                        <label className={`${styles.toggleShape} ${styles.switch}`}>
                            <input
                                type="checkbox"
                                id="ageToggle"
                                checked={isAdult}
                                onChange={handleToggleChange}
                            />
                            <span className={`${styles.slider} ${styles.round}`}></span>
                        </label>
                    </div>
                    <div className={styles.questionGroup}>
                        <legend className={styles.questionTitle}>Тип личности</legend>
                        <div className={styles.tagsContainer}>
                            <button type="button" className={`${styles.tag} ${personality === 'EXTROVERT' ? styles.tagSelected : styles.tagUnselected}`} onClick={() => handlePersonalityChange('EXTROVERT')}>Экстраверт</button>
                            <button type="button" className={`${styles.tag} ${personality === 'INTROVERT' ? styles.tagSelected : styles.tagUnselected}`} onClick={() => handlePersonalityChange('INTROVERT')}>Интроверт</button>
                        </div>
                    </div>
                    <div className={styles.questionGroup}>
                        <legend className={styles.questionTitle}>Пол</legend>
                        <div className={styles.tagsContainer}>
                            <button type="button" className={`${styles.tag} ${sex === 'MAN' ? styles.tagSelected : styles.tagUnselected}`} onClick={() => handleSexChange('MAN')}>Мужчина</button>
                            <button type="button" className={`${styles.tag} ${sex === 'WOMAN' ? styles.tagSelected : styles.tagUnselected}`} onClick={() => handleSexChange('WOMAN')}>Женщина</button>
                        </div>
                    </div>
                </div>
                <button type="button" className={styles.bigSaveBtn} onClick={handleDataSend}>Сохранить</button>
                <button type="button" className={styles.exit} onClick={handleSetUserId}></button>
            </form>
        </div>
    );
}
