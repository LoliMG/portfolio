import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import GlassCard from '../../components/GlassCard/GlassCard';
import { getEducationData } from '../../data/education';
import './Education.css';

const Education = () => {
    const { t } = useLanguage();
    const educationItems = getEducationData(t);

    return (
        <div className="page active">
            <div className="container">
                <h2 className="section-title">{t.edu_title}</h2>
                <div className="education-list">
                    {educationItems.map((item, index) => (
                        <GlassCard key={index} className="education-card">
                            <div className="edu-icon">
                                <i className={`fas ${item.icon}`}></i>
                            </div>
                            <div className="edu-info">
                                <h3>{item.title}</h3>
                                <p>{item.school}</p>
                            </div>
                            <div className="edu-year-box">
                                <span className="year-label">{item.year}</span>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
