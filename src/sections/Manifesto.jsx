import React from 'react';

const Manifesto = () => {
    return (
        <section id="manifiesto" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
                    <p style={{
                        color: 'var(--accent-color)',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        marginBottom: '20px',
                        textTransform: 'uppercase'
                    }}>
                        Mentalidad
                    </p>

                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        marginBottom: '40px',
                        lineHeight: 1.2,
                        color: 'white'
                    }}>
                        La mayoría ve el resultado. <br />
                        <span style={{ color: 'var(--text-secondary)' }}>Pocos entienden el proceso.</span>
                    </h2>

                    <div style={{
                        borderLeft: '2px solid var(--accent-color)',
                        paddingLeft: '30px',
                        fontSize: '1.25rem',
                        lineHeight: 1.8,
                        color: '#d4d4d4'
                    }}>
                        <p style={{ marginBottom: '24px' }}>
                            Memo Project nace de una decisión: dejar de improvisar y empezar a construir alto rendimiento como sistema.
                        </p>
                        <p style={{ marginBottom: '24px' }}>
                            Aquí no hay atajos. Hay disciplina diaria. Hay estructura. <strong>Hay sacrificios invisibles.</strong>
                        </p>
                        <p style={{ fontSize: '1.5rem', fontWeight: 600, color: 'white', marginTop: '40px' }}>
                            Este proyecto no busca likes. Busca respeto.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Manifesto;
