import React from 'react';
import styles from './navbar.module.css';
import { ImSun } from 'react-icons/im';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import Link from 'next/link';
import Hamburger from '../hamburger';

const { useState, useEffect } = React;

export default function Navbar({ changeTheme, theme, page }) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileOpen(!mobileOpen);
    }

    return (
        <>
            <div className={styles.container}>
                <Link href='/'><button style={page === '/' ? { textDecoration: 'underline'} : {}}>Home</button></Link>
                <Link href='https://github.com/zimdarsjon'><button>Github</button></Link>
                <Link href='/contact'><button style={page === '/contact' ? { textDecoration: 'underline'} : {}}>Contact</button></Link>
                <button onClick={changeTheme}>{theme === 'dark' ? <ImSun /> : <BsFillMoonStarsFill />}</button>
                <Hamburger className={styles.mobileButton} open={mobileOpen} handleClick={toggleMobileMenu}/>
            </div>
            <div className={mobileOpen ? `${styles.mobileContainer} ${styles.open}` : styles.mobileContainer}>
                <Link href='/'><button style={page === '/' ? { textDecoration: 'underline'} : {}}>Home</button></Link>
                <Link href='https://github.com/zimdarsjon'><button>Github</button></Link>
                <Link href='/contact'><button style={page === '/contact' ? { textDecoration: 'underline'} : {}}>Contact</button></Link>
                <button onClick={(e) => {
                    e.preventDefault();
                    changeTheme();
                    toggleMobileMenu();
                }}>{theme === 'dark' ? <ImSun /> : <BsFillMoonStarsFill />}</button>
            </div>
        </>
    )
}