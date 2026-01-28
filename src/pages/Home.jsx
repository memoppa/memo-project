import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../sections/Hero';
import Manifesto from '../sections/Manifesto'; // V2 High Density
import Differentiation from '../sections/Differentiation'; // New
import WeekGlance from '../sections/WeekGlance'; // New
import AthleteSystem from '../sections/AthleteSystem'; // V2
import Roadmap from '../sections/Roadmap';
import Support from '../sections/Support';
import Sponsors from '../sections/Sponsors';

const Home = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    return (
        <div style={{ background: 'var(--bg-primary)', overflowX: 'hidden' }}>

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

            {/* The Investment */}
            <span id="support"></span>
            <Support />

            <Sponsors />
        </div>
    );
};

export default Home;
