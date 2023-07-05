import React from 'react';
import Image from 'next/image';
import Lights from '../../public/northlights.jpg';
import styles from './bgimage.module.css';

export default function BGImage() {
    return (
        <Image
            src={Lights}
            alt="Picture of the Northern Lights"
            className={styles.bg}
        />
    )
}