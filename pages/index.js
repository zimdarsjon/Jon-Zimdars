import React from 'react';
import Navbar from '../components/navbar';
import BGImage from '../components/bgimage';
import Section from '../components/section';
import TitleSection from '../components/titlesection';
import Projects from '../components/projects';
import Bio from '../components/bio';
import Stack from '../components/stack';

export default function Home() {
    return (
        <div>
            <Navbar />
            <BGImage />
            <TitleSection />
            <Projects />
            <Bio />
            <Stack />
        </div>
    )
}