import React from 'react';
import styles from './navbar.module.css';
import { ImSun } from 'react-icons/im';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import Link from 'next/link';

const { useState } = React;

export default function Navbar({ changeTheme, theme, page }) {
    return (
        <div className={styles.container}>
            <Link href='/'><button style={{textDecoration: page === '/' ? 'underline' : ''}}>Home</button></Link>
            <Link href='https://github.com/zimdarsjon'><button>Github</button></Link>
            <Link href='/contact'><button style={{textDecoration: page === '/contact' ? 'underline' : ''}}>Contact</button></Link>
            <button onClick={changeTheme}>{theme === 'dark' ? <ImSun /> : <BsFillMoonStarsFill />}</button>
        </div>
    )
}