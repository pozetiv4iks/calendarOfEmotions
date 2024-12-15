import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.project}>
          © Календарь Эмоций
        </div>
        <div className={styles.contacts}>
          Свяжитесь с нами
        </div>
        <div className={styles.download}>
          Скачать мобильное приложение
        </div>
    </footer>
  )
}
