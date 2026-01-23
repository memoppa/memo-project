import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Story from '../sections/Story';
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
                <meta name="description" content="Memo Project es la estructura profesional detrás de un sueño olímpico." />
            </Helmet>

            <Hero />
            <span id="project"></span>
            <About />
            <span id="story"></span>
            <Story />
            <span id="roadmap"></span>
            <Roadmap />
            <span id="impact"></span>
            <span id="support"></span>
            <Support />
            <Sponsors />
        </>
    );
};

export default Home;
