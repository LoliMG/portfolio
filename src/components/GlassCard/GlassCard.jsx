import React from 'react';
import './GlassCard.css';

const GlassCard = ({ children, className = '', variant = 'zoom' }) => {
    return (
        <div className={`glass-card variant-${variant} ${className}`}>
            {children}
        </div>
    );
};

export default GlassCard;
