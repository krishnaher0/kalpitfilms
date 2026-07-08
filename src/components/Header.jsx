import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleGalleryClick = (tab) => {
    window.dispatchEvent(new CustomEvent('set-gallery-tab', { detail: tab }));
    scrollToSection('gallery');
  };

  return (
    <header className={`header-v2 glassmorphism ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container-v2">
        
        {/* Left Side: Navigation Links */}
        <nav className={`nav-menu-left-v2 ${isOpen ? 'active' : ''}`}>
          <a onClick={() => scrollToSection('home')} className="gold-link">Home</a>
          <div className="dropdown-container-v2">
            <span className="gold-link dropdown-trigger-v2">Gallery <span className="arrow-down-v2">&#9662;</span></span>
            <div className="dropdown-menu-v2">
              <a onClick={() => handleGalleryClick('bts')} className="dropdown-item-v2">Behind the scenes</a>
              <a onClick={() => handleGalleryClick('pictures')} className="dropdown-item-v2">Pictures</a>
              <a onClick={() => scrollToSection('poems')} className="dropdown-item-v2">Poems</a>
            </div>
          </div>
          <a onClick={() => scrollToSection('about')} className="gold-link">About US</a>
          <a onClick={() => scrollToSection('contact')} className="gold-link">Contact us</a>
        </nav>

        {/* Center: Cursive Brand Logo */}
        <div className="logo-center-v2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="logo-cursive-v2">𝓚𝓪𝓵𝓹𝓲𝓽 𝓕𝓲𝓵𝓶𝓼</span>
        </div>

        {/* Right Side: Social Links & Theme Toggle */}
        <div className="social-menu-right-v2">
          <button className="theme-toggle-btn-v2" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'light' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="theme-toggle-svg-v2">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="theme-toggle-svg-v2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          <a href="https://facebook.com/kalpitfilms" target="_blank" rel="noopener noreferrer" className="social-icon-v2" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor" className="social-svg-v2">
              <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h3V1h-4c-3.3 0-5 1.7-5 5v2z"/>
            </svg>
          </a>
          <a href="https://instagram.com/kalpitfilms" target="_blank" rel="noopener noreferrer" className="social-icon-v2" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="social-svg-stroke-v2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          <a href="https://youtube.com/kalpitfilms" target="_blank" rel="noopener noreferrer" className="social-icon-v2" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="currentColor" className="social-svg-v2">
              <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.52 3.5 12 3.5 12 3.5s-7.52 0-9.388.553a3.003 3.003 0 0 0-2.11 2.11C0 8.03 0 12 0 12s0 3.97.553 5.837a3.003 3.003 0 0 0 2.11 2.11c1.867.553 9.388.553 9.388.553s7.52 0 9.388-.553a3.002 3.002 0 0 0 2.11-2.11C24 15.97 24 12 24 12s0-3.97-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>

        {/* Mobile Hamburger toggle */}
        <button className={`hamburger-v2 ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

      </div>
    </header>
  );
}
