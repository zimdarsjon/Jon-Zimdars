import React from 'react';
import styles from './section.module.css';

export default function Section({ children, color }){
    if (color === 'clear') {
        return (
            <div className={styles.clear}>
                {children}
            </div>
        )
    } else {
        return (
            <div className={styles.grey}>
                {children}
            </div>
        )
    }
}