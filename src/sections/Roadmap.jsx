import React from 'react';
import { Circle, Flag, Medal, Trophy } from 'lucide-react';
import roadmapData from '../content/roadmap.json';

const Roadmap = () => {
    return (
        <section id="roadmap" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px' }}>Roadmap Deportivo</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                    {/* Vertical Line */}
                    <div style={{
                        position: 'absolute',
                        left: '30px',
                        top: 0,
                        bottom: 0,
                        width: '2px',
                        background: 'linear-gradient(to bottom, var(--accent-color) 0%, rgba(255,255,255,0.1) 100%)'
                    }}></div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
                        {roadmapData.map((m, i) => (
                            <div key={i} style={{ display: 'flex', gap: '30px', position: 'relative' }}>
                                {/* Dot */}
                                <div style={{
                                    width: '60px',
                                    minWidth: '60px',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    <div style={{
                                        width: '20px',
                                        height: '20px',
                                        background: m.status === 'completed' || m.status === 'current' ? 'var(--accent-color)' : 'var(--bg-card)',
                                        border: `2px solid ${m.status === 'future' || m.status === 'goal' ? '#444' : 'var(--accent-color)'}`,
                                        borderRadius: '50%',
                                        marginTop: '5px',
                                        boxShadow: m.status === 'current' ? 'var(--accent-glow)' : 'none',
                                        position: 'relative',
                                        zIndex: 2
                                    }}>
                                        {m.status === 'current' && (
                                            <div style={{
                                                position: 'absolute', top: '-6px', left: '-6px', right: '-6px', bottom: '-6px',
                                                border: '1px solid var(--accent-color)', borderRadius: '50%', opacity: 0.5,
                                                animation: 'pulse 2s infinite'
                                            }}></div>
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div style={{ paddingBottom: '10px' }}>
                                    <span style={{
                                        fontSize: '0.9rem',
                                        fontWeight: 600,
                                        color: m.status === 'future' || m.status === 'goal' ? 'var(--text-muted)' : 'var(--accent-color)',
                                        marginBottom: '4px',
                                        display: 'block'
                                    }}>
                                        {m.year}
                                    </span>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: m.status === 'goal' ? 'white' : 'inherit' }}>
                                        {m.title} {m.status === 'goal' && '🏁'}
                                    </h3>
                                    <p style={{ color: 'var(--text-secondary)' }}>{m.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
