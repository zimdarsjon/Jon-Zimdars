import React from 'react';
import Navbar from '../components/navbar';
import Section from '../components/section';
import BGImage from '../components/bgimage';
import ContactForm from '../components/contact';

const { useEffect, useState } = React;

export default function Contact(){
    const [theme, setTheme] = useState('dark');
    const changeTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
    return(
        <div>
            <Navbar theme={theme} changeTheme={changeTheme} page='/contact'/>
            <BGImage theme={theme}/>
            <ContactForm />
        </div>
    )
}