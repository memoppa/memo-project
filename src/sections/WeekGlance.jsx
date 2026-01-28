import React from 'react';
import { Calendar, Clock, Activity, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WeekGlance = () => {
    return (
        <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Cinematic Background */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                zIndex: -1
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, width: '100%', height: '100%',
                    background: 'rgba(10, 10, 10, 0.7)', // Lighter overlay
                    zIndex: 2
                }}></div>
                <img
                    src="/img/grid_4.jpg" // Pool/Bike photo
                    alt="Week Background"
                    style={{
                        width: '100%', height: '100%', objectFit: 'cover',
                        filter: 'grayscale(100%)'
                    }}
                />
            </div>

            <div className="container">
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '60px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
                        <div>
                            <span style={{ color: 'var(--accent-color)', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                                Evidencia
                            </span>
                            <h2 style={{ fontSize: '2.5rem', marginTop: '10px' }}>Una semana real</h2>
                        </div>
                        <div style={{ maxWidth: '400px', textAlign: 'right', color: 'var(--text-secondary)' }}>
                            <p>Entrenar +33 horas no es un sacrificio.<br />Es el estándar.</p>
                        </div>
                    </div>

                    {/* High Density Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '1px',
                        background: 'rgba(255,255,255,0.1)', // Grid lines color
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        {[
                            { title: 'Natación', val: '25-30 km' },
                            { title: 'Ciclismo', val: '400+ km' },
                            { title: 'Carrera', val: '80-100 km' },
                            { title: 'Gimnasio', val: '3 Sesiones' }
                        ].map((item, i) => (
                            <div key={i} style={{
                                background: 'var(--bg-card)',
                                padding: '30px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px'
                            }}>
                                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.title}</span>
                                <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white' }}>{item.val}</span>
                            </div>
                        ))}
                    </div>

                    <div style={{
                        marginTop: '40px',
                        background: 'rgba(34, 197, 94, 0.05)',
                        padding: '24px',
                        borderRadius: '8px',
                        border: '1px solid rgba(34, 197, 94, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '20px'
                    }}>
                        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                            <Activity color="#22c55e" />
                            <div>
                                <h4 style={{ margin: 0, color: '#22c55e' }}>Recuperación Activa</h4>
                                <p style={{ margin: 0, fontSize: '0.9rem', color: '#a0a0a0' }}>Fisioterapia, sueño monitoreado y nutrición de precisión.</p>
                            </div>
                        </div>
                        <Link to="/#roadmap" style={{
                            color: 'white',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontSize: '0.95rem',
                            fontWeight: 600
                        }}>
                            Ver el proceso completo <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WeekGlance;
