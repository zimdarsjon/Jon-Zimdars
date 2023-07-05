import React from 'react';
import styles from './navbar.module.css';

export default function Navbar() {

    return (
        <div className={styles.container}>
            <button>Home</button>
            <button>Github</button>
            <button>Contact</button>
            <button>Day Shift</button>
        </div>
    )
}