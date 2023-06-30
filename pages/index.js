import React from 'react';
import Navbar from '../components/navbar';
import Page from '../components/page';
import Intro from '../components/intro';

export default function Home() {
    return (
        <Page>
            <Navbar />
            <Intro />
        </Page>
    )
}