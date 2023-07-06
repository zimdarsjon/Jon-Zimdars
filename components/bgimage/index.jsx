import React from 'react';
import Image from 'next/image';
import Lights from '../../public/northlights.jpg';
import Clouds from '../../public/clouds.jpg';
import styles from './bgimage.module.css';

export default function BGImage({ theme }) {
    return (
        <>
            <Image
                src={Lights}
                alt="Picture of the Northern Lights"
                className={styles.bg}
                style={{ opacity: theme === 'dark' ? '1' : '0' }}
            />
            <Image
                src={Clouds}
                alt="Picture of Clouds"
                className={styles.bg}
                style={{ opacity: theme === 'light' ? '1' : '0' }}
            />
        </>
    )
}