import React from 'react';
import { ArrowRight } from 'lucide-react';
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
            paddingTop: '80px' // For navbar
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
                    background: 'linear-gradient(135deg, rgba(5,5,5,0.85) 0%, rgba(10,10,10,0.7) 100%)',
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

            {/* Accent Orb */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(0,86,210,0.15) 0%, rgba(0,0,0,0) 70%)',
                zIndex: -1,
                borderRadius: '50%',
                filter: 'blur(40px)'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '800px' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '6px 12px',
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: '100px',
                        marginBottom: '24px',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <span style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%' }}></span>
                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Rumbo a Brisbane 2032</span>
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(3rem, 5vw, 5rem)',
                        lineHeight: 1.1,
                        marginBottom: '24px',
                        letterSpacing: '-0.03em'
                    }}>
                        TRIATLÓN DE <br />
                        <span style={{
                            background: 'linear-gradient(to right, #fff 20%, var(--text-secondary) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>ALTO RENDIMIENTO</span>
                    </h1>

                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-secondary)',
                        maxWidth: '580px',
                        marginBottom: '40px',
                        lineHeight: 1.6
                    }}>
                        {profileData.description}
                    </p>

                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                        <Link to="/apoyar" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem', textDecoration: 'none' }}>
                            Sumarse al Equipo <ArrowRight size={20} />
                        </Link>
                        <a href="#project" className="btn btn-outline" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
                            Conocer más
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
