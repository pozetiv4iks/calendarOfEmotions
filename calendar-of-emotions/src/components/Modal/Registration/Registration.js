// src/Modal.js
import React from 'react';
import styles from './Registartion.module.css';

export default function Registration ({ isOpen, onClose}) {
    if (!isOpen) return null;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>
                    Введите свой ID
                </div>
            </div>
        </div>
    );
};

