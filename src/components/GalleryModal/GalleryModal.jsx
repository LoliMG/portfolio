import React, { useState } from 'react';

const GalleryModal = ({ isOpen, closeModal, slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    if (!isOpen) return null;

    const moveSlide = (n) => {
        let newSlide = currentSlide + n;
        if (newSlide >= slides.length) newSlide = 0;
        if (newSlide < 0) newSlide = slides.length - 1;
        setCurrentSlide(newSlide);
    };

    const handleBackdropClick = (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal();
        }
    };

    return (
        <div className="modal" style={{ display: 'flex' }} onClick={handleBackdropClick}>
            <span className="close-modal" onClick={closeModal}>&times;</span>
            <div className="modal-content">
                <div className="carousel-container">
                    <div className="carousel-slide" style={{ display: 'block' }}>
                        <img src={slides[currentSlide]} alt={`Slide ${currentSlide}`} className="carousel-img" />
                    </div>
                    <button className="carousel-prev" onClick={(e) => { e.stopPropagation(); moveSlide(-1); }}>&#10094;</button>
                    <button className="carousel-next" onClick={(e) => { e.stopPropagation(); moveSlide(1); }}>&#10095;</button>
                </div>
                <div className="carousel-dots">
                    {slides.map((_, i) => (
                        <span key={i} className={`dot ${currentSlide === i ? 'active' : ''}`} 
                                onClick={(e) => { e.stopPropagation(); setCurrentSlide(i); }}></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GalleryModal;
