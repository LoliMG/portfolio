import React, { useEffect } from 'react';
import './Sparkles.css';

const Sparkles = () => {
    useEffect(() => {
        const createSparkle = (x, y) => {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            sparkle.style.left = `${x}px`;
            sparkle.style.top = `${y}px`;
            const dx = (Math.random() - 0.5) * 100;
            const dy = (Math.random() - 0.5) * 100;
            sparkle.style.setProperty('--dx', `${dx}px`);
            sparkle.style.setProperty('--dy', `${dy}px`);
            const size = Math.random() * 5 + 2;
            sparkle.style.width = `${size}px`;
            sparkle.style.height = `${size}px`;
            document.body.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 800);
        };

        const handleMouseMove = (e) => {
            if (Math.random() > 0.15) {
                createSparkle(e.clientX, e.clientY);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return null;
};

export default Sparkles;
