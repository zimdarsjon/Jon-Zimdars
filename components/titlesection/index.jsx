import React from 'react';
import Section from '../section';
import styles from './titlesection.module.css';
import LogoBox from './logobox.jsx';

export default function TitleSection() {
    return (
        <Section color='clear'>
            <p className={styles.logo}>LOGO</p>
            <div className={styles.container}>
                <h1>Jon Zimdars</h1>
                <h2>Full Stack Software Developer</h2>
                <LogoBox />
            </div>
        </Section>
    )
}