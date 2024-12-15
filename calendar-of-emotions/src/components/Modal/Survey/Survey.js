import React, { useContext } from 'react';
import styles from './Survey.module.css';
import { UserContext } from '../../../userContext'; 

export default function Survey({handler}) {

    const context = useContext(UserContext);
    const userId = context.userId;

  return (
        <div className={styles.container}>
                <div className={styles.title}>Настройте задания под себя</div>
                <div className={styles.containerSec}>
                    <div className={styles.nameId}>
                        Ваш ID: {userId}
                    </div>
                    <div class="toggle-row">
                        <label for="ageToggle" class="toggle-label">Вам есть 18 лет?</label>

                        <label className="toggle-shape switch"> <input type="checkbox" /> 
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div>
                        <label>Тип личности:
                            <select>
                                <option value="extrovert">Экстраверт</option>
                                <option value="introvert">Интроверт</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>Пол:
                            <select>
                                <option value="male">Мужчина</option>
                                <option value="female">Женщина</option>
                            </select>
                        </label>
                    </div>
                    <button className={styles.saveButton} onClick={handler}>Сохранить</button>
                </div>
        </div>
  )
}
