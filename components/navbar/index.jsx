import React from 'react';
import styles from './navbar.module.css';
import { Exo, Tilt_Neon } from 'next/font/google';

const { useEffect, useState } = React;

const name = 'Jon Zimdars';


const exo = Exo({
    variable: '--font-exo',
    subsets: ['latin']
})

const neon = Tilt_Neon({
    variable: '--font-neon',
    subsets: ['latin']
})

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(!open)
    }

    return (
        <div className={styles.container}>
            <h1 className={neon.variable}>
                {name.split('').map((letter, index) => {
                    const style = {animationDelay: (0.5 + (name.length - index) / 30) + "s"}
                    return <span style={style} key={index}>{letter}</span>
                })}
            </h1>
            <div className={open ? styles.mobileButton + ' ' + styles.openButton : styles.mobileButton} onClick={() => setOpen(!open)}>
              <div></div>
            </div>
            <div className={styles.buttonBox + ' ' + exo.variable}>
                <button>About</button>
                <button>Projects</button>
                <button>Contact</button>
            </div>
        </div>
    )
}