import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../sections/Hero';
import Manifesto from '../sections/Manifesto'; // V2 High Density
import Differentiation from '../sections/Differentiation'; // New
import WeekGlance from '../sections/WeekGlance'; // New
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

            <span id="manifiesto"></span>
            <Manifesto />

            <Differentiation />

            <span id="evidencia"></span>
            <WeekGlance />

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
