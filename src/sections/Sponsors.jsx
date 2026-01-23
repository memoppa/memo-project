import React from 'react';
import { Plus } from 'lucide-react';
import sponsorsData from '../content/sponsors.json';
import { Link } from 'react-router-dom';

const Sponsors = () => {
    return (
        <section id="sponsors" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '40px', opacity: 0.8 }}>Alianzas Estratégicas</h2>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '40px',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    marginBottom: '60px'
                }}>
                    {/* Active Sponsors */}
                    {sponsorsData.filter(s => s.active).map((sponsor) => (
                        <div key={sponsor.id} style={{
                            width: '160px',
                            height: '80px',
                            background: 'rgba(255,255,255,0.03)',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff'
                        }}>
                            {sponsor.logo ? <img src={sponsor.logo} alt={sponsor.name} /> : sponsor.name}
                        </div>
                    ))}

                    {/* Placeholder/CTA for new sponsors */}
                    <Link to="/patrocinar" style={{ textDecoration: 'none' }}>
                        <div style={{
                            width: '160px',
                            height: '80px',
                            border: '2px dashed rgba(255,255,255,0.1)',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--text-secondary)',
                            cursor: 'pointer',
                            gap: '8px',
                            transition: 'all 0.2s ease'
                        }}
                            className="sponsor-cta"
                        >
                            <Plus size={20} /> Tu Marca
                        </div>
                    </Link>
                </div>
            </div>
            <style>{`
        .sponsor-cta:hover {
            border-color: var(--accent-color) !important;
            color: var(--accent-color) !important;
        }
      `}</style>
        </section>
    );
};

export default Sponsors;
