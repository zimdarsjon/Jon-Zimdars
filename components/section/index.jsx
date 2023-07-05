import React from 'react';
import styles from './section.module.css';

export default function Section({ children, color, height }){
    if (color === 'clear') {
        return (
            <div className={styles.clear} style={{height}}>
                {children}
            </div>
        )
    } else {
        return (
            <div className={styles.grey} style={{height}}>
                {children}
            </div>
        )
    }
}