import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import GlassCard from '../../components/GlassCard/GlassCard';
import './NotFoundError.css';

const NotFoundError = () => {
    const { t } = useLanguage();

    return (
        <div className="page active error-page">
            <div className="container">
                <GlassCard className="error-card" variant="zoom">
                    <h1 className="error-code">404</h1>
                    <h2 className="error-title">{t.error_title || 'Ups! Página no encontrada'}</h2>
                    <p className="error-text">
                        {t.error_p || 'Parece que el enlace que buscas no existe o ha sido movido.'}
                    </p>
                    <Link to="/" className="btn primary-btn error-btn">
                        {t.nav_home || 'Volver al Inicio'}
                    </Link>
                </GlassCard>
            </div>
        </div>
    );
};

export default NotFoundError;
