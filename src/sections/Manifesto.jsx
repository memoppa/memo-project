import React from 'react';
import { ArrowRight } from 'lucide-react';
import homeV2 from '../content/home_v2.json';
import { Link } from 'react-router-dom';

const Manifesto = () => {
    const { headline, body, cta } = homeV2.manifesto;

    return (
        <section id="el-proyecto" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                        marginBottom: '40px',
                        whiteSpace: 'pre-line',
                        lineHeight: 1.2
                    }}>
                        {headline}
                    </h2>

                    <div style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.8,
                        marginBottom: '40px'
                    }}>
                        {body.map((paragraph, index) => (
                            <p key={index} style={{ marginBottom: '20px' }}>
                                {index === 0 ? (
                                    <strong style={{ color: 'white', fontWeight: 600 }}>{paragraph}</strong>
                                ) : paragraph}
                            </p>
                        ))}
                    </div>

                    <div style={{ display: 'inline-block' }}>
                        <Link to="/#mentalidad" className="btn btn-outline" style={{ borderColor: 'var(--accent-color)', color: 'var(--accent-color)' }}>
                            {cta} <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Manifesto;
