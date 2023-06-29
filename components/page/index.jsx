import React from 'react';
import styles from './page.module.css';

export default function Page({ children }) {
    return (
        <div className={styles.container}>{children}</div>
    )
}