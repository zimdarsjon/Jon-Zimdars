import React from 'react';
import Image from 'next/image';
import styles from './project.module.css';

export default function Project({ project}) {
    return (
        <div className={styles.container}>
            <Image className={styles.picture} src={project.image} alt={project.title}/>
            <h3>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <p className={styles.stack}>{project.techstack}</p>
            <ul>
                {project.work.map((work, i) => <li key={i}>{work}</li>)}
            </ul>
        </div>
    )
}