import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import GlassCard from '../../components/GlassCard/GlassCard';
import ProjectButton from '../../components/ProjectButton/ProjectButton';
import GalleryModal from '../../components/GalleryModal/GalleryModal';
import { getProjectsData } from '../../data/projects';
import './Projects.css';

const Projects = () => {
    const { t } = useLanguage();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalSlides, setModalSlides] = useState([]);

    const openModal = (projectSlides) => {
        setModalSlides(projectSlides);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalSlides([]);
        document.body.style.overflow = 'auto';
    };

    const projects = getProjectsData(t, openModal);

    return (
        <div className="page active">
            <div className="container">
                <h2 className="section-title">{t.projects_title}</h2>
                <div className="projects-grid">
                    {projects.map((proj, i) => (
                        <GlassCard key={i} className="project-card" variant="zoom">
                            <div className="project-info">
                                <h3>{proj.title}</h3>
                                <p>{proj.desc}</p>
                                <div className="tags">
                                    {proj.tags.map((tag, j) => <span key={j}>{tag}</span>)}
                                </div>
                                <div className="project-links">
                                    {proj.links.map((link, k) => (
                                        <ProjectButton 
                                            key={k} 
                                            type={link.type} 
                                            url={link.url} 
                                            onClick={link.action}
                                            label={link.label}
                                        />
                                    ))}
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>

            <GalleryModal 
                isOpen={isModalOpen} 
                closeModal={closeModal} 
                slides={modalSlides} 
            />
        </div>
    );
};

export default Projects;
