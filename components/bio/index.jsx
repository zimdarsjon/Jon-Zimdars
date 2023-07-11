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
                <p>I decided to become a software engineer after years of troubleshooting and configuring software through AGILE methodologies at Epic Systems. I enjoyed breaking down components into their most basic parts and creating a strategy to effectively resolve issues. While doing this I developed the desire to fix issues at their core while creating reusable tools that can be accessed throughout the software.</p>
                <p>To progress as of software engineer, I enrolled in Hack Reactor's rigorous 13 week immersive program. During this time, I spent over 1000 hours learning technologies and tools to build out full stack applications. I utilized Javascript, Express, Postgres, MongoDB and a variety of other tools while working in teams to complete projects within strict deliverable timelines.</p>
                <p>I am now pursuing a career in full-stack software development, where I hope to obtain my goal of creating efficient software that offers clean and concise functionality for users.</p>
              </div>
            </div>
        </Section>
    )
}