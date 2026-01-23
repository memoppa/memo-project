import React from 'react';
import { Helmet } from 'react-helmet-async';
import NewsletterForm from '../components/forms/NewsletterForm';

const UpdatesPage = () => {
    return (
        <div className="section-padding container" style={{ paddingTop: '120px', minHeight: '80vh' }}>
            <Helmet>
                <title>Updates | Memo Project</title>
                <meta name="description" content="Noticias y resultados recientes de Memo Pérez." />
            </Helmet>

            <h1 style={{ fontSize: '3rem', marginBottom: '40px' }}>Updates & Noticias</h1>
            <div style={{ maxWidth: '600px', margin: '0 auto 40px' }}>
                <div style={{ background: '#222', p: '30px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.1)', padding: '30px' }}>
                    <h3 style={{ marginBottom: '16px' }}>Únete a la comunidad</h3>
                    <NewsletterForm />
                </div>
            </div>
        </div>
    );
};

export default UpdatesPage;
