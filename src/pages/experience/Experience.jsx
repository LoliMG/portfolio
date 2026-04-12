import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import GlassCard from '../../components/GlassCard/GlassCard';
import { getExperienceData } from '../../data/experience';
import { getEducationData } from '../../data/education';
import './Experience.css';

const Experience = () => {
    const { t } = useLanguage();
    const experienceItems = getExperienceData(t);
    const educationItems = getEducationData(t);

    return (
        <div className="page active">
            <div className="container">
                <h2 className="section-title">{t.exp_title}</h2>
                <div className="timeline">
                    {experienceItems.map((item, index) => (
                        <div key={index} className="timeline-item">
                            <GlassCard className="timeline-content" variant="slide">
                                <span>{item.date}</span>
                                <h3>{item.title}</h3>
                                <h4>{item.company}</h4>
                                <p>{item.desc}</p>
                            </GlassCard>
                        </div>
                    ))}
                </div>

                <h2 className="section-title" style={{ marginTop: '4rem' }}>{t.edu_title}</h2>
                <div className="education-list">
                    {educationItems.map((item, index) => (
                        <GlassCard key={index} className="education-card" variant="small">
                            <div className="edu-icon"><i className={`fas ${item.icon}`}></i></div>
                            <div className="edu-info">
                                <h3>{item.title} ({item.year})</h3>
                                <p>{item.school}</p>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
