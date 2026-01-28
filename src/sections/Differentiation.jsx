import React from 'react';
import { Target, Zap, BarChart } from 'lucide-react';

const Differentiation = () => {
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
                    background: 'rgba(5, 5, 5, 0.7)', // Reduced opacity so photo is visible
                    zIndex: 2
                }}></div>
                <img
                    src="/img/grid_3.jpg" // Using one of the new assets (e.g., Gym/Structure)
                    alt="Structure Background"
                    style={{
                        width: '100%', height: '100%', objectFit: 'cover',
                        filter: 'grayscale(100%)'
                    }}
                />
            </div>

            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '40px',
                    alignItems: 'center'
                }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', lineHeight: 1.1 }}>
                            Por qué este proyecto <br />
                            <span style={{ color: 'var(--accent-color)' }}>es diferente.</span>
                        </h2>
                        <p style={{ fontSize: '1.2rem', color: '#d4d4d4', marginBottom: '16px' }}>
                            Muchos entrenan duro. <br />
                            <strong>Pocos entrenan con estructura.</strong>
                        </p>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            Memo Project no depende de motivación. Depende de planificación, medición y constancia. Esto no es inspiración. Es alto rendimiento aplicado.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gap: '16px' }}>
                        <div style={{
                            background: 'var(--bg-card)',
                            padding: '24px',
                            borderRadius: '8px',
                            borderLeft: '4px solid var(--accent-color)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px'
                        }}>
                            <Target size={24} color="var(--accent-color)" />
                            <div>
                                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Objetivos Medibles</h4>
                                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Nada es al azar. Todo tiene un KPI.</p>
                            </div>
                        </div>

                        <div style={{
                            background: 'var(--bg-card)',
                            padding: '24px',
                            borderRadius: '8px',
                            borderLeft: '4px solid #fbbf24',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px'
                        }}>
                            <BarChart size={24} color="#fbbf24" />
                            <div>
                                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Datos &gt; Sensaciones</h4>
                                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Análisis de lactato, potencia y recuperación.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Differentiation;
