import React from 'react';
import homeV2 from '../content/home_v2.json';
import { Activity, DollarSign, Globe2, Target } from 'lucide-react';

const HardData = () => {
    const { hard_data } = homeV2;

    const icons = [
        <Activity size={32} color="var(--accent-color)" />,
        <DollarSign size={32} color="var(--accent-color)" />,
        <Globe2 size={32} color="var(--accent-color)" />,
        <Target size={32} color="var(--accent-color)" />
    ];

    return (
        <section className="section-padding" style={{
            background: 'linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary))',
            borderBottom: '1px solid rgba(255,255,255,0.05)'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '20px'
                }}>
                    {hard_data.map((item, index) => (
                        <div key={index} style={{
                            background: 'var(--bg-card)',
                            padding: '30px',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            textAlign: 'left',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '15px'
                        }}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                background: 'rgba(0, 86, 210, 0.1)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '10px'
                            }}>
                                {icons[index]}
                            </div>
                            <div style={{
                                fontSize: '2rem',
                                fontWeight: 800,
                                fontFamily: 'var(--font-header)',
                                color: 'white'
                            }}>
                                {item.value}
                            </div>
                            <div style={{
                                fontSize: '0.95rem',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.5
                            }}>
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '50px', textAlign: 'center' }}>
                    <a href="#roadmap" style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-muted)',
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    }}>
                        Ver desglose completo del camino &rarr;
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HardData;
