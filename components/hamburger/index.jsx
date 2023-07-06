import React from 'react';
import styles from './hamburger.module.css';

export default function Hamburger({ open, handleClick }) {
    
    return (
        <div onClick={handleClick} className={open ? `${styles.btn} ${styles.open}` : styles.btn}>
            <div className={styles.brg}>
            </div>
        </div>
    )
}