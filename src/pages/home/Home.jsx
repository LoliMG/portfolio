import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { socialLinks } from '../../data/socials';
import './Home.css';

const Home = () => {
    const { t } = useLanguage();

    const scrollToAbout = (e) => {
        e.preventDefault();
        const element = document.getElementById('about-me');
        if (element) {
            const offset = 80; // Compensación para el navbar
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const renderCascadingText = (text, startIndex = 0) => {
        let currentIdx = startIndex;
        return text.split(' ').map((word, wordIdx, arr) => {
            const wordChars = word.split('').map((char, charIdx) => (
                <span 
                    key={charIdx} 
                    className="cascade-char" 
                    style={{ '--char-index': currentIdx++ }}
                >
                    {char}
                </span>
            ));
            
            const spaceIdx = currentIdx++;
            
            return (
                <span key={wordIdx} className="word-wrapper">
                    <span className="word-chars">{wordChars}</span>
                    {wordIdx < arr.length - 1 && (
                        <span 
                            className="cascade-char space" 
                            style={{ '--char-index': spaceIdx }}
                        >
                            &nbsp;
                        </span>
                    )}
                </span>
            );
        });
    };

    return (
        <div className="page active home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content" key={t.hero_role}>
                    <h2 className="cascade-container">
                        {renderCascadingText(t.hero_hi)}
                        <span className="accent">
                            {renderCascadingText(t.hero_name, t.hero_hi.length)}
                        </span>
                    </h2>
                    <h1 className="cascade-container">
                        {renderCascadingText(t.hero_role, t.hero_hi.length + t.hero_name.length)}
                    </h1>
                    <p className="cascade-container">
                        {renderCascadingText(t.hero_p, t.hero_hi.length + t.hero_name.length + t.hero_role.length)}
                    </p>
                    <div className="cta-container fade-in">
                        <Link to="/projects" className="btn primary-btn">
                            {t.btn_work}
                        </Link>
                    </div>

                    {/* Tech Slider */}
                    <div className="tech-slider fade-in">
                        <div className="tech-track">
                            {[...Array(2)].map((_, i) => (
                                <React.Fragment key={i}>
                                    <div className="tech-item"><i className="fab fa-react" style={{color: '#61DAFB'}}></i></div>
                                    <div className="tech-item"><i className="fab fa-js" style={{color: '#F7DF1E'}}></i></div>
                                    <div className="tech-item"><i className="fab fa-node-js" style={{color: '#339933'}}></i></div>
                                    <div className="tech-item"><i className="fab fa-html5" style={{color: '#E34F26'}}></i></div>
                                    <div className="tech-item"><i className="fab fa-css3-alt" style={{color: '#1572B6'}}></i></div>
                                    <div className="tech-item"><i className="fas fa-database" style={{color: '#4479A1'}}></i></div>
                                    <div className="tech-item"><i className="fab fa-docker" style={{color: '#2496ED'}}></i></div>
                                    <div className="tech-item"><i className="fab fa-git-alt" style={{color: '#F05032'}}></i></div>
                                    <div className="tech-item"><i className="fab fa-figma" style={{color: '#F24E1E'}}></i></div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    <div className="scroll-down-container fade-in">
                        <div className="scroll-down">
                            <a href="#about-me" onClick={scrollToAbout}>
                                <span>{t.scroll_about}</span>
                                <i className="fas fa-chevron-down"></i>
                            </a>
                        </div>
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
