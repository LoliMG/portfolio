import React, { useState, useEffect } from 'react';
import './GalleryModal.css';

const GalleryModal = ({ isOpen, closeModal, slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Reset current slide when modal opens with new slides
    useEffect(() => {
        if (isOpen) {
            setCurrentSlide(0);
        }
    }, [isOpen, slides]);

    if (!isOpen) return null;

    const moveSlide = (n) => {
        let newSlide = currentSlide + n;
        if (newSlide >= slides.length) newSlide = 0;
        if (newSlide < 0) newSlide = slides.length - 1;
        setCurrentSlide(newSlide);
    };

    return (
        <div className="gallery-overlay" onClick={closeModal}>
            {/* Close Button - Top Right (Standard) */}
            <button className="gallery-close" onClick={closeModal}>
                <i className="fas fa-times"></i>
            </button>

            {/* Navigation Arrows */}
            {slides.length > 1 && (
                <>
                    <button className="gallery-nav prev" onClick={(e) => { e.stopPropagation(); moveSlide(-1); }}>
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button className="gallery-nav next" onClick={(e) => { e.stopPropagation(); moveSlide(1); }}>
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </>
            )}

            {/* Main Content */}
            <div className="gallery-content" onClick={(e) => e.stopPropagation()}>
                <img 
                    src={slides[currentSlide]} 
                    alt={`Project screenshot ${currentSlide + 1}`} 
                    className="gallery-image"
                />
                
                {/* Counter / Dots */}
                {slides.length > 1 && (
                    <div className="gallery-footer">
                        <span className="gallery-counter">{currentSlide + 1} / {slides.length}</span>
                        <div className="gallery-dots">
                            {slides.map((_, i) => (
                                <span 
                                    key={i} 
                                    className={`gallery-dot ${currentSlide === i ? 'active' : ''}`}
                                    onClick={() => setCurrentSlide(i)}
                                ></span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GalleryModal;
