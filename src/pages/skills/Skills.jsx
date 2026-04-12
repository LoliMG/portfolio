import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import GlassCard from '../../components/GlassCard/GlassCard';
import { getSkillsData } from '../../data/skills';
import './Skills.css';

const Skills = () => {
    const { t } = useLanguage();
    const skillCategories = getSkillsData(t);

    return (
        <div className="page active">
            <div className="container">
                <h2 className="section-title">{t.skills_title}</h2>
                <div className="skills-container">
                    {skillCategories.map((cat, i) => (
                        <GlassCard key={i} className="skill-category" variant="zoom">
                            <h3><i className={`fas ${cat.icon}`}></i> {cat.title}</h3>
                            <div className="skill-list">
                                {cat.skills.map((skill, j) => (
                                    <div key={j} className="skill-item">
                                        <i className={`${skill.fab ? 'fab' : 'fas'} ${skill.icon}`}></i>
                                        {skill.name}
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
