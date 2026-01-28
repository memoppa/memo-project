import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Proyecto', path: '/proyecto' },
        { name: 'Camino', path: '/camino' },
        { name: 'Atleta', path: '/atleta' },
        { name: 'Resultados', path: '/resultados' },
    ];

    console.log('Mobile Menu Open:', mobileMenuOpen); // Debugging

    return (
        <nav className={`navbar ${isScrolled || !isHome || mobileMenuOpen ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="logo-link">
                    MEMO <span className="logo-accent">PROJECT</span>
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="nav-link"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/impulsar" className="btn btn-primary">
                        Impulsar
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="mobile-nav-link"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/impulsar"
                        className="btn btn-primary"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{ padding: '15px 30px', fontSize: '1.2rem' }}
                    >
                        Impulsar
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
