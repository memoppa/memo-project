import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Hero from '../sections/Hero';
import Manifesto from '../sections/Manifesto';
import HardData from '../sections/HardData';
import Sponsors from '../sections/Sponsors';
import { ArrowRight } from 'lucide-react';

const Home = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    return (
        <div style={{ background: 'var(--bg-primary)', overflowX: 'hidden' }}>

            <Hero />

            <Manifesto />

            <HardData />

            {/* Gateways / Deep Dive */}
            <section className="section-padding">
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2px', // Minimal gap for editorial grid look
                        background: '#222', // Border color
                        border: '1px solid #222'
                    }}>
                        {[
                            { title: 'El Proyecto', desc: 'Mentalidad y Visión.', link: '/proyecto', bg: '/img/grid_1.jpg' },
                            { title: 'El Camino', desc: 'Proceso y Estructura.', link: '/camino', bg: '/img/grid_2.jpg' },
                            { title: 'El Atleta', desc: 'Disciplina e Intimidad.', link: '/atleta', bg: '/img/grid_3.jpg' },
                            { title: 'Resultados', desc: 'Evidencia tangible.', link: '/resultados', bg: '/img/story-main.jpg' }
                        ].map((item, i) => (
                            <Link to={item.link} key={i} style={{
                                position: 'relative',
                                height: '300px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                padding: '30px',
                                textDecoration: 'none',
                                overflow: 'hidden'
                            }}>
                                {/* Background Image with Overlay */}
                                <div style={{
                                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                    zIndex: 0
                                }}>
                                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)', transition: 'background 0.3s' }}></div>
                                    <img src={item.bg} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }} />
                                </div>

                                <div style={{ position: 'relative', zIndex: 1, transition: 'transform 0.3s' }}>
                                    <h3 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '5px' }}>{item.title}</h3>
                                    <p style={{ color: '#aaa', fontSize: '1rem' }}>{item.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impulse CTA */}
            <section className="section-padding" style={{ textAlign: 'center', background: '#0a0a0a' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>No es donación. Es involucramiento.</h2>
                    <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto 40px' }}>
                        Impulsar Memo Project es sostener una estructura real, no financiar una promesa.
                    </p>
                    <Link to="/impulsar" className="btn btn-primary" style={{ padding: '16px 40px' }}>
                        Formar Parte <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

            <Sponsors />
        </div>
    );
};

export default Home;
