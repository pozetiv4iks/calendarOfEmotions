// src/Modal.js
import React, { useState, useContext } from 'react';
import styles from './Registartion.module.css';
import { UserContext } from '../../../userContext';
import { correctUser, createUser } from '../../../services/ServerService';

export default function Registration () {
    const [inputValue, setValue] = useState('')
    const context = useContext(UserContext);
    
    const handleChangeInput = (event) => {
        const inputValue = event.target.value; 
        const numericValue = parseInt(inputValue, 10);
        setValue(numericValue);
    }

    const acceptRegistration = async () => {
        
        const request = await correctUser(inputValue);
        console.log('req ', request, ' reg ', inputValue )
        return request ? context.setUserId(inputValue) : null
    }

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
                    <input type="text" value={inputValue} onChange={handleChangeInput}></input>
                </div>
                <div className={styles.buttun}>
                    <button onClick={acceptRegistration}></button>
                </div>
            </div>
            <div className={styles.registraitionBlock}>
                <div className={styles.registrationTitle} onClick={registraitionUser}>Либо <span>зарегистрируйтесь</span>, если вы этого еще не сделали. </div>
            </div>
        </div>
    );
};

