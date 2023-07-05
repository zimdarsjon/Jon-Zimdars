import React from 'react';
import Image from 'next/image';
import styles from './logobox.module.css';

import css from '../../../public/css-3.svg';
import html from '../../../public/html-5.svg';
import javascript from '../../../public/javascript.svg';
import github from '../../../public/github-icon.svg';
import mysql from '../../../public/mysql-icon.svg';
import postgres from '../../../public/postgresql.svg';
import react from '../../../public/react.svg';
import nextjs from '../../../public/nextjs-icon.svg';

const icons = [
    {
        image: css,
        alt: 'CSS Logo'
    },
    {
        image: html,
        alt: 'HTML Logo'
    },
    {
        image: javascript,
        alt: 'Javascript Logo'
    },
    {
        image: github,
        alt: 'Github Logo'
    },
    {
        image: mysql,
        alt: 'MySQL Logo'
    },
    {
        image: postgres,
        alt: 'PostgreSQL Logo'
    },
    {
        image: react,
        alt: 'React Logo'
    },
    {
        image: nextjs,
        alt: 'Nextjs Logo'
    }
];

export default function LogoBox() {
    return (
        <div className={styles.container}>
            {icons.map((icon) => <div className={styles.iconWrapper}><Image src={icon.image} alt={icon.alt} className={styles.icon}/></div>)}
        </div>
    )
}