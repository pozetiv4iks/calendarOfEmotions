// src/Modal.js
import React from 'react';
import styles from './Registartion.module.css';

export default function Registration ({ isOpen, onClose}) {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

