import React from 'react';
import Navbar from '../components/navbar';
import BGImage from '../components/bgimage';
import Section from '../components/section';
import TitleSection from '../components/titlesection';

export default function Home() {
    return (
        <div>
            <Navbar />
            <BGImage />
            <TitleSection />
            <Section />
            <Section color='clear'/>
            <Section />
        </div>
    )
}