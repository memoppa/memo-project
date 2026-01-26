import React from 'react';
import homeV2 from '../content/home_v2.json';
import { Link } from 'react-router-dom';
import { Brain, Clock, Zap } from 'lucide-react';

const Mindset = () => {
    const { headline, body, cta } = homeV2.mindset;

    return (
        <section id="mentalidad" className="section-padding" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
            {/* Background Texture/Icon */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                opacity: 0.03,
                pointerEvents: 'none'
            }}>
                <Brain size={400} />
            </div>

            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '60px',
                    alignItems: 'center'
                }}>
                    {/* Visual Side */}
                    <div style={{ position: 'relative' }}>
                        {/* Placeholder for future visual/image, using a stylized abstract block for now */}
                        <div style={{
                            width: '100%',
                            aspectRatio: '4/5',
                            backgroundColor: '#1a1a1a',
                            borderRadius: 'var(--radius-md)',
                            position: 'relative',
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(45deg, var(--accent-color) 0%, transparent 100%)',
                                opacity: 0.1
                            }}></div>
                            <Brain size={80} color="var(--accent-color)" opacity={0.5} />
                        </div>

                        {/* Floating Card */}
                        <div style={{
                            position: 'absolute',
                            bottom: '30px',
                            right: '-20px',
                            background: 'var(--bg-card)',
                            padding: '20px',
                            borderRadius: 'var(--radius-sm)',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                            border: '1px solid rgba(256,256,256,0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px'
                        }}>
                            <div style={{ background: 'rgba(34, 197, 94, 0.1)', padding: '10px', borderRadius: '50%' }}>
                                <Clock size={24} color="#22c55e" />
                            </div>
                            <div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Sesión Matutina</div>
                                <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>4:50 AM</div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div>
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
                            <Zap size={18} /> Mentalidad 24/7
                        </div>

                        <h2 style={{
                            fontSize: '2.5rem',
                            marginBottom: '30px',
                            whiteSpace: 'pre-line',
                            lineHeight: 1.2
                        }}>
                            {headline}
                        </h2>

                        <div style={{
                            fontSize: '1.1rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.7,
                            marginBottom: '40px'
                        }}>
                            {body.map((p, i) => (
                                <p key={i} style={{ marginBottom: '20px' }}>{p}</p>
                            ))}
                        </div>

                        <Link to="/#rutina" className="btn btn-primary">
                            {cta}
                        </Link>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .container > div {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Mindset;
