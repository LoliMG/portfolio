import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import GlassCard from '../../components/GlassCard/GlassCard';
import ProjectButton from '../../components/ProjectButton/ProjectButton';
import GalleryModal from '../../components/GalleryModal/GalleryModal';
import { getProjectsData } from '../../data/projects';
import './Projects.css';

const ProjectCard = ({ proj }) => {
    return (
        <GlassCard className="project-card" variant="zoom">
            {proj.cover && (
                <div className="project-image">
                    {proj.badge && (
                        <span className={`project-status-badge ${proj.isLive ? 'is-live' : ''}`}>
                            {proj.badge}
                        </span>
                    )}
                    <img src={proj.cover} alt={proj.title} loading="lazy" />
                </div>
            )}
            <div className="project-info">
                <h3>{proj.title}</h3>
                <p>
                    {proj.desc}
                </p>
                <div className="tags">
                    {proj.tags.map((tag, j) => <span key={j}>{tag}</span>)}
                </div>
                {proj.note && (
                    <p className="project-note"><i className="fas fa-lock" aria-hidden="true"></i> {proj.note}</p>
                )}
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
    );
};

const Projects = () => {
    const { t } = useLanguage();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalSlides, setModalSlides] = useState([]);

    const openModal = (projectSlides) => {
        setModalSlides(projectSlides);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalSlides([]);
    };

    const projects = getProjectsData(t, openModal);

    return (
        <section id="projects" className="section-block reveal-on-scroll">
            <div className="container">
                <h2 className="section-title">{t.projects_title}</h2>
                <div className="projects-grid">
                    {projects.map((proj, i) => (
                        <ProjectCard key={i} proj={proj} />
                    ))}
                </div>
            </div>

            <GalleryModal
                key={modalSlides[0] ?? 'closed'}
                isOpen={isModalOpen}
                closeModal={closeModal}
                slides={modalSlides}
            />
        </section>
    );
};

export default Projects;
