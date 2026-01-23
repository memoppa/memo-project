import React from 'react';
import { Check, Heart, Trophy, Zap } from 'lucide-react';
import supportPlans from '../content/support_plans.json';
import { Link } from 'react-router-dom';

const Support = () => {
    // Mapping string icon names to components
    const iconMap = {
        Heart: <Heart />,
        Trophy: <Trophy />,
        Zap: <Zap />
    };

    return (
        <section id="support" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background decorative blob */}
            <div style={{
                position: 'absolute',
                bottom: '10%',
                left: '-10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 70%)',
                borderRadius: '50%',
                zIndex: -1
            }}></div>

            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>Impulsa el Sueño</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        El alto rendimiento requiere recursos, equipo y viajes. Tu apoyo hace posible que me enfoque 100% en el entrenamiento y la competencia.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px',
                    alignItems: 'start'
                }}>
                    {supportPlans.map((tier, i) => (
                        <div key={i} style={{
                            background: tier.highlight ? 'linear-gradient(145deg, #151515, #222)' : 'var(--bg-card)',
                            borderRadius: 'var(--radius-lg)',
                            padding: '40px 30px',
                            border: tier.highlight ? '1px solid var(--accent-color)' : '1px solid rgba(255,255,255,0.05)',
                            position: 'relative',
                            transform: tier.highlight ? 'scale(1.05)' : 'scale(1)',
                            boxShadow: tier.highlight ? '0 10px 40px -10px rgba(0,0,0,0.5)' : 'none',
                            zIndex: tier.highlight ? 2 : 1
                        }}>
                            {tier.highlight && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-12px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: 'var(--accent-color)',
                                    padding: '4px 12px',
                                    borderRadius: '100px',
                                    fontSize: '0.8rem',
                                    fontWeight: 700
                                }}>
                                    MÁS POPULAR
                                </div>
                            )}

                            <div style={{ color: tier.highlight ? 'var(--accent-color)' : 'var(--text-secondary)', marginBottom: '20px' }}>
                                {React.cloneElement(iconMap[tier.icon] || <Heart />, { size: 32 })}
                            </div>

                            <h3 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>{tier.title}</h3>
                            <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '30px' }}>
                                <span style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white' }}>{tier.price}</span>
                                <span style={{ color: 'var(--text-secondary)', marginLeft: '8px' }}>{tier.period}</span>
                            </div>

                            <ul style={{ marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {tier.features.map((feat, idx) => (
                                    <li key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'center', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                        <Check size={16} color="var(--accent-color)" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <Link to="/apoyar" className={tier.highlight ? "btn btn-primary" : "btn btn-outline"} style={{ width: '100%', textDecoration: 'none' }}>
                                {tier.cta}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Support;
