import React from 'react';
import { socialLinks } from '../../data/socials';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="social-links">
                    {socialLinks.map((link, index) => (
                        <a 
                            key={index} 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <i className={link.icon}></i>
                        </a>
                    ))}
                </div>
                <p>&copy; {new Date().getFullYear()} Loli Mariscal. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
