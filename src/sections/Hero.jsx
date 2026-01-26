import React from 'react';
import { ArrowRight, ChevronRight, Activity, Trophy, Globe, MapPin } from 'lucide-react';
import profileData from '../content/profile.json';
import homeV2 from '../content/home_v2.json';
import { Link } from 'react-router-dom';

const Hero = () => {
    const { h1, subheadline, cta_primary, cta_secondary, chips } = homeV2.hero;

    const chipIcons = [
        <Activity size={16} key="i1" />,
        <Trophy size={16} key="i2" />,
        <Globe size={16} key="i3" />,
        <MapPin size={16} key="i4" />
    ];

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
                    background: 'linear-gradient(135deg, rgba(5,5,5,0.92) 0%, rgba(10,10,10,0.85) 100%)',
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

            {/* Accent Orb - Subtle Glow */}
            <div style={{
                position: 'absolute',
                top: '15%',
                right: '-10%',
                width: '700px',
                height: '700px',
                background: 'radial-gradient(circle, rgba(0,86,210,0.08) 0%, rgba(0,0,0,0) 70%)',
                zIndex: -1,
                borderRadius: '50%',
                filter: 'blur(80px)',
                opacity: 0.6
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '900px' }}>

                    {/* H1 - High Impact */}
                    <h1 style={{
                        fontSize: 'clamp(3rem, 5.5vw, 6rem)',
                        lineHeight: 1.05,
                        marginBottom: '24px',
                        letterSpacing: '-0.03em',
                        whiteSpace: 'pre-line' // Allows \n to break lines from JSON
                    }}>
                        {h1.split('\n')[0]} <br />
                        <span style={{
                            background: 'linear-gradient(to right, #fff 30%, var(--text-secondary) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            {h1.split('\n')[1]}
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p style={{
                        fontSize: '1.35rem',
                        color: 'var(--text-secondary)',
                        maxWidth: '680px',
                        marginBottom: '48px',
                        lineHeight: 1.6,
                        fontWeight: 300
                    }}>
                        {subheadline}
                    </p>

                    {/* Data Chips - Credibility */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '12px',
                        marginBottom: '48px'
                    }}>
                        {chips.map((chip, index) => (
                            <div key={index} style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '8px 16px',
                                background: 'rgba(255,255,255,0.03)',
                                borderRadius: '100px',
                                border: '1px solid rgba(255,255,255,0.08)',
                                fontSize: '0.9rem',
                                color: '#e5e5e5',
                                letterSpacing: '0.01em'
                            }}>
                                <span style={{ color: 'var(--accent-color)', display: 'flex' }}>
                                    {chipIcons[index] || <Activity size={16} />}
                                </span>
                                {chip}
                            </div>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        <Link to="/#el-proyecto" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>
                            {cta_primary} <ChevronRight size={20} />
                        </Link>
                        <Link to="/apoyar" className="btn btn-outline" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>
                            {cta_secondary}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
