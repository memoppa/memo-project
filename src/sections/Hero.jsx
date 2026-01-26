
import React from 'react';
import { ArrowRight, ChevronRight, Activity, Trophy, Globe, MapPin } from 'lucide-react';
import profileData from '../content/profile.json';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '80px'
        }}>
            {/* Background Video */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -2
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    // Darker gradient for cinematic text readability
                    background: 'linear-gradient(135deg, rgba(5,5,5,0.95) 0%, rgba(10,10,10,0.8) 100%)',
                    zIndex: 2
                }}></div>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={profileData.images.hero_poster}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                >
                    <source src={profileData.images.hero_video} type="video/mp4" />
                </video>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '900px' }}>

                    {/* H1 - High Impact */}
                    <h1 style={{
                        fontSize: 'clamp(3rem, 5vw, 5rem)',
                        lineHeight: 1.1,
                        marginBottom: '24px',
                        letterSpacing: '-0.02em',
                        fontWeight: 800
                    }}>
                        No es un sueño. <br />
                        <span style={{
                            color: 'var(--accent-color)',
                        }}>
                            Es un proyecto de alto rendimiento.
                        </span>
                    </h1>

                    {/* Subheadline - Dense & Descriptive */}
                    <p style={{
                        fontSize: '1.25rem',
                        color: '#d4d4d4', // Lighter than text-secondary for better contrast against dark video
                        maxWidth: '720px',
                        marginBottom: '40px',
                        lineHeight: 1.6,
                        fontWeight: 400
                    }}>
                        Memo Project es la construcción estructurada de un triatleta con proyección internacional, entrenando más de 33 horas por semana, con visión olímpica y un plan a largo plazo.
                    </p>

                    {/* Data Grid (Micro-blocks) */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                        gap: '20px',
                        marginBottom: '50px',
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        borderBottom: '1px solid rgba(255,255,255,0.1)',
                        padding: '24px 0'
                    }}>
                        <div>
                            <div style={{ fontSize: '2rem', fontWeight: 700, color: 'white' }}>+33 h</div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Entrenamiento Semanal</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '2rem', fontWeight: 700, color: 'white' }}>High Perf</div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Estructura Profesional</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '2rem', fontWeight: 700, color: 'white' }}>Mundiales</div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Clasificados & Objetivo</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '2rem', fontWeight: 700, color: 'white' }}>2032</div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Visión Brisbane</div>
                        </div>
                    </div>

                    {/* CTAs */}
                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        <button
                            onClick={() => document.getElementById('manifiesto').scrollIntoView({ behavior: 'smooth' })}
                            className="btn btn-primary"
                            style={{ padding: '16px 36px', fontSize: '1.1rem' }}
                        >
                            Explorar el proyecto <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
