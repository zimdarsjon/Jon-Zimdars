import React from 'react';
import Section from '../section';
import styles from './titlesection.module.css';
import LogoBox from './logobox.jsx';
import Image from 'next/image';
import Logo from '../../public/logos/jzlogo.png';

export default function TitleSection() {
    return (
        <Section color='clear'>
            <Image className={styles.logo} src={Logo} alt='JZ Logo'/>
            <div className={styles.container}>
                <h1>Jon <b>Zimdars</b></h1>
                <h2>Full Stack Software Developer</h2>
                <LogoBox />
            </div>
        </Section>
    )
}