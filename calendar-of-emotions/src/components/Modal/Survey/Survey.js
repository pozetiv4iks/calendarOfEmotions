import React from 'react';
import styles from './Survey.module.css';

export default function Survey() {
  return (
        <div className={styles.container}>
                <h2>Настройте задания под себя</h2>
                <div>
                    <label>Ваш ID:
                        <input type="text" value="11" readOnly />
                    </label>
                </div>
                <div>
                    <label>Вам есть 18 лет?
                        <input type="checkbox" />
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
                <button className={styles.saveButton}>Сохранить</button>
                </div>
  )
}
