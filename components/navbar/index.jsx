import React from 'react';
import styles from './navbar.module.css';
import { ImSun } from 'react-icons/im';
import { BsFillMoonStarsFill } from 'react-icons/bs';

export default function Navbar({ changeTheme, theme }) {

    return (
        <div className={styles.container}>
            <button>Home</button>
            <button>Github</button>
            <button>Contact</button>
            <button onClick={changeTheme}>{theme === 'dark' ? <ImSun /> : <BsFillMoonStarsFill />}</button>
        </div>
    )
}