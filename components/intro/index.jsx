import React from 'react';
import styles from './intro.module.css';
import { Tilt_Neon } from 'next/font/google';

const neon = Tilt_Neon({
    variable: '--font-neon',
    subsets: ['latin']
})

const title = 'Full Stack Developer'

export default function Intro() {

    return (
        <div className={neon.variable + ' ' + styles.container}>
            <div className={styles.leftColumn}>
                <div className={styles.title}>
                    <h1><span style={{animationDelay: '2s'}}>Full</span> <span style={{animationDelay: '3s'}}>Stack</span></h1>
                    <h1><span style={{animationDelay: '4s'}}>Developer</span></h1>
                    <div className={styles.titleLine}></div>
                </div>
            </div>
            <div className={styles.leftColumn}>
                <h1>
                    Placeholder
                </h1>
            </div>
        </div>
    )
}