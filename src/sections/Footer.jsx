import React, { useState } from 'react';
import { Instagram, Mail, Twitter, X } from 'lucide-react';
import ContactForm from '../components/forms/ContactForm';

const Footer = () => {
    const [showContact, setShowContact] = useState(false);

    return (
        <>
            {showContact && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                    background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(5px)',
                    zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '20px'
                }} onClick={() => setShowContact(false)}>
                    <div style={{
                        background: '#1a1a1a', padding: '30px', borderRadius: '12px',
                        width: '100%', maxWidth: '500px', position: 'relative',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }} onClick={e => e.stopPropagation()}>
                        <button
                            onClick={() => setShowContact(false)}
                            style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', color: '#666', cursor: 'pointer' }}
                        >
                            <X />
                        </button>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Contacto General</h3>
                        <ContactForm />
                    </div>
                </div>
            )}
            <footer style={{
                background: '#000',
                padding: '60px 0 30px',
                borderTop: '1px solid rgba(255,255,255,0.1)'
            }}>
                <div className="container">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '20px',
                        marginBottom: '40px'
                    }}>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, fontFamily: 'var(--font-header)', letterSpacing: '-0.02em', marginBottom: '8px' }}>
                                MEMO <span style={{ color: 'var(--accent-color)' }}>PROJECT</span>
                            </h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                Enfoque. Disciplina. Resultados.
                            </p>
                        </div>

                        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                            <a href="#" style={{ color: 'var(--text-secondary)' }}><Instagram className="hover-accent" /></a>
                            <a href="#" style={{ color: 'var(--text-secondary)' }}><Twitter className="hover-accent" /></a>
                            <button
                                onClick={() => setShowContact(true)}
                                className="btn btn-sm btn-outline"
                                style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px' }}
                            >
                                <Mail size={16} /> Contacto
                            </button>
                        </div>
                    </div>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        borderTop: '1px solid rgba(255,255,255,0.05)',
                        paddingTop: '30px',
                        fontSize: '0.85rem',
                        color: '#444'
                    }}>
                        <p>© 2024 Memo Project. Todos los derechos reservados.</p>
                        <p>Diseñado para el Alto Rendimiento.</p>
                    </div>
                </div>
                <style>{`
            .hover-accent:hover { color: var(--accent-color) !important; }
          `}</style>
            </footer>
        </>
    );
};

export default Footer;
