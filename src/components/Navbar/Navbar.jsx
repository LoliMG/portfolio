import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { getNavigationData } from '../../data/navigation';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const { t, toggleLang } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const navLinks = getNavigationData(t);

    useEffect(() => {
        let ticking = false;

        const updateScrollSpy = () => {
            setIsScrolled(window.scrollY > 40);

            // Si llegamos casi al final de la página, activa la última sección ('skills')
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
                setActiveSection('skills');
                return;
            }

            const headerOffset = 180;
            const sectionIds = ['hero', 'projects', 'experience', 'education', 'skills'];
            let current = 'hero';

            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= headerOffset) {
                        current = id;
                    }
                }
            }

            setActiveSection(current);
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateScrollSpy();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        updateScrollSpy();

        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            window.removeEventListener('scroll', onScroll);
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const scrollToSection = (id) => {
        setIsMenuOpen(false);
        if (id === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        // .section-block has scroll-margin-top for the fixed navbar
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <a
                    href="#hero"
                    className="logo"
                    onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
                >
                    Loli<span>Mariscal</span>
                </a>

                <ul className={`nav-links ${isMenuOpen ? 'nav-active' : ''}`}>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a
                                href={`#${link.id}`}
                                className={activeSection === link.id ? 'active' : ''}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link.id);
                                }}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li className="nav-actions">
                        <button className="theme-toggle" onClick={toggleTheme} title={t.aria_theme} aria-label={t.aria_theme}>
                            <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
                        </button>
                        <button className="lang-toggle" onClick={toggleLang}>
                            <i className="fas fa-globe"></i>
                            <span>{t.lang_label}</span>
                        </button>
                    </li>
                </ul>

                <button
                    type="button"
                    className={`burger ${isMenuOpen ? 'toggle' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={t.aria_menu}
                    aria-expanded={isMenuOpen}
                >
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
