import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../sections/Hero';
import Manifesto from '../sections/Manifesto'; // V2
import Mindset from '../sections/Mindset'; // V2
import HardData from '../sections/HardData'; // V2
import AthleteSystem from '../sections/AthleteSystem'; // V2
import Results from '../sections/Results'; // V2
import Roadmap from '../sections/Roadmap';
import Support from '../sections/Support';
import Sponsors from '../sections/Sponsors';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const { hash } = useLocation();

    // Handle hash scrolling
    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    return (
        <>
            <Helmet>
                <title>Memo Project | Road to 2032</title>
                <meta name="description" content="Memo Project es la construcción consciente de un atleta de nivel internacional desde México. Alto rendimiento, disciplina y visión olímpica." />
            </Helmet>

            <Hero />

            <span id="el-proyecto"></span>
            <Manifesto />

            <span id="mentalidad"></span>
            <Mindset />

            <HardData />

            <span id="roadmap"></span>
            <Roadmap />

            <span id="historia"></span>
            <AthleteSystem />

            <Results />

            <span id="support"></span>
            <Support />

            <Sponsors />
        </>
    );
};

export default Home;
