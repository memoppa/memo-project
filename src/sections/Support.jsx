import React from 'react';
import { Check, Heart, Trophy, Zap, Flag } from 'lucide-react';
import supportPlans from '../content/support_plans.json';
import { Link } from 'react-router-dom';

const Support = () => {
    // Mapping string icon names to components
    const iconMap = {
        Heart: <Heart />,
        Trophy: <Trophy />,
        Zap: <Zap />,
        Flag: <Flag />
    };

    return (
        <section id="support" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background Texture */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at 50% 100%, rgba(34, 197, 94, 0.05) 0%, rgba(0,0,0,0) 50%)',
                zIndex: -1
            }}></div>

            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '16px', lineHeight: 1.1 }}>
                        Pertenecer al Proyecto
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                        Impulsar Memo Project no es ayudar a una persona. <br />
                        <strong>Es formar parte de un proceso real de alto rendimiento.</strong>
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '24px',
                    alignItems: 'stretch',
                    marginBottom: '60px'
                }}>
                    {supportPlans.map((tier, i) => (
                        <div key={i} style={{
                            background: tier.highlight ? 'linear-gradient(145deg, rgba(34,197,94,0.05), rgba(34,197,94,0.1))' : 'var(--bg-card)',
                            borderRadius: 'var(--radius-md)',
                            padding: '30px',
                            border: tier.highlight ? '1px solid var(--accent-color)' : '1px solid rgba(255,255,255,0.05)',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'transform 0.3s ease',
                            cursor: 'default'
                        }}
                            onMouseEnter={(e) => tier.highlight && (e.currentTarget.style.transform = 'translateY(-5px)')}
                            onMouseLeave={(e) => tier.highlight && (e.currentTarget.style.transform = 'translateY(0)')}
                        >
                            {/* Header */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '20px' }}>
                                <div style={{
                                    background: 'rgba(255,255,255,0.03)',
                                    padding: '12px',
                                    borderRadius: '12px',
                                    color: tier.color
                                }}>
                                    {React.cloneElement(iconMap[tier.icon], { size: 24 })}
                                </div>
                                {tier.highlight && (
                                    <span style={{
                                        fontSize: '0.75rem', fontWeight: 700,
                                        background: 'var(--accent-color)', color: 'white',
                                        padding: '4px 10px', borderRadius: '100px',
                                        letterSpacing: '0.05em'
                                    }}>
                                        RECOMENDADO
                                    </span>
                                )}
                            </div>

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{tier.title}</h3>
                            <p style={{ fontSize: '0.9rem', color: tier.color, fontWeight: 600, marginBottom: '15px' }}>{tier.subtitle}</p>

                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '25px', flexGrow: 1 }}>
                                {tier.description}
                            </p>

                            {/* Amounts Preview */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '30px' }}>
                                {tier.amounts.map((amt, idx) => (
                                    <span key={idx} style={{
                                        fontSize: '0.8rem',
                                        padding: '4px 8px',
                                        background: 'rgba(255,255,255,0.05)',
                                        borderRadius: '4px',
                                        color: '#d4d4d4'
                                    }}>
                                        {amt}
                                    </span>
                                ))}
                            </div>

                            <Link
                                to={tier.id === 'project' ? '/patrocinar' : '/apoyar'}
                                className={tier.highlight ? "btn btn-primary" : "btn btn-outline"}
                                style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}
                            >
                                {tier.id === 'project' ? 'Hacernos Aliados' : 'Unirme al Equipo'}
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Transparency Footnote */}
                <div style={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px', maxWidth: '700px', margin: '0 auto' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                        <strong style={{ color: 'var(--text-secondary)' }}>Transparencia total:</strong> Los apoyos se destinan directamente a viajes, inscripciones, equipo técnico, coaching y  recuperación. Aquí no compras resultados, acompañas el camino.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Support;
