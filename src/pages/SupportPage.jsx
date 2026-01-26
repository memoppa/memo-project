import React from 'react';
import { Helmet } from 'react-helmet-async';
import Support from '../sections/Support';
import NewsletterForm from '../components/forms/NewsletterForm';

const SupportPage = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <Helmet>
                <title>Apoyar | Memo Project</title>
                <meta name="description" content="Impulsa el sueño olímpico. Conviértete en parte del equipo Memo Project." />
            </Helmet>

            <Support />

            {/* Join the Team / Newsletter Section */}
            <section className="container" style={{ marginBottom: '80px', maxWidth: '600px' }}>
                <div style={{
                    background: 'var(--bg-card)',
                    padding: '40px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(255,255,255,0.05)'
                }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', textAlign: 'center' }}>Únete al Equipo</h3>
                    <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '30px' }}>
                        Si no puedes apoyar económicamente, tu aliento también cuenta. Únete a la lista para recibir actualizaciones.
                    </p>
                    <NewsletterForm />
                </div>
            </section>

            <div className="container" style={{ textAlign: 'center', paddingBottom: '80px' }}>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '0.85rem' }}>
                    * Los pagos de los planes de apoyo son procesados de forma segura. Puedes cancelar tu suscripción mensual en cualquier momento.
                </p>
            </div>
        </div>
    );
};

export default SupportPage;
