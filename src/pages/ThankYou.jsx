import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
    return (
        <div className="section-padding container" style={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            paddingTop: '100px'
        }}>
            <Helmet>
                <title>¡Gracias! | Memo Project</title>
                <meta name="robots" content="noindex" />
            </Helmet>

            <div style={{ color: 'var(--accent-color)', marginBottom: '20px' }}>
                <CheckCircle size={80} />
            </div>

            <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>¡Mensaje Recibido!</h1>

            <p style={{
                fontSize: '1.25rem',
                color: 'var(--text-secondary)',
                maxWidth: '600px',
                marginBottom: '40px'
            }}>
                Gracias por contactar a Memo Project. Hemos recibido tu información correctamente. Te responderemos personalmente muy pronto.
            </p>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Link to="/" className="btn btn-primary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ArrowLeft size={20} /> Volver al Inicio
                </Link>
                <Link to="/updates" className="btn btn-outline" style={{ textDecoration: 'none' }}>
                    Ver Noticias Recientes
                </Link>
            </div>
        </div>
    );
};

export default ThankYou;
