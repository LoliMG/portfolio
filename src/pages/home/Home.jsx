import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { socialLinks } from '../../data/socials';
import './Home.css';

const Home = () => {
    const { t } = useLanguage();

    const scrollToAbout = (e) => {
        e.preventDefault();
        const target = document.getElementById('about-me');
        if (!target) return;

        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;
        const duration = 1500; // Aún más lento y cinemático

        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        const ease = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animation);
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

    const techLogos = [
        { icon: 'fa-react', fab: true, color: '#61DAFB', name: 'React' },
        { icon: 'fa-js', fab: true, color: '#F7DF1E', name: 'JS' },
        { icon: 'fa-node-js', fab: true, color: '#339933', name: 'Node.js' },
        { icon: 'fa-html5', fab: true, color: '#E34F26', name: 'HTML5' },
        { icon: 'fa-css3-alt', fab: true, color: '#1572B6', name: 'CSS3' },
        { icon: 'fa-database', fab: false, color: '#4479A1', name: 'SQL' },
        { icon: 'fa-docker', fab: true, color: '#2496ED', name: 'Docker' },
        { icon: 'fa-git-alt', fab: true, color: '#F05032', name: 'Git' },
        { icon: 'fa-figma', fab: true, color: '#F24E1E', name: 'Figma' }
    ];

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
                            {[...techLogos, ...techLogos].map((tech, i) => (
                                <div key={i} className="tech-item">
                                    <i className={`${tech.fab ? 'fab' : 'fas'} ${tech.icon}`} style={{ color: tech.color }}></i>
                                    <span className="tech-name">{tech.name}</span>
                                </div>
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
