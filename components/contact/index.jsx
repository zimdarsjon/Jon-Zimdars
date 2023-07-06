import React from 'react';
import styles from './contact.module.css';
import Section from '../section';
import axios from 'axios';

const { useState, useEffect } = React;

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !message) {
          setError('Missing Required Fields')
        } else {
            setError('');
            axios.post('/api/email', null, { params: {
                name, email, message
            }})
            .then(() => {
                setEmail('');
                setName('');
                setMessage('');
                setSent(true);
            })
            .catch(err => console.log(err))
        }
    }
    return (
        <Section height='94vh' color='clear'>
            <div className={styles.container}>
                <div className={styles.sent} style={!sent ? {opacity: 0, pointerEvents: 'none'} : {}}>
                    <h2>Message Sent</h2>
                    <button onClick={(e) => {
                        e.preventDefault();
                        setSent(false);
                    }}>Send Another</button>
                </div>
                <form onSubmit={handleSubmit} style={sent ? {opacity: 0, pointerEvents: 'none'} : {}}>
                    {error && <h2>{error}</h2>}
                    <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <textarea placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}/>
                    <button type='submit'>Send</button>
                </form>
            </div>
        </Section>
    )
}