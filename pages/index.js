import React from 'react';
import Navbar from '../components/navbar';
import BGImage from '../components/bgimage';
import Section from '../components/section';

export default function Home() {
    return (
        <div>
            <Navbar />
            <BGImage />
            <Section color='clear'/>
            <Section />
            <Section color='clear'/>
            <Section />
        </div>
    )
}