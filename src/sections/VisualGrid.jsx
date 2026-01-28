import React from 'react';
import profileData from '../content/profile.json';

const VisualGrid = () => {
    return (
        <section className="section-padding" style={{ background: 'black', paddingBottom: '0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <p style={{
                        color: 'var(--accent-color)',
                        fontWeight: 700,
                        letterSpacing: '0.2em',
                        fontSize: '0.9rem',
                        marginBottom: '10px',
                        textTransform: 'uppercase'
                    }}>
                        El proceso es la evidencia
                    </p>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1, color: 'white' }}>
                        No existen los atajos. <br />
                        <span style={{ color: '#333' }}>Solo existe la repetición.</span>
                    </h2>
                </div>
            </div>

            {/* Masonry Layout manually using CSS Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '4px',
                padding: '0 4px'
            }}>
                {profileData.images.grid.map((img, index) => (
                    <div key={index} style={{
                        position: 'relative',
                        height: index % 2 === 0 ? '400px' : '300px', // Staggered heights
                        overflow: 'hidden',
                        borderRadius: '2px'
                    }}>
                        <img
                            src={img}
                            alt={`Training Grind ${index + 1}`}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'grayscale(100%) contrast(1.2)', // Artistic look
                                transition: 'all 0.5s ease',
                                cursor: 'crosshair'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.filter = 'grayscale(0%) contrast(1)';
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.filter = 'grayscale(100%) contrast(1.2)';
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        />
                        <div style={{
                            position: 'absolute',
                            bottom: '20px', left: '20px',
                            background: 'black',
                            color: 'white',
                            padding: '5px 10px',
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            letterSpacing: '0.1em'
                        }}>
                            00{index + 1}
                        </div>
                    </div>
                ))}
            </div>

            <div style={{
                background: 'black',
                padding: '60px 0',
                textAlign: 'center',
                borderBottom: '1px solid #222'
            }}>
                <p style={{ color: '#666', fontSize: '1.5rem', fontFamily: 'serif', fontStyle: 'italic' }}>
                    "Lo que ves es el 1% del trabajo."
                </p>
            </div>
        </section>
    );
};

export default VisualGrid;
