import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { getNavigationData } from '../../data/navigation';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t, toggleLang } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const navLinks = getNavigationData(t);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <Link to="/" className="logo">Loli<span>Mariscal</span></Link>
                
                <ul className={`nav-links ${isMenuOpen ? 'nav-active' : ''}`}>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink to={link.path} onClick={() => setIsMenuOpen(false)}>
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                    <li className="nav-actions">
                        <button className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
                            <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
                        </button>
                        <button className="lang-toggle" onClick={toggleLang}>
                            <i className="fas fa-globe"></i>
                            <span>{t.lang_label}</span>
                        </button>
                    </li>
                </ul>

                <div className={`burger ${isMenuOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
