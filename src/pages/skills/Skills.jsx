import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import GlassCard from '../../components/GlassCard/GlassCard';
import { getSkillsData } from '../../data/skills';
import './Skills.css';

const Skills = () => {
    const { t } = useLanguage();
    const skillCategories = getSkillsData(t);

    return (
        <section id="skills" className="section-block reveal-on-scroll">
            <div className="container">
                <h2 className="section-title">{t.skills_title}</h2>
                <div className="skills-bento-grid">
                    {skillCategories.map((cat) => (
                        <GlassCard 
                            key={cat.id} 
                            className={`bento-skill-card ${cat.isSpecial ? 'card-special' : ''}`} 
                            variant="none"
                        >
                            <div className="bento-card-header">
                                <div className="bento-title-group">
                                    <div className="bento-icon-wrapper">
                                        <i className={`fas ${cat.icon}`}></i>
                                    </div>
                                    <h3>{cat.title}</h3>
                                </div>
                                {cat.badge && <span className="bento-badge">{cat.badge}</span>}
                            </div>

                            <div className="bento-skills-list">
                                {cat.skills.map((skill, j) => {
                                    if (skill.isHighlight) {
                                        return (
                                            <div key={j} className="skill-chip-highlight">
                                                <div className="chip-icon-box" style={{ color: skill.color }}>
                                                    <i className={`fas ${skill.icon}`}></i>
                                                </div>
                                                <div className="chip-content">
                                                    <span className="chip-title">{skill.name}</span>
                                                    {skill.subtitle && <span className="chip-subtitle">{skill.subtitle}</span>}
                                                </div>
                                            </div>
                                        );
                                    }

                                    if (skill.isLang) {
                                        return (
                                            <div key={j} className="skill-chip-lang">
                                                <div className="lang-info">
                                                    <i className={`fas ${skill.icon}`} style={{ color: skill.color }}></i>
                                                    <span className="lang-name">{skill.name}</span>
                                                </div>
                                                <span className="lang-level-badge">{skill.level}</span>
                                            </div>
                                        );
                                    }

                                    return (
                                        <div key={j} className="skill-chip">
                                            <i 
                                                className={`${skill.fab ? 'fab' : 'fas'} ${skill.icon}`} 
                                                style={{ color: skill.color }}
                                            ></i>
                                            <span className="chip-name">{skill.name}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
