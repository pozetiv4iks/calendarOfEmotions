// src/Modal.js
import React, { use, useContext } from 'react';
import styles from './Registartion.module.css';
import { UserContext } from '../../../userContext';
import { createUser } from '../../../services/ServerService';

export default function Registration () {
    const context = useContext(UserContext);
    
    

    const registraitionUser = async () => {
        try {
            const user = await createUser();
            context.setUserId(user);
            console.log(user);
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };
    

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>
                    Введите свой ID
                </div>
                <div className={styles.input}>
                    <input type="text"></input>
                </div>

                <div className={styles.input}>
                    <button onClick={registraitionUser}></button>
                </div>
            </div>
        </div>
    );
};

