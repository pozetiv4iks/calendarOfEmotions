import React, { useState, useContext } from 'react';
import styles from './Registartion.module.css';
import { UserContext } from '../../../userContext';
import { correctUser, createUser } from '../../../services/ServerService';

export default function Registration () {
    const [inputValue, setValue] = useState('')
    const context = useContext(UserContext);
    
    const handleChangeInput = (event) => {
        const inputValue = event.target.value; 
        if (inputValue === ''){
            setValue('');
        } else {
        const numericValue = parseInt(inputValue, 10);
        setValue(numericValue);
        }
    }

    const acceptRegistration = async () => {
        try {
            const user = await correctUser(inputValue);
            console.log('reg users',user);
            
            context.setUserId(user);
        } catch (error) {
            console.error('Error accept users:', error);
        }
    }

    const registraitionUser = async () => {
        try {
            const user = await createUser();
            console.log('reg users',user);
            context.setUserId(user);
        } catch (error) {
            console.error('Error creating users:', error);
        }
    };
    

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>
                    Введите свой ID:
                </div>
                <div className={styles.input}>
                    <input type="text" value={inputValue} onChange={handleChangeInput} placeholder={inputValue === '' ? '132' : ''}></input>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.button} onClick={acceptRegistration}>Войти</button>
                </div>
            </div>
            <div className={styles.registraitionBlock}>
                <div className={styles.registrationTitle} onClick={registraitionUser}>Либо <span>зарегистрируйтесь</span>, если вы этого еще не сделали. </div>
            </div>
        </div>
    );
};

