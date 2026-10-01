import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { socialLinks } from '../../data/socials';
import Projects from '../projects/Projects';
import Experience from '../experience/Experience';
import Education from '../education/Education';
import Skills from '../skills/Skills';
import './Home.css';

const Home = ({ autoScrollTo }) => {
    const { t } = useLanguage();
    const [toastMessage, setToastMessage] = useState(null);

    useEffect(() => {
        if (autoScrollTo) {
            const target = document.getElementById(autoScrollTo);
            if (target) {
                setTimeout(() => {
                    const offset = 80;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = target.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }, 100);
            }
        }
    }, [autoScrollTo]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        const targets = document.querySelectorAll('.reveal-on-scroll');
        targets.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id) => {
        const target = document.getElementById(id);
        if (!target) return;

        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };

    const handleCopyEmail = (email) => {
        navigator.clipboard.writeText(email);
        setToastMessage(t.email_copied);
        setTimeout(() => {
            setToastMessage(null);
        }, 3000);
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
        { icon: 'fa-brain', fab: false, color: '#a855f7', name: 'AI Dev' },
        { icon: 'fa-git-alt', fab: true, color: '#F05032', name: 'Git' },
        { icon: 'fa-figma', fab: true, color: '#F24E1E', name: 'Figma' }
    ];

    const heroName = "Loli Mariscal";
    const heroRole = "Fullstack Web Developer";

    return (
        <div className="page active home-page">
            {/* Toast Notification */}
            {toastMessage && (
                <div className="toast-notification">
                    <i className="fas fa-check-circle"></i>
                    <span>{toastMessage}</span>
                </div>
            )}

            {/* Hero Section */}
            <section id="hero" className="hero">
                <div className="hero-content" key={heroRole}>
                    <div className="status-badge fade-in">
                        <span className="status-dot"></span>
                        <span>{t.status_available}</span>
                    </div>

                    <h2 className="cascade-container">
                        {renderCascadingText(t.hero_hi)}
                        <span className="accent">
                            {renderCascadingText(heroName, t.hero_hi.length)}
                        </span>
                    </h2>
                    <h1 className="cascade-container">
                        {renderCascadingText(heroRole, t.hero_hi.length + heroName.length)}
                    </h1>
                    <p className="cascade-container">
                        {renderCascadingText(t.hero_p, t.hero_hi.length + heroName.length + heroRole.length)}
                    </p>

                    <div className="cta-container fade-in">
                        <a 
                            href="#projects" 
                            onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} 
                            className="btn primary-btn"
                        >
                            {t.btn_work}
                        </a>
                        <a 
                            href={t.cv_file} 
                            download 
                            className="btn cv-btn" 
                            title="Descargar Curriculum Vitae"
                        >
                            <i className="fas fa-file-download"></i> {t.btn_cv}
                        </a>
                        <a href="https://github.com/LoliMG" target="_blank" rel="noopener noreferrer" className="btn secondary-btn">
                            <i className="fab fa-github"></i> GitHub
                        </a>
                    </div>

                    {/* Recruiter Quick Highlights */}
                    <div className="recruiter-highlights fade-in">
                        <div className="highlight-card">
                            <i className="fas fa-layer-group"></i>
                            <div className="highlight-text">
                                <strong>{t.stat_stack_title}</strong>
                                <span>{t.stat_stack_desc}</span>
                            </div>
                        </div>
                        <div className="highlight-card">
                            <i className="fas fa-brain"></i>
                            <div className="highlight-text">
                                <strong>{t.stat_ai_title}</strong>
                                <span>{t.stat_ai_desc}</span>
                            </div>
                        </div>
                        <div className="highlight-card">
                            <i className="fas fa-bullseye"></i>
                            <div className="highlight-text">
                                <strong>{t.stat_soft_title}</strong>
                                <span>{t.stat_soft_desc}</span>
                            </div>
                        </div>
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
                            <a href="#about-me" onClick={(e) => { e.preventDefault(); scrollToSection('about-me'); }}>
                                <span>{t.scroll_about}</span>
                                <i className="fas fa-chevron-down"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="section-divider"></div>

            {/* About Section */}
            <section id="about-me" className="about-section section-block reveal-on-scroll">
                <div className="container">
                    <h2 className="section-title">{t.about_title}</h2>
                    <div className="about-grid">
                        <div className="about-image">
                            <img src="/assets/avatar.jpeg" alt="Loli Mariscal" />
                        </div>
                        <div className="about-text">
                            <p>{t.about_p1}</p>
                            <p>{t.about_p2}</p>

                            <div className="about-actions">
                                <a 
                                    href={t.cv_file} 
                                    download 
                                    className="btn cv-btn"
                                >
                                    <i className="fas fa-file-download"></i> {t.btn_cv}
                                </a>
                            </div>

                            <div className="about-contact">
                                {socialLinks.map((link, index) => {
                                    const isEmail = link.url.startsWith('mailto:');
                                    const emailAddress = link.url.replace('mailto:', '');
                                    return (
                                        <div key={index} className="contact-item-row">
                                            <a 
                                                href={link.url} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="contact-item"
                                            >
                                                <i className={link.icon}></i>
                                                <span>{link.url.replace('mailto:', '').replace('https://', '')}</span>
                                            </a>
                                            {isEmail && (
                                                <button 
                                                    className="copy-icon-btn"
                                                    onClick={() => handleCopyEmail(emailAddress)}
                                                    title={t.btn_copy_email}
                                                >
                                                    <i className="fas fa-copy"></i>
                                                </button>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="section-divider"></div>

            {/* Projects Section */}
            <Projects />

            <div className="section-divider"></div>

            {/* Experience Section */}
            <Experience />

            <div className="section-divider"></div>

            {/* Education Section */}
            <Education />

            <div className="section-divider"></div>

            {/* Skills Section */}
            <Skills />
        </div>
    );
};

export default Home;
