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
        { name: 'Proyecto', path: isHome ? '#project' : '/#project' },
        { name: 'Historia', path: isHome ? '#story' : '/#story' },
        { name: 'Roadmap', path: isHome ? '#roadmap' : '/#roadmap' },
        { name: 'Impacto', path: isHome ? '#impact' : '/#impact' },
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
                        <a
                            key={link.name}
                            href={link.path}
                            className="nav-link"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Link to="/apoyar" className="btn btn-primary">
                        Apoyar Proyecto
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
                        <a
                            key={link.name}
                            href={link.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="mobile-nav-link"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Link
                        to="/apoyar"
                        className="btn btn-primary"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{ padding: '15px 30px', fontSize: '1.2rem' }}
                    >
                        Apoyar Proyecto
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
