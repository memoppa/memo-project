import React, { useState } from 'react';
import roadmapData from '../content/roadmap.json';
import { ArrowRight, ChevronRight, Flag, MapPin, Trophy } from 'lucide-react';

const Roadmap = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section id="roadmap" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Cinematic Background */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                zIndex: -1
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, width: '100%', height: '100%',
                    background: 'linear-gradient(to bottom, rgba(5,5,5,0.95), rgba(5,5,5,0.85))',
                    zIndex: 2
                }}></div>
                <img
                    src="/img/grid_5.jpg" // Road/Running photo
                    alt="Roadmap Background"
                    style={{
                        width: '100%', height: '100%', objectFit: 'cover',
                        filter: 'grayscale(100%)'
                    }}
                />
            </div>

            <div className="container">
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'end',
                    marginBottom: '50px',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    paddingBottom: '20px'
                }}>
                    <div>
                        <div style={{ color: 'var(--accent-color)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                            Road to 2032
                        </div>
                        <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>El Camino</h2>
                    </div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '24px'
                }}>
                    {roadmapData.map((stage, index) => {
                        const isGoal = stage.status === 'goal';
                        const isCurrent = stage.status === 'current';
                        const isPast = stage.status === 'completed';

                        return (
                            <div
                                key={index}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{
                                    background: isCurrent ? 'linear-gradient(145deg, var(--bg-card), rgba(0,86,210,0.1))' : 'var(--bg-card)',
                                    border: isCurrent ? '1px solid var(--accent-color)' : '1px solid rgba(255,255,255,0.05)',
                                    borderRadius: 'var(--radius-md)',
                                    padding: '30px',
                                    position: 'relative',
                                    transition: 'all 0.3s ease',
                                    transform: hoveredIndex === index ? 'translateY(-5px)' : 'none',
                                    cursor: 'pointer'
                                }}
                            >
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '20px'
                                }}>
                                    <div style={{
                                        fontSize: '0.9rem',
                                        fontWeight: 700,
                                        color: isCurrent ? 'white' : 'var(--text-muted)',
                                        border: isCurrent ? '1px solid var(--accent-color)' : '1px solid rgba(255,255,255,0.1)',
                                        padding: '4px 12px',
                                        borderRadius: '100px',
                                        background: isCurrent ? 'var(--accent-color)' : 'transparent'
                                    }}>
                                        {stage.year}
                                    </div>
                                    {isGoal && <Flag size={20} color="#fbbf24" />}
                                    {isCurrent && <div style={{
                                        width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%', boxShadow: '0 0 10px #22c55e'
                                    }}></div>}
                                </div>

                                <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: isPast ? 'var(--text-muted)' : 'white' }}>
                                    {stage.title}
                                </h3>

                                <p style={{
                                    fontSize: '0.95rem',
                                    color: 'var(--text-secondary)',
                                    marginBottom: '30px',
                                    lineHeight: 1.6,
                                    height: '60px', // Uniform height
                                    overflow: 'hidden'
                                }}>
                                    {stage.desc}
                                </p>

                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    color: isCurrent ? 'var(--accent-color)' : 'var(--text-muted)',
                                    opacity: hoveredIndex === index || isCurrent ? 1 : 0.6,
                                    transition: 'opacity 0.3s'
                                }}>
                                    {isGoal ? 'Ver Objetivo Final' : 'Ver Temporada'} <ChevronRight size={16} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
