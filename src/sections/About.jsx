import React from 'react';
import { Activity, Flag, TrendingUp } from 'lucide-react';

// Keeping static content for now as it's structural, but moving towards component purity
const About = () => {
    const features = [
        {
            icon: <Flag size={32} />,
            title: "Visión Olímpica",
            desc: "Un camino estructurado y medible hacia los Juegos Olímpicos de Brisbane 2032."
        },
        {
            icon: <Activity size={32} />,
            title: "Desarrollo Integral",
            desc: "Preparación física, mental y nutricional. Un atleta completo se construye en 360 grados."
        },
        {
            icon: <TrendingUp size={32} />,
            title: "Proyecto Escalable",
            desc: "Más que un hobby, es una carrera profesional. Resultados y compromiso a largo plazo."
        }
    ];

    return (
        <section id="project" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>¿Qué es Memo Project?</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                        Es la estructura profesional detrás de un sueño. Un ecosistema diseñado para potenciar el talento y disciplina hacia la élite mundial.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px'
                }}>
                    {features.map((f, i) => (
                        <div key={i} style={{
                            background: 'var(--bg-card)',
                            padding: '40px 30px',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid rgba(255,255,255,0.05)',
                        }}>
                            <div style={{
                                color: 'var(--accent-color)',
                                marginBottom: '20px',
                                background: 'rgba(0, 86, 210, 0.1)',
                                width: '64px',
                                height: '64px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '16px'
                            }}>
                                {f.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{f.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;
