import React from 'react';
import Section from '../section';
import styles from './stack.module.css';
import Link from 'next/link';

const front = ['Javascript', 'React', 'HTML5', 'CSS3'];
const back = ['Node.js', 'Express', 'MongoDB', 'MySQL', 'RESTful APIs', 'Nextjs', 'PostgreSQL'];
const testing = ['Jest', 'Mocha', 'Chai', 'AWS: EC2', 'Test Driven Development'];
const developer = ['Git', 'npm', 'Webpack', 'Babile', 'Agile Methodology'];

export default function Stack() {
    return (
        <Section height='auto'>
            <div className={styles.container}>
                <h2>Tech Stack</h2>
                <div className={styles.stacks}>
                    <div className={styles.stack}>
                        <h3>Front-End</h3>
                        <ul className={styles.list}>
                            {front.map((stack) => <li key={stack}>{stack}</li>)}
                        </ul>
                    </div>
                    <div className={styles.stack}>
                        <h3>Back-End</h3>
                        <ul className={styles.list}>
                            {back.map((stack) => <li key={stack}>{stack}</li>)}
                        </ul>
                    </div>
                    <div className={styles.stack}>
                        <h3>Testing/Deployment</h3>
                        <ul className={styles.list}>
                            {testing.map((stack) => <li key={stack}>{stack}</li>)}
                        </ul>
                    </div>
                    <div className={styles.stack}>
                        <h3>Developer Tools</h3>
                        <ul className={styles.list}>
                            {developer.map((stack) => <li key={stack}>{stack}</li>)}
                        </ul>
                    </div>
                </div>
                <div className={styles.links}>
                   <Link href='/contact'><button>Contact</button></Link>
                   <Link href='https://github.com/zimdarsjon'><button>Github</button></Link>
                </div>
            </div>
        </Section>
    )
}