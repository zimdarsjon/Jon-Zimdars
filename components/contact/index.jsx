import React from 'react';
import styles from './contact.module.css';
import Section from '../section';
//import axios from 'axios';

export default function ContactForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('test');
    }
    return (
        <Section height='94vh' color='clear'>
            <div className={styles.container}>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Name' />
                    <input type='email' placeholder='Email' />
                    <textarea placeholder='Message'/>
                    <button type='submit'>Send</button>
                </form>
            </div>
        </Section>
    )
}