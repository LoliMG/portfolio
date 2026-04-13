import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import GlassCard from '../../components/GlassCard/GlassCard';
import { getExperienceData } from '../../data/experience';
import './Experience.css';

const Experience = () => {
    const { t } = useLanguage();
    const experienceItems = getExperienceData(t);

    return (
        <div className="page active">
            <div className="container">
                <h2 className="section-title">{t.exp_title}</h2>
                <div className="timeline">
                    {experienceItems.map((item, index) => (
                        <div key={index} className="timeline-item">
                            <GlassCard className="timeline-content">
                                <div className="exp-icon">
                                    <i className="fas fa-briefcase"></i>
                                </div>
                                <div className="exp-info">
                                    <h3>{item.title}</h3>
                                    <h4>{item.company}</h4>
                                    <p>{item.desc}</p>
                                </div>
                                <div className="exp-date-box">
                                    <span className="exp-date-label">{item.date}</span>
                                </div>
                            </GlassCard>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
