import React from 'react';
import styles from './QuestCard.module.css';

export default function QuestCard({id, description, duration, cost, questDay }) {
  return (
    <div className={styles.containerCard}>
      <div className={styles.cardTitle}>{description}</div>
    </div>
  )
}
