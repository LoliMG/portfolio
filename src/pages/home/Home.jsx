import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { socialLinks } from '../../data/socials';
import './Home.css';

const Home = () => {
    const { t } = useLanguage();

    return (
        <div className="page active home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h2 className="fade-in">
                        {t.hero_hi}
                        <span className="accent">{t.hero_name}</span>
                    </h2>
                    <h1 className="fade-in">{t.hero_role}</h1>
                    <p className="fade-in">{t.hero_p}</p>
                    <div className="cta-container fade-in">
                        <Link to="/projects" className="btn primary-btn">
                            {t.btn_work}
                        </Link>
                    </div>

                    <div className="scroll-down">
                        <a href="#about-me">
                            <span>{t.scroll_about}</span>
                            <i className="fas fa-chevron-down"></i>
                        </a>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about-me" className="about-section">
                <div className="container">
                    <h2 className="section-title">{t.about_title}</h2>
                    <div className="about-grid">
                        <div className="about-image">
                            <img src="/assets/avatar.jpeg" alt="Loli Mariscal" />
                        </div>
                        <div className="about-text">
                            <p>{t.about_p1}</p>
                            <p>{t.about_p2}</p>

                            <div className="about-contact">
                                {socialLinks.map((link, index) => (
                                    <a 
                                        key={index} 
                                        href={link.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="contact-item"
                                    >
                                        <i className={link.icon}></i>
                                        <span>{link.url.replace('mailto:', '').replace('https://', '')}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
