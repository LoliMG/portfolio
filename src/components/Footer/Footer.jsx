import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { socialLinks } from '../../data/socials';
import './Footer.css';

const Footer = () => {
    const { t } = useLanguage();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <button 
                    onClick={scrollToTop} 
                    className="back-to-top-btn" 
                    title={t.footer_back_to_top}
                    aria-label={t.footer_back_to_top}
                >
                    <i className="fas fa-arrow-up"></i>
                    <span>{t.footer_back_to_top}</span>
                </button>

                <div className="social-links">
                    {socialLinks.map((link, index) => (
                        <a 
                            key={index} 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Social Link"
                        >
                            <i className={link.icon}></i>
                        </a>
                    ))}
                </div>

                <div className="footer-details">
                    <p className="footer-tech-note">
                        <i className="fas fa-code"></i> {t.footer_tech_note}
                    </p>
                    <p className="footer-copy">
                        &copy; {new Date().getFullYear()} Loli Mariscal. {t.footer_copy_text}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
