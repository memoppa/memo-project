
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
                    {/* H1 - High Impact */}
                    <h1 style={{
                        fontSize: 'clamp(3rem, 6vw, 6rem)',
                        lineHeight: 1,
                        marginBottom: '24px',
                        letterSpacing: '-0.02em',
                        fontWeight: 800
                    }}>
                        Únete a la historia <br />
                        <span style={{
                            color: 'transparent',
                            WebkitTextStroke: '1px white',
                            opacity: 0.8
                        }}>
                            antes de que suceda.
                        </span>
                    </h1>

                    {/* Subheadline - Dense & Descriptive */}
                    <p style={{
                        fontSize: '1.25rem',
                        color: '#d4d4d4', // Lighter than text-secondary for better contrast against dark video
                        maxWidth: '500px',
                        marginBottom: '40px',
                        lineHeight: 1.6,
                        fontWeight: 400
                    }}>
                        Memo Project: Construyendo un triatleta olímpico desde cero.
                    </p>

                    <div style={{ display: 'flex', gap: '40px', marginBottom: '50px' }}>
                        <div>
                            <span style={{ display: 'block', fontSize: '2rem', fontWeight: 700, color: 'var(--accent-color)' }}>2032</span>
                            <span style={{ fontSize: '0.8rem', color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Visión Brisbane</span>
                        </div>
                        <div>
                            <span style={{ display: 'block', fontSize: '2rem', fontWeight: 700, color: 'white' }}>+33h</span>
                            <span style={{ fontSize: '0.8rem', color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Entrenamiento / Sem</span>
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
