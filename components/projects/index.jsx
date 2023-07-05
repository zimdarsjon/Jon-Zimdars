import React from 'react';
import styles from './projects.module.css';
import Section from '../section';
import Project from './project';

import zombies from '../../public/projects/zombies.png';
import pursuit from '../../public/projects/pursuit.png';
import swan from '../../public/projects/swan.png';

const projects = [
    {
        title: 'Pursuit',
        description: 'Job Searching Website',
        techstack: 'Javascript, Express, React, Axios, Nextjs, PostgreSQL, Prisma',
        work: [
            'Created front and back end systems to allow job seekers to upload and edit existing resumes for applications.',
            'Developed a scheduling system that allows employers to schedule meetings with applicants.',
            'Connected scheduling system to a calendar system, allowing users to see meeting details and create private events.'
        ],
        image: pursuit
    },
    {
        title: 'Swan',
        description: 'E-Commerce Website',
        techstack: 'Postgres, NGINX, AWS, Node, Sequelize',
        work: [
            'Created a dynamic product overview utilizing React, allowing for users to view various project styles in a carasoul, see relavent quantity and sale information, and checkout.',
            'Transferred all data from a legacy system to a new Postgres database, allowing for significantly faster query times at 2ms.',
            'Deployed 8 endpoints with NGINX load balancer, allowing for an efficent data stream from the front-end to the back-end.'
        ],
        image: swan
    },
    {
        title: 'Fog of the Dead',
        description: 'First Person Zombie Web Game',
        techstack: 'Javascript, Express, React, Axios, Three.js',
        work: [
           'Deployed a first person shooting game, allowing players to look around and shoot within a 3D envrinment.',
           'Created a back end scoring system, keeping track of the highest scores across all players.',
           'Created an enemny tracking system allowing for various enemy types, models, and 3D animations with GLTF Loader.'
        ],
        image: zombies
    }
]

export default function Projects() {
    return (
        <Section height='auto'>
            <div className={styles.container}>
                <h2>Recent Projects</h2>
                <div className={styles.carousel}>
                   {projects.map((project) => <Project project={project} key={project.title} />)}
                </div>
            </div>
        </Section>
    )
}