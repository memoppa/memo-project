import React from 'react';
import { Helmet } from 'react-helmet-async';
import Support from '../sections/Support';

const SupportPage = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <Helmet>
                <title>Apoyar | Memo Project</title>
                <meta name="description" content="Impulsa el sueño olímpico. Conviértete en parte del equipo Memo Project." />
            </Helmet>

            {/* Reuse the Support Section but perhaps with a different header intro if needed */}
            {/* For Phase 1, re-using the section is efficient */}
            <Support />

            <div className="container" style={{ textAlign: 'center', paddingBottom: '80px' }}>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                    * Los pagos son procesados de forma segura vía Stripe. Puedes cancelar tu suscripción mensual en cualquier momento.
                </p>
            </div>
        </div>
    );
};

export default SupportPage;
