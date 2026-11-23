import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../../context/LanguageContext';
import './GalleryModal.css';

const GalleryModal = ({ isOpen, closeModal, slides }) => {
    const { t } = useLanguage();
    const [currentSlide, setCurrentSlide] = useState(0);

    const slideCount = slides.length;
    const moveSlide = useCallback((n) => {
        setCurrentSlide((current) => (current + n + slideCount) % slideCount);
    }, [slideCount]);

    // Lock scroll while open. The parent remounts this via `key` to reset the slide.
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Keyboard: Esc closes, arrows change image
    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e) => {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowRight') moveSlide(1);
            if (e.key === 'ArrowLeft') moveSlide(-1);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isOpen, moveSlide, closeModal]);

    if (!isOpen) return null;

    // Portal to <body>: a transformed ancestor (e.g. scroll-reveal sections) would otherwise trap position:fixed
    return createPortal(
        <div className="gallery-overlay" onClick={closeModal} role="dialog" aria-modal="true">
            {/* Navigation Arrows */}
            {slides.length > 1 && (
                <>
                    <button className="gallery-nav prev" aria-label={t.gallery_prev} onClick={(e) => { e.stopPropagation(); moveSlide(-1); }}>
                        <i className="fas fa-chevron-left" aria-hidden="true"></i>
                    </button>
                    <button className="gallery-nav next" aria-label={t.gallery_next} onClick={(e) => { e.stopPropagation(); moveSlide(1); }}>
                        <i className="fas fa-chevron-right" aria-hidden="true"></i>
                    </button>
                </>
            )}

            {/* Main Content */}
            <div className="gallery-content" onClick={(e) => e.stopPropagation()}>
                <img
                    src={slides[currentSlide]}
                    alt={`${t.gallery_img} ${currentSlide + 1} / ${slides.length}`}
                    className="gallery-image"
                />

                {/* Close Button - Moved after image to ensure it's on top */}
                <button className="gallery-close" onClick={closeModal} aria-label={t.gallery_close} autoFocus>
                    <i className="fas fa-times" style={{ pointerEvents: 'none' }} aria-hidden="true"></i>
                </button>

                {/* Counter / Dots */}
                {slides.length > 1 && (
                    <div className="gallery-footer">
                        <span className="gallery-counter">{currentSlide + 1} / {slides.length}</span>
                        <div className="gallery-dots">
                            {slides.map((_, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    className={`gallery-dot ${currentSlide === i ? 'active' : ''}`}
                                    onClick={() => setCurrentSlide(i)}
                                    aria-label={`${t.gallery_img} ${i + 1}`}
                                    aria-current={currentSlide === i}
                                ></button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>,
        document.body
    );
};

export default GalleryModal;
