import React from 'react';

const Story = () => {
    return (
        <section id="story" className="section-padding">
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '60px',
                    alignItems: 'center'
                }}>
                    {/* Image Side */}
                    <div style={{ position: 'relative' }}>
                        <div style={{
                            width: '100%',
                            aspectRatio: '4/5',
                            background: '#222',
                            borderRadius: 'var(--radius-lg)',
                            overflow: 'hidden',
                            boxShadow: '0 20px 50px -10px rgba(0,0,0,0.5)'
                        }}>
                            <img
                                src="/img/story-main.jpg"
                                alt="Memo Compitiendo"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        {/* Decoration */}
                        <div style={{
                            position: 'absolute',
                            bottom: '-20px',
                            left: '-20px',
                            width: '150px',
                            height: '150px',
                            border: '2px solid var(--accent-color)',
                            borderRadius: 'var(--radius-lg)',
                            zIndex: -1
                        }}></div>
                    </div>

                    {/* Text Side */}
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Mi Historia</h2>
                        <div style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <p>
                                Todo comenzó con el deseo de superar mis propios límites. Lo que empezó como curiosidad por el triatlón se convirtió rápidamente en una forma de vida.
                            </p>
                            <p>
                                El camino no ha sido fácil. Madrugadas de entrenamiento antes de la escuela, sacrificios de fines de semana y la disciplina férrea de cumplir cada sesión. Pero cada meta cruzada, cada podio nacional y la clasificación al mundial confirman que voy por el camino correcto.
                            </p>
                            <p>
                                <strong style={{ color: 'white' }}>"No busco ser solo un participante. Busco la excelencia y representar a mi país en lo más alto."</strong>
                            </p>
                        </div>
                        <div style={{ marginTop: '30px' }}>
                            <button className="btn btn-outline" style={{ color: 'var(--accent-color)', borderColor: 'var(--accent-color)' }}>Leer Biografía Completa</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Story;
