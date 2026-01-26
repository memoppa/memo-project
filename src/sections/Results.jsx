import React from 'react';
import homeV2 from '../content/home_v2.json';
import { ArrowRight, Trophy, Medal, Flag, Target } from 'lucide-react';

const Results = () => {
    const { headline, cta } = homeV2.results;

    const items = [
        { icon: <Trophy size={32} />, label: "Podiums Nacionales", value: "Multiple" },
        { icon: <Medal size={32} />, label: "Juegos CONADE", value: "Medallista" },
        { icon: <Flag size={32} />, label: "Mundiales", value: "Clasificado" },
        { icon: <Target size={32} />, label: "Próximo Objetivo", value: "Brisbane" },
    ];

    return (
        <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    marginBottom: '50px'
                }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                        marginBottom: '20px',
                        whiteSpace: 'pre-line',
                        lineHeight: 1.1
                    }}>
                        {headline}
                    </h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '20px',
                    marginBottom: '50px'
                }}>
                    {items.map((item, index) => (
                        <div key={index} style={{
                            background: 'rgba(255,255,255,0.02)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            borderRadius: 'var(--radius-md)',
                            padding: '30px 20px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '15px',
                            transition: 'transform 0.3s ease',
                            cursor: 'default'
                        }}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'var(--accent-color)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; }}
                        >
                            <div style={{ color: 'var(--accent-color)' }}>{item.icon}</div>
                            <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>{item.value}</div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item.label}</div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center' }}>
                    <a href="#roadmap" className="btn btn-primary">
                        {cta} <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Results;
