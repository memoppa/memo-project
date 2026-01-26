import React from 'react';
import homeV2 from '../content/home_v2.json';
import profileData from '../content/profile.json';
import { ArrowRight, Clock, Battery } from 'lucide-react';
import { Link } from 'react-router-dom';

const AthleteSystem = () => {
    const { headline, body, cta } = homeV2.athlete;

    return (
        <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(300px, 1fr) 1fr',
                    gap: '60px',
                    alignItems: 'center'
                }}>
                    {/* Text Content */}
                    <div style={{ order: 2 }}> {/* Default order, will swap in CSS if needed, but text right image left is standard alternate */}
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            marginBottom: '20px',
                            color: 'var(--accent-color)',
                            fontWeight: 600,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            fontSize: '0.9rem'
                        }}>
                            <Battery size={18} /> El Motor
                        </div>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                            marginBottom: '30px',
                            whiteSpace: 'pre-line',
                            lineHeight: 1.1
                        }}>
                            {headline}
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.7,
                            marginBottom: '40px',
                            maxWidth: '500px'
                        }}>
                            {body}
                        </p>
                        <Link to="/#historia" className="btn btn-outline">
                            {cta} <ArrowRight size={18} />
                        </Link>
                    </div>

                    {/* Image / Graphic */}
                    <div style={{ order: 1, position: 'relative' }}>
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            left: '-20px',
                            width: '100px',
                            height: '100px',
                            borderTop: '2px solid var(--accent-color)',
                            borderLeft: '2px solid var(--accent-color)',
                            opacity: 0.5
                        }}></div>
                        <img
                            src="/img/about-1.jpg" // Using existing image for now
                            alt="Memo Training"
                            style={{
                                width: '100%',
                                borderRadius: 'var(--radius-md)',
                                filter: 'grayscale(100%) contrast(1.1)',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
                            }}
                        />
                        <div style={{
                            position: 'absolute',
                            bottom: '-20px',
                            right: '-20px',
                            width: '100px',
                            height: '100px',
                            borderBottom: '2px solid var(--accent-color)',
                            borderRight: '2px solid var(--accent-color)',
                            opacity: 0.5
                        }}></div>
                    </div>
                </div>
            </div>
            <style>{`
                @media (max-width: 768px) {
                    .container > div {
                        grid-template-columns: 1fr !important;
                    }
                    .container > div > div {
                        order: unset !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default AthleteSystem;
