import React from 'react';
import Navbar from '../components/navbar';
import BGImage from '../components/bgimage';
import Section from '../components/section';
import TitleSection from '../components/titlesection';
import Projects from '../components/projects';

export default function Home() {
    return (
        <div>
            <Navbar />
            <BGImage />
            <TitleSection />
            <Projects />
            <Section color='clear'/>
            <Section />
        </div>
    )
}