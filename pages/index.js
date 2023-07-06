import React from 'react';
import Navbar from '../components/navbar';
import BGImage from '../components/bgimage';
import TitleSection from '../components/titlesection';
import Projects from '../components/projects';
import Bio from '../components/bio';
import Stack from '../components/stack';

const { useEffect, useState } = React;

export default function Home() {
    const [theme, setTheme] = useState('dark');

    const changeTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
    return (
        <div>
            <Navbar theme={theme} changeTheme={changeTheme}/>
            <BGImage theme={theme}/>
            <TitleSection />
            <Projects />
            <Bio />
            <Stack />
        </div>
    )
}