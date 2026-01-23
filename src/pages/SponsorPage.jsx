import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Check } from 'lucide-react';
import SponsorForm from '../components/forms/SponsorForm';

const SponsorPage = () => {
    return (
        <div className="section-padding container" style={{ paddingTop: '120px' }}>
            <Helmet>
                <title>Patrocinar | Memo Project</title>
                <meta name="description" content="Haz equipo con Memo Project. Oportunidades de patrocinio y alianza para marcas." />
            </Helmet>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <span style={{ color: 'var(--accent-color)', fontWeight: 700, letterSpacing: '0.1em' }}>B2B & ALIANZAS</span>
                    <h1 style={{ fontSize: '3.5rem', marginTop: '16px', marginBottom: '24px' }}>Haz Equipo con el Futuro</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                        Conecta tu marca con valores de disciplina, excelencia y visión olímpica.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '40px',
                    marginBottom: '80px'
                }}>
                    <div style={{ background: 'var(--bg-card)', padding: '40px', borderRadius: 'var(--radius-md)' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>¿Por qué patrocinar?</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <li style={{ display: 'flex', gap: '12px' }}>
                                <Check color="var(--accent-color)" /> Visibilidad en uniformes y redes
                            </li>
                            <li style={{ display: 'flex', gap: '12px' }}>
                                <Check color="var(--accent-color)" /> Asociación con valores positivos
                            </li>
                            <li style={{ display: 'flex', gap: '12px' }}>
                                <Check color="var(--accent-color)" /> Contenido exclusivo para tu marca
                            </li>
                            <li style={{ display: 'flex', gap: '12px' }}>
                                <Check color="var(--accent-color)" /> Deducibilidad fiscal (según esquema)
                            </li>
                        </ul>
                    </div>

                    <div style={{ background: '#222', padding: '40px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Contáctanos</h3>
                        <SponsorForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SponsorPage;
