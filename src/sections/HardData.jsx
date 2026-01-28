import React from 'react';

const HardData = () => {
    return (
        <section className="section-padding" style={{ background: 'var(--bg-primary)', borderBottom: '1px solid #222' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '40px',
                    textAlign: 'center'
                }}>
                    <div>
                        <div style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1, marginBottom: '5px' }}>2</div>
                        <div style={{ fontSize: '0.85rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Sesiones Diarias</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1, marginBottom: '5px' }}>+33h</div>
                        <div style={{ fontSize: '0.85rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Volumen Semanal</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1, marginBottom: '5px' }}>365</div>
                        <div style={{ fontSize: '0.85rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Días al Año</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1, marginBottom: '5px' }}>100%</div>
                        <div style={{ fontSize: '0.85rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Dedicación</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HardData;
