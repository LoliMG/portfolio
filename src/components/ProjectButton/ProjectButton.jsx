import React from 'react';
import './ProjectButton.css';

const ProjectButton = ({ type, url, onClick, children, label }) => {
    const isGitHub = type === 'github';
    
    // Si tiene onClick es un botón galería, si tiene url es un link (App o GitHub)
    if (onClick) {
        return (
            <button className="btn-project btn-primary-glass" onClick={onClick}>
                <i className="fas fa-images"></i> {children || label}
            </button>
        );
    }

    return (
        <a href={url} target="_blank" rel="noopener noreferrer" 
           className={`btn-project ${isGitHub ? 'btn-github' : 'btn-primary-glass'}`}>
            <i className={`fa${isGitHub ? 'b fa-github' : 's fa-rocket'}`}></i>
            {children || label || (isGitHub ? 'GitHub' : 'App')}
        </a>
    );
};

export default ProjectButton;
