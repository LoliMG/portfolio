import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import GlassCard from '../../components/GlassCard/GlassCard';
import ProjectButton from '../../components/ProjectButton/ProjectButton';
import GalleryModal from '../../components/GalleryModal/GalleryModal';
import { getProjectsData } from '../../data/projects';
import './Projects.css';

const ProjectCard = ({ proj, t }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const isLongText = proj.desc && proj.desc.length > 90;

    return (
        <GlassCard className="project-card" variant="zoom">
            {proj.cover && (
                <div className="project-image">
                    <img src={proj.cover} alt={proj.title} />
                </div>
            )}
            <div className="project-info">
                <h3>{proj.title}</h3>
                <p className={isExpanded ? 'expanded' : ''}>
                    {proj.desc}
                </p>
                {isLongText && (
                    <button
                        type="button"
                        className="btn-expand-desc"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? (t.read_less || 'Ver menos') : (t.read_more || 'Ver más')}
                    </button>
                )}
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
    );
};

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
                        <ProjectCard key={i} proj={proj} t={t} />
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
