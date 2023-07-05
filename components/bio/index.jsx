import React from 'react';
import Section from '../section';
import styles from './bio.module.css';
import { CgProfile } from 'react-icons/cg';

export default function Bio(){
    return (
        <Section color='clear'>
            <div className={styles.container}>
              <div className={styles.left}>
                <CgProfile/>
              </div>
              <div className={styles.right}>
                <p>Placeholder Text HERE</p>
              </div>
            </div>
        </Section>
    )
}