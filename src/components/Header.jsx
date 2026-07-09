import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header({ theme, toggleTheme, setTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [socialStyle, setSocialStyle] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
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

  useEffect(() => {
    const updateSocialPosition = () => {
      const activeContent = document.querySelector('.slider-slide-v2.active .slide-content-container-v2');
      if (activeContent) {
        const rect = activeContent.getBoundingClientRect();
        const top = rect.top + rect.height / 2; // middle of the content
        setSocialStyle({ position: 'fixed', top: `${top}px`, right: '28px', left: 'auto', transform: 'translateY(-50%)' });
      } else {
        // fallback to center-right
        setSocialStyle({ position: 'fixed', top: '50%', right: '28px', left: 'auto', transform: 'translateY(-50%)' });
      }
    };

    // update on slide change, resize and scroll
    window.addEventListener('hero-slide-change', updateSocialPosition);
    window.addEventListener('resize', updateSocialPosition);
    window.addEventListener('scroll', updateSocialPosition);

    // initial position
    updateSocialPosition();

    return () => {
      window.removeEventListener('hero-slide-change', updateSocialPosition);
      window.removeEventListener('resize', updateSocialPosition);
      window.removeEventListener('scroll', updateSocialPosition);
    };
  }, []);

  return (
    <header className={`header-v2 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container-v2">

        <nav className="nav-menu-left-v2">
          <div className="nav-home-trigger-v2">
            <button className="home-icon-btn-v2" onClick={() => scrollToSection('home')} aria-label="Home">
              <svg viewBox="0 0 24 24" className="home-icon-svg-v2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12L12 3l9 9" />
                <path d="M9 21V12h6v9" />
              </svg>
            </button>
            <div className="nav-links-vertical-v2">
              <a onClick={() => scrollToSection('home')} className="nav-link-v2">Home</a>
              <a onClick={() => handleGalleryClick('bts')} className="nav-link-v2">Behind the scenes</a>
              <a onClick={() => handleGalleryClick('pictures')} className="nav-link-v2">Pictures</a>
              <a onClick={() => scrollToSection('about')} className="nav-link-v2">About</a>
            </div>
          </div>
        </nav>

        <div className="logo-center-v2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="logo-animated-svg-v2">
            <svg viewBox="0 0 200 200" className="header-logo-svg-v2" role="img" aria-label="Kalpit Films logo">
              <defs>
                <linearGradient id="sprocketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
                <linearGradient id="goldHighlight" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#d97706" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="85" stroke="#d97706" strokeWidth="0.75" strokeDasharray="3 8" opacity="0.3" fill="none" />
              <circle cx="100" cy="100" r="80" stroke="#fbbf24" strokeWidth="0.5" opacity="0.45" fill="none" />
              <rect x="38" y="22" width="22" height="156" rx="5" stroke="url(#sprocketGrad)" strokeWidth="3.5" strokeLinejoin="round" fill="none" className="logo-sprocket-v2" />
              <rect x="44" y="28" width="10" height="8" rx="1.5" fill="#d97706" stroke="#fbbf24" strokeWidth="1.5" className="logo-sprocket-hole-v2" style={{ animationDelay: '0.4s' }} />
              <rect x="44" y="48" width="10" height="8" rx="1.5" stroke="#fbbf24" strokeWidth="1.5" className="logo-sprocket-hole-v2" style={{ animationDelay: '0.6s' }} />
              <rect x="44" y="68" width="10" height="8" rx="1.5" fill="#d97706" stroke="#fbbf24" strokeWidth="1.5" className="logo-sprocket-hole-v2" style={{ animationDelay: '0.8s' }} />
              <rect x="44" y="88" width="10" height="8" rx="1.5" stroke="#fbbf24" strokeWidth="1.5" className="logo-sprocket-hole-v2" style={{ animationDelay: '1.0s' }} />
              <rect x="44" y="108" width="10" height="8" rx="1.5" fill="#d97706" stroke="#fbbf24" strokeWidth="1.5" className="logo-sprocket-hole-v2" style={{ animationDelay: '1.2s' }} />
              <rect x="44" y="128" width="10" height="8" rx="1.5" stroke="#fbbf24" strokeWidth="1.5" className="logo-sprocket-hole-v2" style={{ animationDelay: '1.4s' }} />
              <rect x="44" y="148" width="10" height="8" rx="1.5" fill="#d97706" stroke="#fbbf24" strokeWidth="1.5" className="logo-sprocket-hole-v2" style={{ animationDelay: '1.6s' }} />
              <line x1="67" y1="22" x2="67" y2="178" stroke="#d97706" strokeWidth="1" strokeDasharray="4 2" opacity="0.4" />
              <path d="M 60 92 C 85 92, 115 42, 155 42 C 168 42, 172 52, 162 65 C 144 88, 108 106, 60 106" stroke="url(#goldHighlight)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" className="logo-sweep-v2" />
              <path d="M 60 110 C 105 110, 142 132, 160 156 C 168 168, 156 178, 142 178 C 112 178, 88 142, 60 124" stroke="url(#sprocketGrad)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" className="logo-trail-v2" />
              <circle cx="60" cy="100" r="4.5" fill="#d97706" />
              <circle cx="108" cy="100" r="3" fill="#ffffff" />
            </svg>
          </div>
          <span className="logo-cursive-v2">Kalpit Films</span>
        </div>

        <div className="social-menu-right-v2" style={socialStyle}>
          <a href="https://facebook.com/kalpitfilms" target="_blank" rel="noopener noreferrer" className="social-icon-v2 facebook" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor" className="social-svg-v2">
              <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h3V1h-4c-3.3 0-5 1.7-5 5v2z" />
            </svg>
          </a>
          <a href="https://instagram.com/kalpitfilms" target="_blank" rel="noopener noreferrer" className="social-icon-v2 instagram" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="social-svg-stroke-v2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a href="https://youtube.com/kalpitfilms" target="_blank" rel="noopener noreferrer" className="social-icon-v2 youtube" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="currentColor" className="social-svg-v2">
              <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.52 3.5 12 3.5 12 3.5s-7.52 0-9.388.553a3.003 3.003 0 0 0-2.11 2.11C0 8.03 0 12 0 12s0 3.97.553 5.837a3.003 3.003 0 0 0 2.11 2.11c1.867.553 9.388.553 9.388.553s7.52 0 9.388-.553a3.002 3.002 0 0 0 2.11-2.11C24 15.97 24 12 24 12s0-3.97-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>
        
        {/* Right-aligned container for the dark/light toggle */}
        <div className="header-right-v2">
          <div className="theme-toggle-container-v2">
            <label className="theme-switch-v2" htmlFor="theme-checkbox">
              <input 
                type="checkbox" 
                id="theme-checkbox"
                checked={theme === 'light'} 
                onChange={toggleTheme} 
                aria-label="Toggle between dark and light theme"
              />
              <span className="theme-slider-v2">
                <span className="theme-slider-icon-v2 moon-icon-v2">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-7.64-7.64c-.44-.06-.9-.1-1.36-.1z"/></svg>
                </span>
                <span className="theme-slider-icon-v2 sun-icon-v2">
                  <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
                </span>
                <span className="theme-slider-thumb-v2"></span>
              </span>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
}
