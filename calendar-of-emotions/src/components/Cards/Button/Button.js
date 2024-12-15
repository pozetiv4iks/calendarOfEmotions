import React from 'react';
import styles from './Button.module.css';

function Button({ onClick, children, handleOpenModal }) {
 

    return (
        <button className={styles.topButton} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;

