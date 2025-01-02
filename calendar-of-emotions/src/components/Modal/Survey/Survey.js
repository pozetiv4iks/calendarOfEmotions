import React, { useContext, useState } from 'react';
import styles from './Survey.module.css';
import { UserContext } from '../../../userContext';

export default function Survey({ handler }) {
    const context = useContext(UserContext);
    const userId = context.userId.id;

    console.log(context.userId.adult, 'id in survey');

    const handleSetUserId = () => {
        context.setUserId(null);
    };

    const [isAdult, setIsAdult] = useState(context.userId.adult || false);

    const handleToggleChange = (event) => {
        const newValue = event.target.checked;
        setIsAdult(newValue);
        context.userId.adult = newValue;  // Обновляем значение `adult` в context
        console.log('Чекбокс включен:', newValue);
    };

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
                            <button type="button" className={`${styles.tag} ${styles.tagSelected}`}>Экстраверт</button>
                            <button type="button" className={`${styles.tag} ${styles.tagUnselected}`}>Интроверт</button>
                        </div>
                    </div>
                    <div className={styles.questionGroup}>
                        <legend className={styles.questionTitle}>Пол</legend>
                        <div className={styles.tagsContainer}>
                            <button type="button" name="gender" value="Мужчина" className={`${styles.tag} ${styles.tagSelected}`}>Мужчина</button>
                            <button type="button" name="gender" value="Женщина" className={`${styles.tag} ${styles.tagUnselected}`}>Женщина</button>
                        </div>
                    </div>
                </div>
                <button type="button" className={styles.bigSaveBtn} onClick={handler}>Сохранить</button>
                <button type="button" className={styles.exit} onClick={handleSetUserId}></button>
            </form>
        </div>
    );
}
